/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import {Provider} from 'react-redux';
// import configureStore from './store/configureStore';
import RouterComponent from './src/router/RouterComponent'

const App = () => {


  return (
        <RouterComponent/>
  );
};

export default App;

/*
  const store = configureStore();

      <Provider store={store}>
      </Provider>

 */
