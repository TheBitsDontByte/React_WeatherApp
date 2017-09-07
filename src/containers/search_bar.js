import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: "" }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            term: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        //Fire action creator from here
        this.props.fetchWeather(this.state.term);
        //clear the enterd search term (refreshes it)
        this.setState({
            term: "",
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="input-group" >
                <input
                    value={this.state.term}
                    onChange={this.handleInputChange}
                    placeholder="Get a forecast for a city..."
                    className="form-control"
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    //causes the actioncreator to follow the middleware/reducer path
    return bindActionCreators({ fetchWeather }, dispatch);
}
//Null represents state, but in this situation, we dont care about state
export default connect (null, mapDispatchToProps)(SearchBar);