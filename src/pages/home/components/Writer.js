import React, {
	PureComponent
} from 'react';
import {
	connect
} from 'react-redux';
import {
	actionCreators
} from '../store';
import {
	WriterWrapper,
	WriterInfoTitle,
	WriterInfoSwitch,
	WriterInfoList,
	WriterInfoItem,
	WriterName,
	WriterDesc,
	WriterFocus,
	WriterMore
} from '../style.js';

class Writer extends PureComponent {
	render() {


		const {
			writerList,
			writerPage,
			writerTotalPage,
			handleChangePage
		} = this.props;

		const newList = writerList.toJS();
		const pageList = [];

		if (newList.length) {
			for (let i = (writerPage - 1) * 5; i < writerPage * 5; i++) {
				pageList.push(
					<WriterInfoItem key={newList[i]}>
							<img 
								className="WriterPic"
								src={newList[i].imgUrl}
								alt=""
							/>
							<WriterFocus>关注</WriterFocus>
							<WriterName>{newList[i].name}</WriterName>
							<WriterDesc>{newList[i].desc}</WriterDesc>
					</WriterInfoItem>
				)
			}
		}


		return (
			<WriterWrapper>
				<WriterInfoTitle>
						推荐作者
						<WriterInfoSwitch onClick = {() => handleChangePage(writerPage, writerTotalPage, this.spinIcon)}>
							<i ref = {(icon) => {this.spinIcon = icon}} className = "iconfont spin">&#xe614;</i>
							换一批
						</WriterInfoSwitch>
				</WriterInfoTitle>
				<WriterInfoList>
					{pageList}
					<WriterMore>查看全部</WriterMore>
				</WriterInfoList>
			</WriterWrapper>
		)
	}
}

// list.map((item, index) => {
// 	return (
// 		<WriterInfoItem  key = {index}>
// 			<img 
// 				className="WriterPic"
// 				src={item.get('imgUrl')}
// 				alt=""
// 			/>
// 			<WriterFocus>关注</WriterFocus>
// 			<WriterTitle>{item.get('name')}</WriterTitle>
// 			<WriterDesc>{item.get('desc')}</WriterDesc>
// 		</WriterInfoItem>
// 	);
// })

const mapStateToProps = (state) => ({
	writerList: state.getIn(['home', 'writerList']),
	writerPage: state.getIn(['home', 'writerPage']),
	writerTotalPage: state.getIn(['home', 'writerTotalPage'])
});

const mapDispathToProps = (dispatch) => ({
	getWriterInfo() {
		dispatch(actionCreators.getWriterInfo());
	},
	handleChangePage(writerPage, writerTotalPage, spin) {
		let orginAngle = spin.style.transform.replace(/[^0-9]/ig, '');
		if (orginAngle) {
			orginAngle = parseInt(orginAngle, 10);
		} else {
			orginAngle = 0;
		}
		spin.style.transform = 'rotate(' + (orginAngle + 360) + 'deg)';
		if (writerPage < writerTotalPage) {
			dispatch(actionCreators.changeWriterPage(writerPage + 1));
		} else {
			dispatch(actionCreators.changeWriterPage(1));
		}
	}
})

export default connect(mapStateToProps, mapDispathToProps)(Writer);