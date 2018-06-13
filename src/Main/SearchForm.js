import { Component } from 'react';
import Form from '../Shared/Form';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: "",
        }
    }

    searchTextChange = (evt) => {
        this.setState({ searchText: evt.target.value });
    }

    render(){
        return(
            <div className="col-3">
                 <Form
                        style={{textAlign: 'center'}}
                        className="demoForm container"
                        onSubmit={() => this.props.login(this.state.user)}
                        action={() => {}}
                    >
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label>Search</label>
                            <input 
                                type="text"
                                className="form-control"
                                name="searchText"
                                onChange={this.searchTextChange}
                                value={this.state.searchText}
                            />
                        </div>
                        <Dropdown />
                        <button type="button" onClick={() => this.props.login(this.state.user)} className="btn btn-primary">
                            Sign up
                        </button>
                        { this.props.authentication.error ? 
                            <LoginError errorMessage={this.props.authentication.error} />
                        : null
                        }
                    </Form>
            </div>
        );
    }
}

export default SearchForm;
