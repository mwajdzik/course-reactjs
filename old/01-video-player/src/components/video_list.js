import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = ({videos, onVideoSelect}) => {
    console.log('Rendering video list');

    let videoItems = videos.map(v => {
        return (<VideoListItem video={v} key={v.etag}
                               onVideoSelect={onVideoSelect}/>)
    });

    return (
        <ul className="col-lg-4 col-md-12 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;