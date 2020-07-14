import { loginAction } from '../../actions/action-creators';
import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';

const mapStateToProps = (state) => {
	return { ...state }
};

const mapDispatchToProps = {
	loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);