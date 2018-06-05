import React, { Component } from 'react';

const login = (user) => {
  fetch("http://localhost:8082/login/post", {
    method: 'post',
    body: JSON.stringify(user),
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    // mode: 'cors'
  })
  .then((res) => {console.log(res)})
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
