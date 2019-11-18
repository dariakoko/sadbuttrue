import React, {Component} from 'react';
import {Button, ScrollView, Text, TouchableOpacity} from 'react-native';
import RoundedComponent from '../components/RoundedComponent';
import ChangeAccountPopup from '../components/ChangeAccountPopup';
import Styles from '../Styles';
import {Graph} from '../components/Graph';
import styled from 'styled-components/native/dist/styled-components.native.esm';

const ButtonView = styled.View`
    margin-left: 20;
    margin-top: 30;
    borderRadius: 100;
    backgroundColor: 'rgb(255, 255, 255)'
`;

export class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            showPopup: false,
            personalPressed: true,
            familyPressed: false,
        };
    }

    openPopup() {
        this.setState({showPopup: true});
    }

    closePopup() {
        this.setState({showPopup: false});
    }

    personalPress() {
        this.setState({
            personalPressed: true,
            familyPressed: false,
            showPopup: false,
        });
    }

    familyPress() {
        this.setState({
            personalPressed: false,
            familyPressed: true,
            showPopup: false,
        });
    }

    render() {
        return (
            <>
                <ScrollView style={Styles.scrollView}>
                    {this.state.personalPressed ?
                        <>
                            <RoundedComponent
                                description={'Current week spending'}
                                additionalDescription={'You have today ' +`${16-5.6-5}`+'€'}
                                additionalComponent={<Graph/>}
                            />
                            <RoundedComponent
                                description={'You spend ' + `${Math.round((5 + 7 + 10 + 3 + 15 + 6+ 11.6) / 6)}` + '/16€ per day.'}
                                additionalDescription={'Great job! You can spend a bit more tomorrow :)'}
                            />
                            <RoundedComponent
                                description={'You are ' + `${Math.round(((5 + 7 + 10 + 3 + 15 + 6+ 11.6) / 6) / 16 * 100)}` + '% successful\nYou can spend more tomorrow :)'}
                            />
                            <Text style={Styles.betweenModulesText}>History:</Text>
                            <RoundedComponent
                                description={'🚂:     metro ticket to Junction      5.6€'}
                            />
                            <RoundedComponent
                                description={'JUNCTION:    Junction notebook    5€'}
                            />
                            <TouchableOpacity style={Styles.addButtonContainer}>
                                <ButtonView>
                                    <Button
                                        title={'➕'}
                                        onPress={{}}
                                    />
                                </ButtonView>
                            </TouchableOpacity>
                        </> :
                        <>
                            <RoundedComponent
                                description={'Family needs'}
                                additionalComponent={<Graph/>}
                            />
                        </>
                    }
                </ScrollView>
                <ChangeAccountPopup
                    onPress={this.openPopup.bind(this)}
                    visible={this.state.showPopup}
                    onTouchOutside={this.closePopup.bind(this)}
                    onPressPersonal={this.personalPress.bind(this)}
                    onPressFamily={this.familyPress.bind(this)}
                />
            </>
        );
    }
}

export default MainScreen;
