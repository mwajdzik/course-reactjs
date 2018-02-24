import React, {Component} from "react";
import {connect} from "react-redux";

class BookDetail extends Component {

    render() {
        let book = this.props.book;
        
        if (!book) {
            return <div>Select a book on the left!</div>;
        }

        return (
            <div>
                <h2>{book.title}</h2>
                <p>Pages: {book.pages}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);