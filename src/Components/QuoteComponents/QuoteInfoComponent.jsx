import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Grid, GridRow, GridColumn, Button, Message } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { quoteCreatorAction } from '../../actions/action-creators';

const MapStateToProps = (state) => {
	return {
		authUser: state.loginReducer.authUser,
		quote: state.quoteReducer.quote,
		errorMessage: state.quoteReducer.errorMessage
	}
}

const MapDispatchToProps = {
	quoteCreatorAction
}

const QuoteInfoComponent = (props) => {

	const [isError, setIsError] = useState(true);
	const [submitted, setSubmitted] = useState(false);

	const createQuote = () => {
		props.quoteCreatorAction(props.quote);
		setSubmitted(true);	
	}

	let date = new Date()
	let day = date.getDate();
	let month = date.getMonth();
	let year = date.getFullYear();
	let currentDate = month + '/' + day + '/' + year;

	return (
		<>
			<Segment raised padded>
				<Grid centered divided="vertically" padded="vertically">
					<GridRow>
						<Header size="large">CONTACT INFORMATION</Header>
					</GridRow>
					<GridRow>
						<GridColumn>
							<Header textAlign="left">Order Number: <Header sub size='huge'>{props.quote?.orderNumber}</Header></Header>
							<Header textAlign="left">Requested Date: <Header sub size='huge'>{props.quote?.requestDate}</Header></Header>
							<Header textAlign="left">Submitted Date: <Header sub size='huge'>{currentDate}</Header></Header>
							<Header textAlign="left">Name: <Header sub size='huge'>{props.quote?.customer?.firstName} {props.quote?.customer?.lastName} </Header></Header>
							<Header textAlign="left">Phone Number: <Header sub size='huge'>{props.quote?.customer?.phone} </Header></Header>
							<Header textAlign="left">E-mail: <Header sub size='huge'>{props.quote?.customer?.email} </Header></Header>
							<Header textAlign="left">Address: <Header sub size='huge'>{props.quote?.customer?.street} {props.quote?.customer?.city}, {props.quote?.customer?.state} {props.quote?.customer?.zip}</Header></Header>
						</GridColumn>
					</GridRow>
				</Grid>
			
				<Grid centered divided="vertically" padded="vertically">
					<GridRow>
						<Header size="large">QUOTE DETAILS</Header>
					</GridRow>
					<GridRow>
						<GridColumn>
							<Header>Dealer: {props.quote?.dealer?.dealerName}</Header>
							<Header>Pool Type: {props.quote?.poolType}</Header>
							<Header>Pool Size: {props.quote?.poolSize}</Header>
							<Header>Custom Length: {props.quote?.length}</Header>
							<Header>Custom Width: {props.quote?.width}</Header>
							<Header>Wall Height: {props.quote?.wallHeight}</Header>
							<Header>Skimmer: {props.quote?.skimmer ? "Yes" : "No"}</Header>
							<Header>Ladder: {props.quote?.ladder ? "Yes" : "No"}</Header>
						</GridColumn>
					</GridRow>
				</Grid>

					<Segment inverted textAlign='center' padded>
						<Link to="/form"><Button inverted color='grey'> Back</Button></Link>
						{ props.errorMessage | submitted == true ?
						<Button disabled inverted color='grey'> Submit</Button> :
						<Button onClick={createQuote} inverted color='grey'> Submit</Button> }
					</Segment>
					<Segment inverted textAlign='center' padded>
						{ props.errorMessage ?
						<Message negative >{props.errorMessage}</Message> 
						: <></>}
					</Segment>
			</Segment>
		</>
	)
}

export default connect(MapStateToProps, MapDispatchToProps)(QuoteInfoComponent);