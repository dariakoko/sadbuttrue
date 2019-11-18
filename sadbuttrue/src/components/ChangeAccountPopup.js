import React from 'react';
import {Button, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

import Styles from '../Styles';
import Modal, {ModalContent} from 'react-native-modals';
import PropTypes from 'prop-types';
import RoundedComponent from './RoundedComponent';

const ButtonView = styled.View`
    height: 50;
    width: 50;
    borderRadius: 100;
    backgroundColor: 'rgb(0, 0, 0)'
    justify-content: center;
	align-items: center
`;

const ButtonBigView = styled.View`
    height: 50;
    width: 200;
    borderRadius: 20;
    margin-bottom: 10;
    backgroundColor: 'rgb(0, 0, 0)'
    justify-content: center;
	align-items: center
`;

const TextTitle = styled.Text`
    font-size: 15;
	font-family: EuclidFlex-Bold;
	color: 'rgb(250, 33, 78)';
`;

const ButtonStyled = styled.Button`
    color: 'rgb(250, 250, 250)';
`;
// <RoundedComponent
//                             descriptionSmall={'🐽Personal'}
//                         />
export const ChangeAccountPopup = props => {
    const {onPress, visible, onTouchOutside, onPressPersonal, onPressFamily} = props;

    return (
        <View>
            <TouchableOpacity style={Styles.modalContainer}>
                <ButtonView>
                    <Button
                        title={'🐽'}
                        onPress={onPress}
                    />
                </ButtonView>
                <TextTitle>Change{`\n`}account</TextTitle>
            </TouchableOpacity>

            <Modal.BottomModal
                visible={visible}
                onTouchOutside={onTouchOutside}
                modalStyle={Styles.modalWindow}
            >
                <ModalContent style={Styles.modalContent}>
                    <ButtonBigView>
                        <Button
                            title={'🐽Personal'}
                            onPress={onPressPersonal}
                        />
                    </ButtonBigView>
                    <ButtonBigView>
                        <Button
                            title={'🐽 Family'}
                            onPress={onPressFamily}
                        />
                    </ButtonBigView>
                </ModalContent>
            </Modal.BottomModal>
        </View>
    );
};

ChangeAccountPopup.propTypes = {
    onPress: PropTypes.func,
    visible: PropTypes.bool,
    onTouchOutside: PropTypes.func,
    onPressPersonal: PropTypes.func,
    onPressFamily: PropTypes.func,
};

export default ChangeAccountPopup;
