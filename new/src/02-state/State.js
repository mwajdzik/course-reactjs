import React from 'react';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class State extends React.Component {

    constructor(props) {
        super(props);

        this.state = {latitude: null, errorMessage: null};
    }

    componentDidMount() {
        console.log("Component did mount")

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude, errorMessage: null});
            },
            (error) => {
                this.setState({latitude: null, errorMessage: error.message});
            }
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component did update")
    }

    componentWillUnmount() {
        console.log("Component will unmount")
    }

    render() {
        if (this.state.latitude && !this.state.errorMessage) {
            return <SeasonDisplay latitude={this.state.latitude}/>
        }

        if (this.state.errorMessage && !this.state.latitude) {
            return <div>
                Error: {this.state.errorMessage}
            </div>
        }

        return <Spinner message='Please accept location request'/>
    }
}

export default State;
