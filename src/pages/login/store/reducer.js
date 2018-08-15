import { fromJS } from 'immutable';
import * as constants from './constants.js';

const defaultState = fromJS({
  login: false
});

export default (state = defaultState,action) =>{
  switch(action.type){
    case constants.CHANGE_LOGIN:
      return state.set('login',fromJS(action.value));
  	case constants.HANDLE_OUT :
	    return state.set('login',fromJS(action.value));
  	default:
  	  return state;
  }
}