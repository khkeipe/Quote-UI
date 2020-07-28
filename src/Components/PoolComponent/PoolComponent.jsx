import React from 'react';
import { Button, Dropdown, Input, Checkbox, Tab, TabPane } from 'semantic-ui-react';
import InGroundComponent from './InGroundComponent';
import MetricComponent from './MetricComponent';


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
	render: () => <TabPane><InGroundComponent/></TabPane>},
	{ menuItem: 'Metric',
	render: () => <TabPane><MetricComponent/></TabPane>},
]


const PoolComponent = (props) => {

	return(
	<>
		<Tab panes={panes}></Tab>
	</>
	)
}

export default PoolComponent;