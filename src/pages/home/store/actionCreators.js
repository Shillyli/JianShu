import axios from 'axios';
import * as constants from './constants.js';
import { fromJS } from 'immutable';

const changeHome = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendImg: result.recommendImg,
	writerList: result.writerList
});

const addHomeList = (list, nextPage) => ({
	type: constants.ADD_LIST,
	list: fromJS(list),
	nextPage
});

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
  		const result= res.data.data;
       dispatch(changeHome(result));
     })
	}
}

export const getMoreList = (page) => {
	return(dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
  		const result= res.data.data;
      dispatch(addHomeList(result,page+1));
     })
	}
}

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_TOP,
	show
})