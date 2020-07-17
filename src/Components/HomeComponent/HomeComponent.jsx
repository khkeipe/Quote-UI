import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment } from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';
import FooterComponent from '../FooterComponent/FooterComponent';

const mapStateToProps = (state) => {
	return { authUser: state.loginReducer.authUser,
			 errorMessage: state.loginReducer.errorMessage }
};

const headerMain = {
	'margin-top': '3em',
	'font-size': '4em',
	'font-weight': 'bold'
}

const headerSub = {
	'font-size': '1.7em',
	'margin-top': '1.5em'
}



const HomeComponent = (props) => {

	return (
		<>
			<Segment textAlign="center" size="large" vertical padded="very">
				<Container>
					<Header as="h1" style={headerMain}>Super Awesome Pools</Header>
					<HeaderSubHeader as="h2" style={headerSub}> Get a free quote today! </HeaderSubHeader>
					<Link to="/quote"> <Button size="huge">Start a Quote</Button> </Link>
				</Container>
			</Segment>

			<FooterComponent/>
					
		</>
	)
};

export default connect(mapStateToProps)(HomeComponent);