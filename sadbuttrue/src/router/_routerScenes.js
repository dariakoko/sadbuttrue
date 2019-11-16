import React from "react";
import MainScreen from "../screens/MainScreen";
import LeftBackButton from '../components/LeftBackButton'
import RightCancelButton from "../components/RightCancelButton";

export const scenes = [
    {
        key: 'mainScreen',
        title: 'My finances',
        component: MainScreen,
        leftBtn: <LeftBackButton btnTitle='Home'/>,
        rightBtn: <RightCancelButton/>
    },
];
