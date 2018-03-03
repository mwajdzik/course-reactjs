import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions/index";

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input value={this.state.term}
                       onChange={this.onInputChange}
                       className="form-control"
                       placeholder="Get a five-day forecast in your favorite cities"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);