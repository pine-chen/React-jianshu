import styled from 'styled-components';

export const HomeWrapper = styled.div `
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div `
	padding-left: 15px;
	padding-top: 30px;
	width: 625px;
	float: left;	
	.banner-img{
		width 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div `
	width: 280px;
	float: right;	
`;

export const TopicWrapper = styled.div `
	overflow: hidden;
	padding: 20px 0 10px;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div `
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px;
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic{
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div `
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.ListPic{
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 4px;
	}
`;

export const ListInfo = styled.div `
	width: 500px;
	float: left;
	.ListTitle{
		line-height: 27px;
		font-size: 18px;
		font-weight: blod;
		color: #333;
	}
	.ListDesc{
		line-height: 18px;
		font-size: 13px;
		color: #999;
	}
`;

export const LoadMore = styled.div `
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	text-align: center;
	background: #a5a5a5;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
	&:hover{
		background: #9b9b9b;
	}
`;


export const RecommendWrapper = styled.div `
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div `
	width: 280px;
	height: 50px;
	margin-bottom: 6px;
	background: url(${(props) => props.src});
	background-size: contain;
`;

export const DownloadWrapper = styled.div `
	margin-bottom: 30px;
    padding: 10px 22px;
    height: 60px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .qrcode{
    	width: 60px;
    	height: 60px;
        vertical-align: middle;
        border: 0;
    }
    .info{
        display: inline-block;
   		vertical-align: middle;
    	margin-left: 7px;
    	.title{
    		font-size: 15px;
    		color: #333;
    	}
    	.description{
    	    margin-top: 4px;
    		font-size: 13px;
   	 		color: #999;
    	}
    }
`;


export const WriterWrapper = styled.div `
	height: 300px;
	border-radius: 3px;
	margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
`;


export const WriterInfoTitle = styled.div `
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color:#969696;
	text-align: left;
`;

export const WriterInfoSwitch = styled.span `
	float: right;
	font-size: 14px;
	color:#787878;
	cursor: pointer;
	.spin{
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 4px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const WriterInfoList = styled.ul `
	display:block;
	margin: 0 0 20px;
    text-align: left;
    list-style: none;
`;

export const WriterInfoItem = styled.li `
	margin-top: 15px;
	line-height: 20px;
	.WriterPic{
		float: left;
    	width: 48px;
    	height: 48px;
    	margin-right: 10px;
    	border: 1px solid #ddd;
    	border-radius: 50%;
    	cursor: pointer;
	}

`;

export const WriterName = styled.a `
	display: block;
	padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    cursor: pointer;
`;

export const WriterDesc = styled.p `
	margin-top: 2px;
    font-size: 12px;
    color: #969696;
`;

export const WriterFocus = styled.a `
	float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
`;

export const WriterMore = styled.a `
    display:block;
    padding: 7px 7px 7px 12px;
    margin-top: 20px;
    text-align: center;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor: pointer;
`;

export const BackTop = styled.div `
	position: fixed;
	right: 50px;
	bottom: 50px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
	&:hover{
		background: #f7f7f7;
	}
`;