import React from 'react';
import { Menu, Segment, MenuMenu, Button, MenuItem, Header } from 'semantic-ui-react';
import LoginComponent from '../LoginComponent/LoginComponent';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const mapStateToProps = (state) => {
	return { authUser: state.loginReducer.authUser,
			 errorMessage: state.loginReducer.errorMessage }
};

const NavBarComponent = (props) => { 

		return(
			<>
				 
				<Segment inverted>
					<Menu inverted>
						<MenuMenu position="left">
						<Link to="/home"><Header inverted>HOME</Header></Link>

						</MenuMenu>
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