import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFacilities } from '../store/actions/facility';
import SearchForm from './SearchForm';

class MainPage extends Component {
    componentWillMount(){
        this.props.getFacilities();
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <SearchForm />
                </div>
                <div className="col-4">
                    
                </div>
            </div>
        );
    }
}

MainPage.propTypes = {
    getFacilities: PropTypes.func.isRequired,
}

const mapDispatch = dispatch => ({
    getFacilities: () => dispatch(getFacilities()),
});

const mapState = (state) => ({
    facilities: state.facilities,
});

export default connect(mapState, mapDispatch)(MainPage);