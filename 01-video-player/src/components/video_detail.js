import React from "react";

const VideoDetail = ({video}) => {
    console.log('Rendering video detail');

    if (!video) {
        return <div>Loading...</div>;
    }

    const url = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="video-detail col-lg-8 col-md-12">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div><h5>{video.snippet.title}</h5></div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;