import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import Form from '../Shared/Form';
import PropTypes from 'prop-types';
import { getTypes } from '../store/actions/types';
import { search } from '../store/actions/facility';

import "../Shared/SharedCSS/CheckBox.css";
import 'react-dates/lib/css/_datepicker.css';



class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            people: 0,
            searchText: "",
            type: "",
            category: "",
            parking: false,
            wifi: false,
            breakfast: false,
            halfBoard: false,
            fullBoard: false,
            tv: false,
            kitchen: false,
            bathroom: false,            
        }
    }

    componentWillMount() {
        this.props.getTypes();
    }

    searchTextChange = (evt) => this.setState({ searchText: evt.target.value });

    onDatesChange({ startDate, endDate }) {
        const { stateDateWrapper } = this.props;
        this.setState({
          startDate: startDate && stateDateWrapper(startDate),
          endDate: endDate && stateDateWrapper(endDate),
        });
      }

    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
    }

    onTypeChange = (evt) => this.setState({ type: evt.target.value });

    onParkingChange = () => this.setState({parking: !this.state.parking});

    onWifiChange = () => this.setState({wifi: !this.state.wifi});

    onBreakfastChange = () => this.setState({breakfast: !this.state.breakfast});

    onHalfBoardChange = () => this.setState({halfBoard: !this.state.halfBoard});

    onFullBoardChange = () => this.setState({fullBoard: !this.state.fullBoard});

    onTvChange = () => this.setState({tv: !this.state.tv});

    onKitchenChange = () => this.setState({kitchen: !this.state.kitchen});

    onBathroomChange = () => this.setState({bathroom: !this.state.bathroom});

    categories = ['Uncategorized', '1', '2', '3', '4', '5'];

    render(){
        return(
            <div className="col-7" style={{paddingTop: 50}}  >
                 <Form
                        style={{textAlign: 'center'}}
                        className="demoForm container"
                        onSubmit={() => this.props.search(this.state)}
                        action={() => {}}
                    >
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label className="search-text" >Location: </label>
                            <input 
                                type="text"
                                className="form-control"
                                name="searchText"
                                onChange={this.searchTextChange}
                                value={this.state.searchText}
                            />
                        </div>

                         <div>
                            <DateRangePicker 
                                onDatesChange={this.onDatesChange} 
                                onFocusChange={this.onFocusChange} 
                                startDate={startDate}
                        endDate={endDate}
                                />
                        </div>
                        
                        { /* TYPE */ }
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label className="search-text">Type: </label>
                            <select className="form-control" onChange={this.onTypeChange} value={this.state.type}>
                                <option value="-1" key="-1">Select type...</option>
                                {this.props.types.map(type => 
                                    <option value={type.id} key={type.id}>{type.name}</option>)
                                }
                            </select>
                        </div>


                        { /*  CATEGORY */ }
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label className="search-text">Category: </label>
                            <select className="form-control">
                                <option value="-1" key="-1">Select category...</option>
                                {this.categories.map(category => 
                                    <option value={category} key={category}>{category} star</option>)
                                }
                            </select>
                        </div>

                        
                        <div style={{textAlign: 'left'}}>
                            <label className="search-text" >Additional services:</label>
                        </div>

                        { /* PARKING */ }
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label className="checkbox-container">Parking
                                <input type="checkbox" value={this.state.parking} onChange={this.onParkingChange}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        
                        { /* WIFI */ }
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label className="checkbox-container">Wi-Fi
                                <input type="checkbox" value={this.state.wifi} onChange={this.onWifiChange}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        { /* BREAKFAST */ }
                        <div className="form-group" style={{textAlign: 'left'}}>
                            
                            <label className="checkbox-container">Breakfast
                                <input type="checkbox" value={this.state.breakfast} onChange={this.onBreakfastChange}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        { /* HALFBOARD */ }
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label className="checkbox-container">Halfboard
                                <input type="checkbox" value={this.state.halfBoard} onChange={this.onHalfBoardChange}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        { /* FULLBOARD */ }
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label className="checkbox-container">Fullboard
                                <input type="checkbox" value={this.state.fullBoard} onChange={this.onFullBoardChange}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        { /* TV */ }
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label className="checkbox-container">TV
                                <input type="checkbox" value={this.state.tv} onChange={this.onTvChange}/>
                                <span className="checkmark"></span> 
                            </label>
                        </div>

                        { /* KITCHEN */ }
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label className="checkbox-container">Kitchen
                                <input type="checkbox" value={this.state.kitchen} onChange={this.onKitchenChange}/>
                                <span className="checkmark"></span> 
                            </label>
                        </div>

                        { /* PRIVATE BATHROOM */ }
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label className="checkbox-container">Private bathroom
                                <input type="checkbox" value={this.state.bathroom} onChange={this.onBathroomChange}/>    
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        <button type="button" onClick={() => this.props.search(this.state)} className="btn btn-primary">
                            Search
                        </button>
                    </Form>
            </div>
        );
    }
}


SearchForm.propTypes = {
    getTypes: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    types: PropTypes.array
}

const mapDispatch = dispatch => ({
    getTypes: () => dispatch(getTypes()),
    search: (form) => dispatch(search(form)),
});

const mapState = (state) => ({
    types: state.types.types,
});

export default connect(mapState, mapDispatch)(SearchForm);
