import React, {
	PureComponent
} from 'react';
import {
	connect
} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Download from './components/download';
import Writer from './components/Writer';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style.js';
import {
	actionCreators
} from './store'

class Home extends PureComponent {



	handleScrollTop() {
		window.scrollTo(0, 0);
	}


	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className = "banner-img" src = "https://tuimeizi.cn/pure?w=625&h=270" alt = "" />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Download />
					<Writer />
				</HomeRight>
				{ 
					this.props.showScroll ? 
						<BackTop onClick={this.handleScrollTop}>
							<i className = "iconfont">&#xe62c;</i>
							</BackTop> : 
						null 
				}
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.props.changeWriterData();
		this.bindEvent();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvent() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}
}

const mapStateToProps = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispathToProps = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
	changeWriterData() {
		dispatch(actionCreators.getWriterInfo());
	},
	changeScrollTopShow(e) {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true));
		} else {
			dispatch(actionCreators.toggleTopShow(false));
		}
	}
});

export default connect(mapStateToProps, mapDispathToProps)(Home);