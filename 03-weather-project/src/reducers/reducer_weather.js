import {FETCH_WEATHER} from "../actions/index";

// redux-promise took a promise, and when resolved returned a payload for us
// state = [], the initial state is the empty array of cities
export default function (state = [], action) {
    console.log('reducer_weather:', action);

    switch (action.type) {
        case FETCH_WEATHER:
            // return state.push(action.payload.data); - don't do it!!! we shouldn't mutate the state
            // return state.concat([action.payload.data]);  - the same as below ES6
            return [action.payload.data, ...state];
        default:
            return state;
    }
}