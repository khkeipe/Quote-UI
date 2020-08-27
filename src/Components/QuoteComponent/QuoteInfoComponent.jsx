import React from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Grid, GridRow, GridColumn, Button } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

const MapStateToProps = (state) => {
	return {
		authUser: state.loginReducer.authUser,
		quoteInfo: state.quoteReducer.quoteInfo,
		contactInfo: state.quoteReducer.contactInfo
	}
}

const QuoteInfoComponent = (props) => {

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
							<Header textAlign="left">Order Number: <Header sub size='huge'>{props.contactInfo?.orderNumber}</Header></Header>
							<Header textAlign="left">Requested Date: <Header sub size='huge'>{props.contactInfo?.requestDate}</Header></Header>
							<Header textAlign="left">Submitted Date: <Header sub size='huge'>{currentDate}</Header></Header>
							<Header textAlign="left">Name: <Header sub size='huge'>{props.contactInfo?.firstName} {props.contactInfo?.lastName} </Header></Header>
							<Header textAlign="left">Phone Number: <Header sub size='huge'>{props.contactInfo?.number} </Header></Header>
							<Header textAlign="left">E-mail: <Header sub size='huge'>{props.contactInfo?.email} </Header></Header>
							<Header textAlign="left">Address: <Header sub size='huge'>{props.contactInfo?.street} {props.contactInfo?.city}, {props.contactInfo?.state} {props.contactInfo?.zip}</Header></Header>
						</GridColumn>
					</GridRow>
				</Grid>
			
				<Grid centered divided="vertically" padded="vertically">
					<GridRow>
						<Header size="large">QUOTE DETAILS</Header>
					</GridRow>
					<GridRow>
						<GridColumn>
							<Header>Dealer: {props.quoteInfo?.dealer}</Header>
							<Header>Pool Type: {props.quoteInfo?.poolType}</Header>
							<Header>Pool Size: {props.quoteInfo?.poolSize}</Header>
							<Header>Custom Length: {props.quoteInfo?.length}</Header>
							<Header>Custom Width: {props.quoteInfo?.width}</Header>
							<Header>Wall Height: {props.quoteInfo?.wallHeight}</Header>
							<Header>Skimmer: {props.quoteInfo?.skimmer ? "Yes" : "No"}</Header>
							<Header>Ladder: {props.quoteInfo?.ladder ? "Yes" : "No"}</Header>
						</GridColumn>
					</GridRow>
				</Grid>

					<Segment inverted textAlign='center' padded>
						<Link to="/form"><Button inverted color='grey'> Back</Button></Link>
						<Link><Button inverted color='grey'> Submit</Button></Link>
					</Segment>
			</Segment>
		</>
	)
}

export default connect(MapStateToProps)(QuoteInfoComponent);