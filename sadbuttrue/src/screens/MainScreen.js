import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import RoundedComponent from '../components/RoundedComponent';


export class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    render() {
        return (
            <RoundedComponent
                description={'heeeeeeeee1234555678'}
            />
        );
    }
}

export default MainScreen;
