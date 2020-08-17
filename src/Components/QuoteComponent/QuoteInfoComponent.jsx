import React from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Grid, GridRow, GridColumn } from 'semantic-ui-react';

const MapStateToProps = (state) => {
	return {
		authUser: state.loginReducer.authUser,
		quoteInfo: state.quoteReducer.quoteInfo,
		contactInfo: state.quoteReducer.contactInfo
	}
}

const QuoteInfoComponent = (props) => {

	return (
		<>
			<Segment raised>
				<Grid centered divided="vertically" padded="vertically">
					<GridRow>
						<Header size="large">CONTACT INFORMATION</Header>
					</GridRow>
					<GridRow>
						<GridColumn>
							<Header textAlign="left">First Name: {props.contactInfo.firstName} </Header>
							<Header textAlign="left">Last Name: {props.contactInfo.lastName} </Header>
							<Header textAlign="left">Phone Number: {props.contactInfo.number} </Header>
							<Header textAlign="left">E-mail: {props.contactInfo.email} </Header>
						</GridColumn>
					</GridRow>
				</Grid>
			</Segment>
			<Segment raised>
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
			</Segment>
		</>
	)
}

export default connect(MapStateToProps)(QuoteInfoComponent);