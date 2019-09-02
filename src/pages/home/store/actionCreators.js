import axios from 'axios';
import * as constants from './constants.js';
import {
	fromJS
} from 'immutable';

const changeHomeData = (data) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: data.topicList,
	articleList: data.articleList,
	recommendList: data.recommendList
})


const addHomeList = (data, nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	data: fromJS(data),
	nextPage
})

const changeWriterData = (data) => ({
	type: constants.CHANGE_WRITER_DATA,
	data: fromJS(data),
	writerTotalPage: Math.ceil(data.length / 5)
})


export const changeWriterPage = (writerPage) => ({
	type: constants.CHANGE_WRITER_PAGE,
	writerPage
})

export const getWriterInfo = () => {
	return (dispatch) => {
		axios.get('/api/writerList.json').then((res) => {
			const data = res.data.data;
			dispatch(changeWriterData(data));
		}).catch(() => {
			console.log('error');
		})
	}
}

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const data = res.data.data;
			dispatch(changeHomeData(data));
		})
	}
}

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
			const data = res.data.data;
			dispatch(addHomeList(data, page + 1));
		})
	}
}

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_SHOW,
	show
})