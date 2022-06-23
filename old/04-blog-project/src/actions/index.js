import axios from "axios";

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'amw061';
const url = `${ROOT_URL}/posts?key=${API_KEY}`;
const urlId = (id) => `${ROOT_URL}/posts/${id}?key=${API_KEY}`;

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
    console.log('Action creator fetchPosts');
    const request = axios.get(url);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    console.log('Action creator fetchPost:', id);
    const request = axios.get(urlId(id));

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function createPost(values) {
    console.log('Action creator createPost:', values);
    const request = axios.post(url, values);

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function deletePost(id) {
    console.log('Action creator deletePost:', id);
    const request = axios.delete(urlId(id));

    return {
        type: DELETE_POST,
        payload: request
    };
}