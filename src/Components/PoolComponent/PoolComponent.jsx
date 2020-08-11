import React from 'react';
import { Tab, TabPane } from 'semantic-ui-react';
import InGroundComponent from './InGroundComponent';
import MetricComponent from './MetricComponent';

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