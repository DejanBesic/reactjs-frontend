import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainPage extends Component {
    render() {
        return (
            <h1>MAIN PAGE</h1>
        );
    }
}

export default connect(null, null)(MainPage);