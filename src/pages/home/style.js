import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  `;

export const HomeLeft = styled.div`
  float: left;
  padding-top: 30px;
  width: 625px;
  margin-left: 15px;
  .banner-img {
  	width:625px;
  	height:270px;
  }
  `;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
  `;

export const TopicWrapper = styled.div`
  overflow: hidden;
  podding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
  `;

export const TopicItem = styled.a`
  float: left;
  height: 32px;
  line-height: 32px;
  border:1px solid #dcdcdc;
  padding-right:10px;
  border-radius: 4px;
  font-size: 14px;
  margin-left: 18px;
  margin-bottom: 18px;
  background: #f7f7f7;
  .topic-pic {
  	display: block;
  	margin-right: 10px;
  	float: left;
    width: 32px;
    height: 32px;
  }
`;

export const ListItem = styled.div`
  overflow:hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .listPic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius:10px;
  }
`;
export const ListInfo = styled.div`
  width:483px;
  float: left;
  .h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  height: 40px;
  border-radius: 20px;
  background-color: #a5a5a5;
  text-align: center;
  margin: 30px auto 60px;
  font-size: 15px;
  color: #fff;
  line-height: 40px;
  cursor: pointer;
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
  border-radius: 4px;
`;

export const WriterWrapper = styled.div`
  margin-bottom: 20px;
  border-radius: 4px;
  padding-top: 0;
  width: 280px
  overflow: hidden;
`;

export const WriterTittle = styled.div`
  text-align: left;
  font-size: 14px;
  color: #969696;
`;

export const WriterSwitch = styled.div`
  float: right;
`;

export const WriterItem = styled.div`
  margin-top: 20px;
  overflow: hidden;
  line-height: 20px;
  .writerPic {
    width: 48px;
    height: 48px;
    float: left;
    border: 1px solid #ddd;
    border-radius: 50%;
    margin-right:5px;
  }
`;

export const Attention = styled.div`
  float: right;
  margin-top: 5px;
  font-size: 13px;
  color: #42c02e;
`;

export const WriterInfo = styled.div`
  display: block;
  text-align: left;
  font-size: 14px;
  padding-top: 5px;
  .writerDesc {
    font-size: 12px;
    color: #969696;
    margin-top: 2px;
  }
`;
export const WriterMore = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 13px;
  color: #787878;
  text-align: center;
  padding: 7px;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`;