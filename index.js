/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReviewForm from './components/ReviewForm';
import React from 'react';
import {Root} from 'native-base';
import ReviewList from './components/ReviewList';
import {createStore, combineReducers} from 'redux';
import reviewsReducers from './reducers/ReviewsReducers';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({reviews: reviewsReducers});
const store = createStore(rootReducer);

const TabNavigator = createBottomTabNavigator({
    ReviewForm,
    ReviewList,
});

const AppContainer = createAppContainer(TabNavigator);

const wrappedView = () => {
    return (
        <Provider store={store}>
            <Root>
                <AppContainer/>
            </Root>
        </Provider>
    );
};


AppRegistry.registerComponent(appName, () => wrappedView);
