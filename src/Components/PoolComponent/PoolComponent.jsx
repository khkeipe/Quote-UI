import React from 'react';
import { Button, Dropdown, Input, Checkbox, Tab, TabPane } from 'semantic-ui-react';


const dealers = [
	{
	key:'Allen Pools',
	text:'Allen Pools',
	value:'Allen Pools'
	},
	{ 
	key: 'Backyard Leisure',
	text:'Backyard Leisure',
	value: 'Backyard Leisure'
	},
	{ 
	key: 'B&B Pools LLC',
	text:'B&B Pools LLC',
	value: 'B&B Pools LLC'
	}
]

const panes = [
	{ menuItem: 'In Ground',
	render: () => <TabPane>In Ground</TabPane>},
	{ menuItem: 'Metric',
	render: () => <TabPane>Metric</TabPane>},
]


const PoolComponent = (props) => {

	return(
	<>
		<Tab panes={panes}>
		</Tab>
		<Button >In Ground</Button>
		<Button >Metric </Button>

		<Dropdown
			selection
			options={dealers}
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

export default PoolComponent;