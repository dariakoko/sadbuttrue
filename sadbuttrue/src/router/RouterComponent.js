import React, {PureComponent} from 'react';
import {Scene, Router, Lightbox, Tabs, Stack} from 'react-native-router-flux';
// import * as scenes from './_routerScenes';
// import Config from "../../Config";
import MainScreen from '../screens/MainScreen';
import MyFinancePlanScreen from '../screens/MyFinancePlanScreen';
import ChangeAccountPopup from '../components/ChangeAccountPopup';
import Styles from '../Styles';
import Tab from '../components/Tab';


class RouterComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            bottomModal: false,
        };
    }

    launchApp = () => {
        console.log('launchApp');
        /*        const AWS = require('aws-sdk');

                AWS.config.region = Config.AWS_REGION;
                AWS.config.credentials = {
                    accessKeyId: Config.ACCESS_KEY_ID,
                    secretAccessKey: Config.SECRET_ACCESS_KEY
                };*/
    };


    renderScene = item => (
        <Scene
            key={item.key}
            component={item.component}
            title={item.title}
            renderLeftButton={() => item.leftBtn}
            renderRightButton={() => item.rightBtn}
            titleStyle={{textAlign: 'center', alignSelf: 'center', flex: 1}}
        />
    );

//                         {scenes.scenes.map(item => this.renderScene(item))}
    render() {
        return (
            <Router>
                <Tabs tabBarStyle={Styles.tabBarStyle} showLabel={false}>
                    <Scene
                        key="mainScreen"
                        icon={Tab}
                        iconName
                        on={this.launchApp}
                        component={MainScreen}
                        image={'💸'}
                        title="sponps"
                        titleStyle={{textAlign: 'center', alignSelf: 'center', flex: 1}}
                        initial
                    />
                    <Scene
                        key="myFinancePlanScreen"
                        icon={Tab}
                        on={this.launchApp}
                        component={MyFinancePlanScreen}
                        image={'📖'}
                        title="planps"
                        titleStyle={{textAlign: 'center', alignSelf: 'center', flex: 1}}
                        initial
                    />
                </Tabs>
            </Router>
        );
    }
}

export default RouterComponent;
