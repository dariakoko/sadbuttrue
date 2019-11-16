import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
// import {Actions} from 'react-native-router-flux';
import styled from 'styled-components/native/dist/styled-components.native.esm';

const RoundedView = styled.View`
    backgroundColor: white;
    height: 200;
    marginLeft: 20;
    marginRight: 20;
    marginTop: 30;
    marginBottom: 30;
    borderRadius: 20;
`;

const TextView = styled.Text`
    marginTop: 10;
    marginRight: 10;
    marginLeft: 10;
    font-weight: bold;
	font-size: 20;
	font-family: EuclidFlex-Bold;
`;

const RoundedComponent = ({description}) => {

    return (
        <RoundedView>
            <TextView>{description}</TextView>
        </RoundedView>
    );
};

RoundedComponent.propTypes = {
    description: PropTypes.string,
};

export default RoundedComponent;
