/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import ReviewForm from './components/ReviewForm';
import {Root} from 'native-base';

const App: () => React$Node = () => {
  return (
    <Root>
      <ReviewForm/>
    </Root>
  );
};



export default App;
