import React, {Component} from "react";
import BookList from "../containers/book_list";
import BookDetail from "../containers/book_detail";

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BookList/>
                <BookDetail/>
            </div>
        );
    }
}
