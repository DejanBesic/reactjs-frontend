import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import LoginScreen from './Login/LoginScreen';

class App extends Component {  
  render() {
    return (
      <Provider store={store} >
        <LoginScreen />
      </Provider>
    );
  }
}

export default App;
