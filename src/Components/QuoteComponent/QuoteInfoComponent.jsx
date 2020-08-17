import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

const MapStateToProps = (state) => {
	return {
		authUser: state.loginReducer.authUser,
		quoteInfo: state.quoteReducer.quoteInfo
	}
}

const QuoteInfoComponent = (props) => {

	return (
		<>
			<div>
				<Header>Dealer: {props.quoteInfo?.dealer}</Header>
				<Header>Pool Type: {props.quoteInfo?.poolType}</Header>
				<Header>Pool Size: {props.quoteInfo?.poolSize}</Header>
				<Header>Custom Length: {props.quoteInfo?.length}</Header>
				<Header>Custom Width: {props.quoteInfo?.width}</Header>
				<Header>Wall Height: {props.quoteInfo?.wallHeight}</Header>
				<Header>Skimmer: {props.quoteInfo?.skimmer ? "Yes" : "No"}</Header>
				<Header>Ladder: {props.quoteInfo?.ladder ? "Yes" : "No"}</Header>

			</div>

		</>
	)
}

export default connect(MapStateToProps)(QuoteInfoComponent);