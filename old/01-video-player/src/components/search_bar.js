import React, {Component} from "react";

export default class SearchBar extends Component {

    // in constructor we set the state
    constructor(props) {
        super(props);
        this.state = {term: ''};        // the only place we assign state, use setState otherwise

        console.log('SearchBar Constructor:', this.state, this.props);
    }

    // adding value={...} to <input>, turns it into a controlled component
    render() {
        console.log('SearchBar Rendering');

        return (
            <div className="search-bar">
                <input value={this.state.term}
                       onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        console.log("SearchBar 1: Input Change");
        this.setState({term: term});

        console.log("SearchBar 2: Input Change:", term, this.state);
        this.props.onSearchTermChange(term);

        console.log("SearchBar 3: Done");
    }
}
