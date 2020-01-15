import { combineReducers } from "redux";
import { SUBMIT_PLAYER, ADD_PLAYER, SORT_PLAYER } from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
    bandState: "submit", //submit or adding
    players: [],
    sort: "asc"
}

function appReducer(state = initialState, action) {
    let payload = action.payload

    switch(action.type){
        case ADD_PLAYER:            
            return {
                ...state,
                bandState: "adding"
        };
        case SUBMIT_PLAYER:    
            return {
                ...state,
                players: _.orderBy([...state.players,payload], ['score'], [state.sort]),
                bandState: "submit"
        };
        case SORT_PLAYER:            
            return {
                ...state,
                players: _.orderBy(state.players, ['score'], [payload]),
                sort: payload
        };
        default:
            return state;
    }
}

export default combineReducers({ appReducer });