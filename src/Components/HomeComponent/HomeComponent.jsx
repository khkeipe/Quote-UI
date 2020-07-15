import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';

const mapStateToProps = (state) => {
	return { authUser: state.loginReducer.authUser,
			 errorMessage: state.loginReducer.errorMessage }
};

const HomeComponent = (props) => {

	return (
		<>
			<br/>
			<Container>
			
			<Link to="/quote"> <Button>Quote</Button> </Link>
			
			</Container>		
		</>
	)
};

export default connect(mapStateToProps)(HomeComponent);