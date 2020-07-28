import React from 'react';
import { Dropdown, Input, Checkbox } from 'semantic-ui-react';

const MetricComponent = (props) => {

	return(
	<>
		<Dropdown
			selection
			placeholder='Dealer'
		/>
		<Input placeholder="Customer"/>
		
		<Dropdown
			selection
			placeholder="Pool Size"
		/>
		<Dropdown 
			selection
			placeholder="Pool Type"
		/>

		<Checkbox />
		<Checkbox />
	</>
	)
}

export default MetricComponent;