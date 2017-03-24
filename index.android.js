/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
}
    from 'react';
import {
    AppRegistry,
    Navigator,
    ToastAndroid
}
    from 'react-native';

import GankShowComponent from './js/GankShowComponent'

export default class MyProject extends Component {
  render() {
        let defaultName = 'GankShowComponent';
        let defaultComponent = GankShowComponent;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route) => {
                    return {...Navigator.SceneConfigs.FadeAndroid, gestures: false};
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route} navigator={navigator}/>
                }}/>
        );
    }
}


AppRegistry.registerComponent('MyProject', () => MyProject);
