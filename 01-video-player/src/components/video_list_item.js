import React from "react";

// {video} => { ... }   ===   (props) => { let video = props.video; ... }

const VideoListItem = ({video, onVideoSelect}) => {
    console.log('Rendering video list item:', video.snippet.title);

    const imgUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <li className="list-group-item"
            onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} alt={title}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;