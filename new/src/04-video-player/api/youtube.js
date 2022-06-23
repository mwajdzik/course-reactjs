import axios from "axios";

// https://console.developers.google.com/
// YouTube Data API v3

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: 'AIzaSyDyvjYZK5Zrv94wpbg1qTgDvPayCyWNBjs'
    }
});
