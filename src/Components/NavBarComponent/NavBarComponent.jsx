import React from 'react';
import { Menu, Segment, MenuMenu, Button, MenuItem, Header, Container, Grid, GridRow, GridColumn } from 'semantic-ui-react';
import LoginComponent from '../LoginComponent/LoginComponent';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const mapStateToProps = (state) => {
	return { authUser: state.loginReducer.authUser,
			 errorMessage: state.loginReducer.errorMessage }
};

const head = {
	'content': 'middle'
}

const NavBarComponent = (props) => { 

		return(
			<>
				 
				<Segment inverted >
					<Menu inverted borderless >
						<MenuItem vertically fitted>
						<Link to="/home"><Header inverted style={head}>HOME</Header></Link>

						</MenuItem>
						<MenuMenu position="right">
						{ !props.authUser ? 
							<>
							<LoginComponent/>
							</> :
							<Button inverted> LOGOUT </Button>
						}
						</MenuMenu>
					</Menu>
				</Segment>
				
			</>
		);
}

export default connect(mapStateToProps)(NavBarComponent);