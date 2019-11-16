import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import NavButton from './NavButton';

export class RightCancelButton extends Component {

    constructor(props) {
        super(props);
    }

    cancelHandler = () => {

    }

    render() {
        return (
            <NavButton
                onPress={() => {
                    this.cancelHandler()
                }}
                navButtonText='Cancel'
                right
            />
        );
    }
};


export default RightCancelButton;
