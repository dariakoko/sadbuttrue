import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
// import {Image} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = props => {
    const {title, image} = props;
    const color = 'black';

    const TabText = styled.Text`
		color: 'rgb(255, 255, 255)';
		font-size: 15;
		text-align: center;
		font-family: EuclidFlex-Bold;
		margin-top: 3;
	`;

    const TabItem = styled.SafeAreaView`
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 60;
		padding-top: 7;
		padding-bottom: 7;
		background-color: 'rgb(0, 0, 0)';
	`;

    const ImageBar = styled.Text`
        text-align: center;
        font-size: 20
    `;

    const ItemView = styled.View`
        flex-direction: column;
    `;

    return (
        <TabItem>
            <ItemView>
                <ImageBar>{image}</ImageBar>
                <TabText>{title}</TabText>
            </ItemView>
        </TabItem>
    );
};

Tab.propTypes = {
    focused: PropTypes.bool,
    image: PropTypes.string,
    title: PropTypes.string,
    iconName: PropTypes.string,
    onPress: PropTypes.func,
};

export default Tab;
