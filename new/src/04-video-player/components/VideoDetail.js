const VideoDetail = ({video}) => {
    if (video) {
        const url = `https://www.youtube.com/embed/${video.id.videoId}`;

        return <div>
            <div className="ui embed">
                <iframe className="embed-responsive-item"
                        src={url} title={video.snippet.title}></iframe>
            </div>

            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>;
    }
}

export default VideoDetail;
