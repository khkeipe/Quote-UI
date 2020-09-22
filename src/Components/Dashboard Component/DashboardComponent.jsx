import React from 'react';
import { connect } from 'react-redux';
import { loginReducer } from '../../reducers/login-reducer';

const mapStateToProps = (state) => {
	return{
		authUser: state.loginReducer.authUser
	}
};

const mapDispatchToProps = {

}

const DashboardComponent = () => {


	return (
		<>

		</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);