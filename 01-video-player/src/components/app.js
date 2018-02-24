import _ from "lodash";
import React, {Component} from "react";
import SearchBar from "./search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
import {YOUTUBE_API_KEY} from "./key";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {videos: [], selectedVideo: null};
        console.log('App 1: Set the initial state:', this.state);
        this.videoSearch('Z nurtem życia');
    }

    videoSearchHandler = _.debounce((term) => {
        this.videoSearch(term)
    }, 2000);

    videoSearch(term) {
        YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
            console.log('App  2.1: Modifying the state');
            this.setState({videos, selectedVideo: videos[0]});
            console.log('App  2.2: Modified the state:', this.state);
        });

        console.log('App Video Search done');
    }

    render() {
        console.log('App Rendering');

        return (
            <div>
                <SearchBar onSearchTermChange={(term) => this.videoSearchHandler(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}/>
            </div>
        );
    }
}
