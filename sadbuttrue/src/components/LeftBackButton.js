import React from 'react';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import NavButton from './NavButton';

const LeftBackButton = ({btnTitle}) => {

    return (
        <NavButton
            onPress={() => {Actions.pop()}}
            navButtonText={btnTitle}
            left
        />
    );
};

LeftBackButton.propTypes = {
    btnTitle: PropTypes.string,
};

export default LeftBackButton;
