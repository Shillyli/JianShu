import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import{
	RecommendWrapper,
	RecommendItem
} from '../style.js';
class Recommend extends PureComponent {
	render() {
		const { list } = this.props;
		return (
	     <RecommendWrapper>
	     { list.map((item) => {
	       return(
	       	<RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
	     )}
	     )
	     }
	     </RecommendWrapper>
	   )
	}
}

const mapState = (state) => ({
  list: state.getIn(['home','recommendImg'])
});
export default connect(mapState)(Recommend);