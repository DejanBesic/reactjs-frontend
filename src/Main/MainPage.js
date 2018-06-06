import React, { Component } from 'react';
import Header from '../Shared/Header';
import { connect } from 'react-redux';

class MainPage extends Component {
    render() {
        return (
            <div style={{paddingLeft: 15, paddingRight: 15}}>
                <Header />
                <h1>MAIN PAGE</h1>
            </div>
        );
    }
}

export default connect(null, null)(MainPage);