import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Segment, Message, Container } from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';
import FooterComponent from '../FooterComponent/FooterComponent';

const mapStateToProps = (state) => {
	return { authUser: state.loginReducer.authUser,
			 errorMessage: state.loginReducer.errorMessage }
};

const headerMain = {
	'marginTop': '3em',
	'fontSize': '4em',
	'fontWeight': 'bold'
}

const head = {
	'content': 'middle',
	'padding-right': '2em',
}

const HomeComponent = (props) => {

	return (
		<>
			<Segment textAlign="center" size="large" vertical padded="very">
				<Header as="h1" style={headerMain}>Super Awesome Pools</Header>
				{props.authUser ? 
				<>
					<Link to="/dashboard"><Button color='black' size="huge"> DASHBOARD</Button></Link>
				</> :
				<Container>
					<Message info="true" > Log-in to get started </Message>
				</Container>
				}
			</Segment>

			<FooterComponent/>
		</>
	)
};

export default connect(mapStateToProps)(HomeComponent);