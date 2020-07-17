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
	'content': 'middle'
}

const NavBarComponent = (props) => { 

		const logout = () => {
			props.logoutAction();
		}

		return(
			<>
				 
				<Segment inverted >
					<Menu inverted borderless >
						<MenuItem vertically="true" fitted>
						<Link to="/home"><Header inverted style={head}>HOME</Header></Link>

						</MenuItem>
						<MenuMenu position="right">
						{ !props.authUser ? 
							<>
							<LoginComponent/>
							</> :
							<Button inverted onClick={logout}> LOGOUT </Button>
						}
						</MenuMenu>
					</Menu>
				</Segment>
				
			</>
		);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);