import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




// state
// - always an object (key-value pairs)
// - never mutated directly
const initialState = {
    value: 1
};

// actions
//  - always have a type
//  - sometimes have a payload
const ACTION_INCREMENT = 'increment'
const ACTION_DECREMENT = 'decrement'
// it is common practice to have action creator functions
function increment() {
    return {
        type: ACTION_INCREMENT
    };
}
function decrement() {
    return {
        type: ACTION_DECREMENT
    };
}

// a reducer
// - is always a function
// - accepts 2 arguments
//      - arg1: the current state
//      - arg2: an action
// - optional: usually named for the data
function counter(state=initialState, action) {
    // inspect action and see what type it is
    switch(action.type) {
        // if(action.type === ACTION_INCREMENT){
            case ACTION_INCREMENT:
            // do some stuff
            return {
                value: state.value + 1
            };
            break;
        // }else if(action.type === ACTION_DECREMENT){
            case ACTION_DECREMENT:
                return {
                    value: state.value - 1
                };
            break;
        // }else {
            default:
            return state;

        // }

    }
}

// store
const store = createStore(counter);