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
            backgroundColor: 'black',
            minHeight: 60,
            borderTopWidth: 0,
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
            alignSelf: 'flex-end',
            bottom: 20,
            paddingRight: 20,
        },
        addButtonContainer: {
            alignSelf: 'flex-start',
            bottom: 20,
            paddingRight: 20,
        },
        modalContent: {
            backgroundColor: '#fff',
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalWindow: {},
        scrollView: {
            backgroundColor: 'white',
        },
        centerView: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        roundedView: {
            height: 'auto',
            minHeight: 100,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 20,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
        },

        roundedViewSmall: {
            minHeight: 50,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 20,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
        },
        textView: {
            marginTop: 10,
            marginBottom: 10,
            marginRight: 10,
            marginLeft: 10,
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: 'EuclidFlex-Bold',
            color: 'white',
            textAlign: 'center',
        },
        // #6C8893
        componentView: {
            marginBottom: -10,
            marginRight: 10,
            marginLeft: 10,
        },
        footerText: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: 'EuclidFlex-Bold',
            color: 'black',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
        },
        betweenModulesText: {
            fontSize: 20,
            fontFamily: 'EuclidFlex-Bold',
            color: 'black',
            textAlign: 'left',
            paddingLeft: 20,
            marginTop: 10,
            marginBottom: -10,
        },
        smallText: {
            fontSize: 14,
            fontFamily: 'EuclidFlex-Bold',
            textAlign: 'center',
            color: 'white',
        },

    },
);

export default Styles;
//             position: 'absolute',
