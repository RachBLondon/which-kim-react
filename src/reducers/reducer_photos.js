import { GET_PHOTOS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null};


export default function (state = INITIAL_STATE, action){
  switch(action.type){
  case GET_PHOTOS:
    return { ...state, all: action.payload.data };


    default:
    return state;
  }
}
