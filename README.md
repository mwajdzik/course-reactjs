# course-reactjs

- https://github.com/facebookincubator/create-react-app
- npm install -g create-react-app
- npx create-react-app my-app

# Babel

Needed to make sure that all JS versions (2015, 2016, ...) are turned into ES5 so all web browsers can run the code.

# Two module systems:

- import - ES2015 Modules - web apps
- require - CommonJS Modules - nodejs world

# JSX

HTML inside of JavaScript

# React vs. ReactDOM

- React - core - renders components
- ReactDOM - put components in DOM

# React vs. Redux

- React - provides view rendering
- Redux - provides global state

# Components

- functional (simple)
- class-based (allows interactions with other components and when state is required)

# State

- local of a component
- global managed by Redux and split into parts managed by reducers

# Redux

- a reducer - a function that returns a piece of the app state
- a container - a "smart" component (aware of Redux's state)

### ACTION CREATOR → ACTION → REDUCERS → new state creation (immutable) → rerender

Reducers generate state kept by Redux.
The state is modified by calling action creators.
The action creators return actions, that flow through middlewares, and then to the reducers.
Whenever a new state is produced, it flows through our containers, which re-render themselves.

### A functional component (don't have state):

```
export default () => {
    return <input />;
};
```

### A class-based component (have state):

```
export default class App extends Component {
    render() {
        return (
            <div>
                Search: <SearchBar/>
            </div>
        );
    }
}
```

### Design:

- identify components and containers
- which will be containers (talk to Redux)?

### Middleware

- allows to block, modify or pass thru actions before they hit reducers

#### https://github.com/gaearon/redux-thunk

- Redux Thunk middleware allows you to write action creators that return a function instead of an action.
- The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

```
export function fetchUsers {
    const request = axios.get('http://...');

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({type: 'FETCH_PROFILES', payload: data});
        });
    }
}
```

### Higher Order Components

- eg. created with connect(mapStateToProps)(App)
- Provider broadcasts to any connected component info on a change of the state
- connect is a HOC that's making direct communication between Provider and a component
- Provider has the access to a Redux Store

### State

- array-based

```
    const newPost = {id: 34};
    let newState = state.posts.filter(post => post.id !== id);
    return [...newState, newPost];
```

- object-based (faster, better)

```
    const newPost = {id: 34};
    return { ...state, [newPost.id]: newPost }
    
    --- 
    
    return _.omit(state, postIdToDelete);
```

### Good parts

- instead of loading data in componentDidMount we can use onEnter callback of Route (more usable components)

- https://github.com/facebookincubator/create-react-app

- npm run test:watch
