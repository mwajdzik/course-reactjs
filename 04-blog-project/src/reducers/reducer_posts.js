import {FETCH_POSTS, FETCH_POST, DELETE_POST} from "../actions";
import keyBy from 'lodash/keyBy'

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return keyBy(action.payload.data, 'id');
        case FETCH_POST:
            const post = action.payload.data;
            return {...state, [post.id]: post};
        case DELETE_POST:
            console.log(2, action.payload.data);
            return {...state};
        default:
            return state;
    }
}