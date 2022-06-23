import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID as8t4-knD-iPDjH2pBDc3ZOoIkpdvtR25AfZrmZBkAA'
    }
});
