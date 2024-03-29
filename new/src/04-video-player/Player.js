import React from 'react';

import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class Player extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
        error: null
    }

    componentDidMount() {
        this.onSearchSubmit('Kraków');
    }

    onSearchSubmit = async (term) => {
        try {
            const response = await youtube.get('/search', {params: {q: term}});

            this.setState({
                'videos': response.data.items,
                'selectedVideo': response.data.items[0]
            });
        } catch (ex) {
            this.setState({
                error: 'Service unavailable!'
            });
        }
    }

    onVideoSelect = (selectedVideo) => {
        this.setState({selectedVideo});
    }

    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        }

        return <div className='ui container'>
            <SearchBar onSubmit={this.onSearchSubmit}/>

            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={this.state.videos}
                                   onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Player;
