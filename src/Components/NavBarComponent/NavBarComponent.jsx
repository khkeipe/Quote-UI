import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class NavBarComponent extends Component{
	state = {};
	handleItemClick = (e, { name }) => this.setState({ activeItem: name}); 

	render(){
		const { activeItem } = this.state

		return(
			<>
				<Menu vertical>
					<Menu.Item>
						<Menu.Header> Menu </Menu.Header>
						<Menu.Menu>
							<Menu.Item 
							name='menu item 1' 
							active={activeItem === 'menue item 1'} 
							onClick={this.handleItemClick} />
						</Menu.Menu>
					</Menu.Item>

				</Menu>
			
			</>
		);
	}
}

export default NavBarComponent;