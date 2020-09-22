import React from 'react';
import { Menu, Segment, MenuMenu, Button, MenuItem, Header } from 'semantic-ui-react';
import LoginComponent from '../LoginComponent/LoginComponent';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../actions/action-creators';


const mapStateToProps = (state) => {
	return { authUser: state.loginReducer.authUser,
			 errorMessage: state.loginReducer.errorMessage }
};

const mapDispatchToProps = {
	logoutAction
}

const head = {
	'content': 'middle',
	'padding-right': '2em',
}

const NavBarComponent = (props) => { 

		const logout = () => {
			props.logoutAction();
		}

		return(
			<>
				 
				<Segment inverted>
					<Menu inverted borderless="true">
						<MenuItem>
						<Link to="/home"><Header inverted style={head}>HOME</Header></Link>
						{ props.authUser?.role == 'Admin' ?
						<Link to="/dashboard"><Header inverted style={head}>DASHBOARD</Header></Link>
						: <></> }

						</MenuItem>
						<MenuMenu position="right">
						{ !props.authUser ? 
							<>
							<LoginComponent/>
							</> :
							<Button size="small" inverted onClick={logout}> LOGOUT </Button>
						}
						</MenuMenu>
					</Menu>
				</Segment>
				
			</>
		);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);