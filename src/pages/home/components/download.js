import React, {
	PureComponent
} from 'react';
import {
	DownloadWrapper
} from '../style.js';


class Download extends PureComponent {
	render() {
		return (
			<DownloadWrapper>
				<img className="qrcode" src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
				<div className="info">
					<div className="title">下载简书手机App</div>
					<div className="description">随时随地发现和创作内容</div>
				</div>
			</DownloadWrapper>
		)
	}
}

export default Download;