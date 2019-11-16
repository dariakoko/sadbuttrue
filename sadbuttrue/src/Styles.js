import React from 'react';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
        errorText: {
            fontSize: 16,
            marginTop: 10,
            marginLeft: 15,
            marginRight: 15,
            color: '#ff514f',
        },
        backButtonText: {
            fontSize: 16,
            marginTop: 10,
            marginLeft: 15,
            marginRight: 15,
            color: '#4698ff',
        },
        tabBarStyle: {
            backgroundColor: 'red',
            minHeight: 60,
            borderTopWidth: 0,
            shadowColor: 'green',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 10,
        },
        modalContainer: {
            position: 'absolute',
            flex: 1,
            bottom: 0,
            marginLeft: 20,
            marginRight: 20,
        },
        modalContent: {
            backgroundColor: '#fff',
            height: 200,
        },
        modalWindow: {

        },

    },
);

export default Styles;
//             position: 'absolute',
