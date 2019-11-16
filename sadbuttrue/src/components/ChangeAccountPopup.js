import React from 'react';
import {Button, View} from 'react-native';
import styled from 'styled-components/native';

import Styles from '../Styles';
import Modal, {
    ModalContent,
} from 'react-native-modals';
import PropTypes from 'prop-types';

const ButtonView = styled.View`
    height: 50;
    width: 50;
    borderRadius: 100;
    backgroundColor: 'rgb(30, 30, 0)'
    justify-content: center;
	align-items: center
`;

const TextTitle = styled.Text`
    font-size: 15;
	font-family: EuclidFlex-Bold;
`;

export const ChangeAccountPopup = props => {
    const {onPress, visible, onTouchOutside} = props;

    return (
        <View>
            <View style={Styles.modalContainer}>
                <ButtonView>
                    <Button
                        title={'🐽'}
                        onPress={onPress}
                    />
                </ButtonView>
                <TextTitle>Change{`\n`}account</TextTitle>
            </View>

            <Modal.BottomModal
                visible={visible}
                onTouchOutside={onTouchOutside}
                modalStyle={Styles.modalWindow}
            >
                <ModalContent style={Styles.modalContent}>
                    <Button
                        title={'🐽Personal'}
                    />
                    <Button
                        title={'🐽 Family'}
                    />
                </ModalContent>
            </Modal.BottomModal>
        </View>
    );
};

ChangeAccountPopup.propTypes = {
    onPress: PropTypes.func,
    visible: PropTypes.bool,
    onTouchOutside: PropTypes.func,
};

export default ChangeAccountPopup;
