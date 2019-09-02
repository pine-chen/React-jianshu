import React, {
	PureComponent
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Link
} from 'react-router-dom';
import {
	actionCreators
} from '../store';
import {
	ListItem,
	ListInfo,
	LoadMore
} from '../style.js';

class List extends PureComponent {
	render() {
		const {
			list,
			page,
			getMoreList
		} = this.props;
		return (
			<div>
				{
					list.map((item, index) => {
						return (
							<Link key={index} to={'/detail/' + item.get('id')} >
								<ListItem key = {index}>
									<img 
										className = "ListPic" 
										alt = "" 
										src = {item.get('imgUrl')}
									/>
									<ListInfo>
										<h3 className = "ListTitle">{item.get('title')}</h3>
										<p className = "ListDesc">{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						);
					})
				}
				<LoadMore onClick ={() => getMoreList(page)}>阅读更多</LoadMore>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage'])
})

const mapDispathToProps = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page));
	}
})

export default connect(mapStateToProps, mapDispathToProps)(List);