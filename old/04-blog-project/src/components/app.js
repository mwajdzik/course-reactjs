import React, {Component} from "react";

export default class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Smart Blog</h1>
                </header>
                <div>
                    {/* Routing content */}
                    {this.props.children}
                </div>
                <footer>
                    &copy; amw061 2017
                </footer>
            </div>
        );
    }
}
