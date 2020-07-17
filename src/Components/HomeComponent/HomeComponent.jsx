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

const headerSub = {
	'fontSize': '1.7em',
	'marginTop': '1.5em'
}


const HomeComponent = (props) => {

	return (
		<>
			<Segment textAlign="center" size="large" vertical padded="very">
				<Header as="h1" style={headerMain}>Super Awesome Pools</Header>
				<HeaderSubHeader as="h2" style={headerSub}> Get a free quote today! </HeaderSubHeader>
				{props.authUser ? 
				<>
				<Link to="/quote"> <Button size="huge">Start a Quote</Button> </Link>
				</> :
				<Container>
					<Message info="true" > Log-in to start a quote! </Message>
				</Container>
				}
			</Segment>

			
			<FooterComponent/>
		</>
	)
};

export default connect(mapStateToProps)(HomeComponent);