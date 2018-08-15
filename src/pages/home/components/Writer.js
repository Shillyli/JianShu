import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	WriterWrapper,
	WriterTittle,
	WriterSwitch,
	WriterItem,
	WriterInfo,
	Attention,
	WriterMore
} from '../style.js';
class Writer extends PureComponent {
	render() {
		const { list } = this.props;
		return (
      <WriterWrapper>
        <WriterTittle>
         推荐作者
          <WriterSwitch>
            <i className=" iconfont ">&#xe851;</i>
              换一批
          </WriterSwitch>
        </WriterTittle>
        <div>
        { list.map((item) => {
        	return(
            <WriterItem key={ item.get('id') }>
            	<img className="writerPic" src={ item.get('imgUrl')} alt="" />
              <Attention>+关注</Attention>
              <WriterInfo>{ item.get('name') }
              <p className="writerDesc">{ item.get('desc') }</p>
              </WriterInfo>
            </WriterItem>
        		)
          })
        }
        </div>
        <WriterMore>
        查看全部 <i className="iconfont">&#xe64c;</i>
        </WriterMore>
      </WriterWrapper>
	   )
	}
}

const mapState = (state) => ({
	list: state.getIn(['home','writerList'])
})

export default connect(mapState)(Writer);