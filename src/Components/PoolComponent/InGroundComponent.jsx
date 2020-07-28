import React from 'react';
import { Dropdown, Input, Checkbox, Grid, Header, GridRow, GridColumn, Label } from 'semantic-ui-react';

const InGroundComponent = (props) => {

	return(
	<>
		<Grid centered padded>
			<Dropdown
				selection
				placeholder='Dealer'
			/>
			
			<Dropdown
				selection
				placeholder="Pool Size"
			/>

			<Input placeholder="Custom Length" label="FT" labelPosition="right"/>
			<Input placeholder="Custom Width" label="FT" labelPosition="right"/>


			<Dropdown 
				selection
				placeholder="Pool Type"
			/>
			<Dropdown 
				selection
				placeholder="Wall Height"
			/>

			<GridRow>
				<GridColumn textAlign="left">
					<Label>Additional Options</Label>
					<GridRow>
						<Checkbox label="Skimmer" />
						
					</GridRow>	
					<GridRow>
						<Checkbox label="Wall Ladder" />
					</GridRow>	
					<GridRow>
						<Checkbox label="...etc" />
					</GridRow>	
				</GridColumn>
			</GridRow>
		</Grid>
	</>
	)
}

export default InGroundComponent;