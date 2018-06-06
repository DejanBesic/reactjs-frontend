import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { login } from '../store/actions/authentication';
import Form from '../Shared/Form';
import LoginError from '../Errors/LoginError';
import Header from '../Shared/Header';

class LoginPage extends Component {
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
        if(this.props.authentication.user){
            return( <Redirect to={"/main"} /> );
        }

        return (
            <div style={{paddingLeft: 15, paddingRight: 15}}>
                <Header />
                <div className="row" style={{paddingTop: 10}}>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <Form
                            style={{textAlign: 'center'}}
                            className="demoForm container"
                            onSubmit={() => this.props.login(this.state.user)}
                            action={() => {}}
                        >
                            <h2 >Sign up</h2>
                            <div className="form-group" style={{textAlign: 'left'}}>
                                <label style={{textAlign: 'left'}} htmlFor="username">Username</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    onChange={this.usernameChange}
                                    value={this.state.username}
                                />
                            </div>
                            <div className="form-group" style={{textAlign: 'left'}}>
                                <label  htmlFor="password">Password</label>
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
                            { this.props.authentication.error ? 
                                <LoginError errorMessage={this.props.authentication.error} />
                            : null
                            }
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
}

const mapDispatch = dispatch => ({
    login: (user) => dispatch(login(user)),
});

const mapState = (state) => ({
    authentication: state.authentication,
});

export default connect(mapState, mapDispatch)(LoginPage);