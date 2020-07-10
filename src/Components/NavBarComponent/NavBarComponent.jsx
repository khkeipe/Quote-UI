import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class NavBarComponent extends Component{
	state = {};
	handleItemClick = (e, { name }) => this.setState({activeItem: name}); 

	render(){
		return(
			<>
				<Menu vertical>

				</Menu>
			
			</>
		);
	}
}

export default NavBarComponent;