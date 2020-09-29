import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, Divider, Grid, GridRow, Header, Segment } from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';

const mapStateToProps = (state) => {
	return{
		authUser: state.loginReducer.authUser
	}
};

const mapDispatchToProps = {

}

const headerSub = {
	'fontSize': '1.7em',
	'marginTop': '1.5em'
}

const DashboardComponent = (props) => {

	

	return (
	<>
		{ !props.authUser ? <Redirect to="/home"/> : 
		<>
		
			<Segment raised>
				<Grid padded="vertically">
					<GridRow centered>
						<HeaderSubHeader as="h2" style={headerSub}> Dashboard </HeaderSubHeader>
					</GridRow>
					<Divider/>
					{ props.authUser?.role == 'Admin' ?
					<GridRow>

					</GridRow>
					: <></> }
					<GridRow centered>
						<Link to="/form"> <Button color='black' size="huge">New Quote</Button> </Link>
						<Link to="/history"> <Button color='black' size="huge">Quote Hisotry</Button> </Link>
					</GridRow>
				</Grid>
			</Segment>
		
		</> }
	</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);