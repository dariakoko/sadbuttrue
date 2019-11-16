import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {Text} from "react-native-elements";
import Styles from "../Styles";
// import Icon from 'react-native-vector-icons/FontAwesome';

const navHeight = 40;
const containerPadding = 20;

const StyledTouchableOpacity = styled.TouchableOpacity`
	height: ${navHeight};
	margin-left: ${props => (props.title ? containerPadding : props.left ? containerPadding / 2 : 0)};
	margin-right: ${props => (props.title ? containerPadding : props.right ? containerPadding / 2 : 0)};
	justify-content: center;
`;

const NavButton = props => {
    const {onPress, title, left, right, navButtonText} = props;

    return (
        <StyledTouchableOpacity onPress={onPress} left={left} right={right} title={title}>
            {right ?
                <Text style={Styles.errorText}>{navButtonText}</Text>
                :
                <Text style={Styles.backButtonText}>{navButtonText}</Text>
            }
        </StyledTouchableOpacity>
    );
};

NavButton.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    left: PropTypes.bool,
    right: PropTypes.bool,
    navButtonText: PropTypes.string
};

export default NavButton;
