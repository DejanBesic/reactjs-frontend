import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import LoginPage from './Login/LoginPage';
import MainPage from './Main/MainPage';

class App extends Component {  
  render() {
    return (
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null} >
            <Router>
              <div>
                <Route path="/" exact={true} component={MainPage}/>
                <Route path="/main" component={MainPage}/>
                <Route path="/login" component={LoginPage}/>
                </div>
            </Router>
          </PersistGate>
        </Provider>
    );
  }
}

export default App;

