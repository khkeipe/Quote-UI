import React from 'react';
import { Menu, Segment, MenuMenu, Button } from 'semantic-ui-react';
import LoginComponent from '../LoginComponent/LoginComponent';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
	return { authUser: state.loginReducer.authUser,
			 errorMessage: state.loginReducer.errorMessage }
};

const NavBarComponent = (props) => { 

		return(
			<>
				 
				
				<Segment inverted>
					<Menu inverted>
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