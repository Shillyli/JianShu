import { fromJS } from 'immutable';
import * as constants from './constants.js';

const defaultState = fromJS({
	topicList: [],
	articleList:[],
	recommendImg:[],
	writerList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state,action) => {
  return state.merge({
          "topicList": fromJS(action.topicList),
          "articleList": fromJS(action.articleList),
          "recommendImg": fromJS(action.recommendImg),
          "writerList": fromJS(action.writerList)
      });
};

const addList = (state,action) => {
  return state.merge({
        "articleList":state.get('articleList').concat(action.list),
        "articlePage":action.nextPage
      });
};

export default (state = defaultState,action) =>{
  switch(action.type){
  	case constants.CHANGE_HOME_DATA:
  	  return changeHomeData(state,action);
    case constants.ADD_LIST:
      return addList(state,action)
    case constants.TOGGLE_TOP:
      return state.set('showScroll',action.show);
  	default:
  	  return state;
  }
}