import React, {PureComponent} from 'react';
import {Scene, Router, Tabs} from 'react-native-router-flux';
import MainScreen from '../screens/MainScreen';
import MyFinancePlanScreen from '../screens/MyFinancePlanScreen';
import Tab from '../components/Tab';
import Styles from '../Styles';


class RouterComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            bottomModal: false,
        };
    }

    launchApp = () => {
        console.log('launchApp');
        /*        const AWS = require('aws-sdk');

                AWS.config.region = Config.AWS_REGION;
                AWS.config.credentials = {
                    accessKeyId: Config.ACCESS_KEY_ID,
                    secretAccessKey: Config.SECRET_ACCESS_KEY
                };*/
    };


    renderScene = item => (
        <Scene
            key={item.key}
            component={item.component}
            title={item.title}
            renderLeftButton={() => item.leftBtn}
            renderRightButton={() => item.rightBtn}
            titleStyle={{textAlign: 'center', alignSelf: 'center', flex: 1}}
        />
    );

//                         {scenes.scenes.map(item => this.renderScene(item))}
    render() {
        return (
            <Router>
                <Tabs tabBarStyle={Styles.tabBarStyle} showLabel={false}>
                    <Scene
                        key="mainScreen"
                        icon={Tab}
                        iconName
                        component={MainScreen}
                        image={'💸'}
                        title="sponps"
                        titleStyle={Styles.footerText}
                        initial
                    />
                    <Scene
                        key="myFinancePlanScreen"
                        icon={Tab}
                        component={MyFinancePlanScreen}
                        image={'📖'}
                        title="planps"
                        titleStyle={Styles.footerText}
                    />
                </Tabs>
            </Router>
        );
    }
}

export default RouterComponent;
