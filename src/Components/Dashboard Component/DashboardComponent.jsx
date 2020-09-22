import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Divider, Grid, GridRow, Header, Segment } from 'semantic-ui-react';

const mapStateToProps = (state) => {
	return{
		authUser: state.loginReducer.authUser
	}
};

const mapDispatchToProps = {

}

const DashboardComponent = (props) => {


	return (
	<>
		{ !props.authUser ? <Redirect to="/home"/> : 
		<>
			<Segment raised>
				<Grid padded="vertically">
					<GridRow centered>
						<Header size="huge">Admin Dashboard</Header>
					</GridRow>
					<Divider/>
					<GridRow>

					</GridRow>
				</Grid>
			</Segment>
		</> }
	</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);