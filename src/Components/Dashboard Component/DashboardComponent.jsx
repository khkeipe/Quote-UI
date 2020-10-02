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
					{ props.authUser?.role === 'Admin' ?	
					//Admin View
					<>
						<GridRow centered>
							<Link to="/quote-form"> <Button color='black' size="huge">New Quote</Button> </Link>
							<Link to="/quotes"> <Button color='black' size="huge">Quote Hisotry</Button> </Link>
						</GridRow>
						<Divider/>
						<GridRow centered>
							<Link to="/user-form"> <Button color="black" size="huge">Add User</Button> </Link>
							<Link to="/users"> <Button color='black' size="huge">View Users</Button> </Link>
						</GridRow>
						<Divider/>
						<GridRow centered> 
							<Link to="/dealer-form"> <Button color="black" size="huge">Add Dealer</Button> </Link>
							<Link to="/dealers"> <Button color='black' size="huge">View Dealers</Button> </Link>
						</GridRow>
						<Divider/>
						<GridRow centered>
							<Link to="/dealer-form"> <Button color="black" size="huge">Add Pool</Button> </Link>
							<Link to="/pools"> <Button color='black' size="huge">View Pools</Button> </Link>
						</GridRow>
					</>
					: 
					//AppUser View
					<>
						<GridRow centered>
							<Link to="/quote-form"> <Button color='black' size="huge">New Quote</Button> </Link>
							<Link to="/quotes"> <Button color='black' size="huge">Quote Hisotry</Button> </Link>
						</GridRow>
					</> }
				</Grid>
			</Segment>
		
		</> }
	</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);