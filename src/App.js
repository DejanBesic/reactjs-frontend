import React, { Component } from 'react';
import axios from 'axios';

const login = (user) => {
  axios.post("http://localhost:8082/login", user)
  .then((response) => console.log(response.data))
  .catch((err) => {console.log(err)});
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
        id: 12,
        role: "admin",
      }
    }
  }

  usernameChange = (evt) => {
    this.setState({
      user: {
        ...this.state.user,
        username: evt.target.value,
     }
    });
  }

  passwordChange = (evt) => {
    this.setState({
      user: {
        ...this.state.user,
        password: evt.target.value,
      }
    });
  }
  
  render() {
    return (
      <div >
        <input className="form-control" value={this.state.username} id="username" type="text" onChange={this.usernameChange} />
        <input className="form-control" id="password" type="password" value={this.state.password} onChange={this.passwordChange} />
        <button type="button" onClick={() => login(this.state.user)}>Login</button>
      </div>
    );
  }
}

export default App;
