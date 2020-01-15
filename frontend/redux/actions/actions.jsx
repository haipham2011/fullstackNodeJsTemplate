import { SUBMIT_PLAYER, ADD_PLAYER, SORT_PLAYER } from './actionTypes';

export const addPlayer = () => {
    return {
        type: ADD_PLAYER
      }
}

export const sortPlayer = (sortType) => {
    return {
        type: SORT_PLAYER,
        payload: sortType
      }
}

export const submitPlayer = (player) => {
    return {
        type: SUBMIT_PLAYER,
        payload: player
      }
}


