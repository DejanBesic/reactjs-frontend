import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/store';
import LoginPage from './Login/LoginPage';
import MainPage from './Main/MainPage';

class App extends Component {  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact={true} component={MainPage}/>
            <Route path="/main" component={MainPage}/>
            <Route path="/login" component={LoginPage}/>
            </div>
        </Router>
      </Provider>

      // <Provider store={store} >
      //   <LoginPage />
      // </Provider>
    );
  }
}

export default App;

