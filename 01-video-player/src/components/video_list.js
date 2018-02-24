import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
    console.log('Rendering video list');

    let videoItems = props.videos.map(v => {
        return (<VideoListItem video={v} key={v.etag}
                               onVideoSelect={props.onVideoSelect}/>)
    });

    return (
        <ul className="col-lg-4 col-md-12 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;