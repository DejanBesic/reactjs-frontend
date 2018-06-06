import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../store/actions/authentication';
import './LoginScreen.css';


class LoginScreen extends Component {
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

    render(){
        return (
            <div className="demoForm container">
                <h2>Sign up</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="email"
                        onChange={this.usernameChange}
                        value={this.state.username}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.passwordChange}
                    />
                </div>
                <button type="button" onClick={() => this.props.login(this.state.user)} className="btn btn-primary">
                    Sign up
                </button>
            </div>

        /*  <div className="container" style={{paddingTop: 100, display: 'flex', flexDirection: 'column' }}>
                <input className="form-control" style={{flex: 0.5}}  value={this.state.username} id="username" type="text" onChange={this.usernameChange} />
                <input className="form-control" style={{flex: 0.5}} id="password" type="password" value={this.state.password} onChange={this.passwordChange} />
                <Button color="danger" style={{alignSelf: 'center'}} onClick={() => this.props.login(this.state.user)}>Login</Button>
            </div> */
        );
    }
}

LoginScreen.propTypes = {
    login: PropTypes.func.isRequired,
}

const mapDispatch = dispatch => ({
    login: (user) => dispatch(login(user)),
});

const mapState = (state) => ({
    authentication: state,
});

export default connect(mapState, mapDispatch)(LoginScreen);