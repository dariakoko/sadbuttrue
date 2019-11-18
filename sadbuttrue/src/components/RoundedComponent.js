import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
// import {Actions} from 'react-native-router-flux';
import styled from 'styled-components';
import Styles from '../Styles';

const RoundedComponent = ({description, additionalComponent, additionalDescription, descriptionSmall, additionalDescriptionSmall, additionalComponentSmall}) => {

    return (
        <>
            <View style={Styles.roundedView}>
                <Text style={Styles.textView}>{description}</Text>
                {additionalDescription && <Text style={Styles.smallText}>{additionalDescription}</Text>}
                {additionalComponent && <View style={Styles.componentView}>{additionalComponent}</View>}
            </View>
            {descriptionSmall &&
            <View style={Styles.roundedViewSmall}>
                <Text style={Styles.textView}>{descriptionSmall}</Text>
                {additionalDescriptionSmall && <Text style={Styles.smallText}>{additionalDescriptionSmall}</Text>}
                {additionalComponentSmall && <View style={Styles.componentView}>{additionalComponentSmall}</View>}
            </View>
            }
        </>
    );
};

RoundedComponent.propTypes = {
    description: PropTypes.string,
    additionalComponent: PropTypes.shape({}),
    additionalDescription: PropTypes.string,
    descriptionSmall: PropTypes.string,
    additionalDescriptionSmall: PropTypes.string,
    additionalComponentSmall: PropTypes.shape({}),
};

export default RoundedComponent;
