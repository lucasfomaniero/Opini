/**
 * @format
 */

import {AppRegistry, AsyncStorage} from 'react-native';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReviewForm from './components/ReviewForm';
import React from 'react';
import {Root} from 'native-base';
import ReviewList from './components/ReviewList';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import reviewsReducers from './reducers/ReviewsReducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';

const persistConfig = {
    key: 'reviews',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({reviews: reviewsReducers});
const persistentReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistentReducer,
    applyMiddleware(thunk),
);

const persistor = persistStore(store);


const TabNavigator = createBottomTabNavigator({
    ReviewForm,
    ReviewList,
});

const AppContainer = createAppContainer(TabNavigator);

const wrappedView = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Root>
                    <AppContainer/>
                </Root>
            </PersistGate>
        </Provider>
    );
};


AppRegistry.registerComponent(appName, () => wrappedView);
