import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const li = {
    display: 'inline-block',
    marginRight: 30,
    paddingTop: 10,
}


class Header extends Component {

    loginAndRegister = () => 
        <div>
            <li style={li}>
                <Link to="/login">Login</Link>
            </li>
            <li style={li}>
            <Link to="/register">Register</Link>
            </li>
        </div>
    render() {
        return(
            <div className="row">
                <div style={{background: 'black', flex: 1}}>
                    <ul style={{listStyleType: 'none', display: 'inline-block'}}>
                        {this.props.user ? 
                            <li>
                                <a href="https://www.google.com">{this.props.user.username}</a>
                            </li>
                            :
                             this.loginAndRegister()
                        }
                    </ul>
                </div>
            </div>
        );
    }
}


const mapState = (state) => ({
    user: state.authentication.user,
});

export default connect(mapState, null)(Header);