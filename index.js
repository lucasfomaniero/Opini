/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReviewForm from './components/ReviewForm';
import React from 'react';
import {Root} from 'native-base';
import ReviewList from './components/ReviewList';


const TabNavigator = createBottomTabNavigator({
    ReviewForm,
    ReviewList
});

const AppContainer = createAppContainer(TabNavigator);

const wrappedView = () => {
    return (
        <Root>
            <AppContainer/>
        </Root>
    );
};



AppRegistry.registerComponent(appName, () => wrappedView);
