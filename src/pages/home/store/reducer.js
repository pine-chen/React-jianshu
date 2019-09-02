import {
	fromJS
} from 'immutable';
import * as constants from './constants.js';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	writerList: [],
	writerPage: 1,
	writerTotalPage: 1,
	articlePage: 1,
	showScroll: false
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.CHANGE_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList)
			})
		case constants.ADD_ARTICLE_LIST:
			return state.merge({
				articleList: state.get('articleList').concat(action.data),
				articlePage: action.nextPage
			})
		case constants.CHANGE_WRITER_DATA:
			return state.merge({
				writerList: action.data,
				writerTotalPage: action.writerTotalPage
			})
		case constants.CHANGE_WRITER_PAGE:
			return state.set('writerPage', action.writerPage);
		case constants.TOGGLE_SCROLL_SHOW:
			return state.set('showScroll', action.show)
		default:
			return state;
	}
}