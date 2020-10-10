import React from 'react';
import { Dropdown, Input, Grid, GridRow, GridColumn, Label, Button, Segment } from 'semantic-ui-react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { createPool } from '../../remote/pool-service';

const MapStateToProps = (state) => {
	return {
		pool: state.poolReducer.pool
	}
}

const MapDispatchToProps = {
	
}

const wallHeights = [
	{ key: 1, text: '', value: '' },
	{ key: 2, text: '42"', value: '42"' },
	{ key: 3, text: '48"', value: '48"' },
	{ key: 4, text: '52"', value: '52"' },
  ]

const PoolFormComponent = (props) => {

	const [length, setLength] = useState(props.quote?.length);
	const [width, setWidth] = useState(props.quote?.width);
	const [wallHeight, setWallHeight] = useState(props.quote?.wallHeight);

	const savePool = () => {
		createPool(length, width, wallHeight);
	}
	
	const updateDropdown = (e, data) => {
		switch(data.name) {
			case 'wallHeight': {
				setWallHeight(data.value);
				break;
			}
			default: {
				return;
			}
		}
	}

	const updateInput = (e) => {
		switch(e.target.id) {
			case 'length': {
				setLength(e.target.value);
				break;
			}
			case 'width': {
				setWidth(e.target.value);
				break;
			}
			default: {
				return;
			}
		}
	}

	return(
	<>
		<Grid padded >
			<GridRow >
				<GridColumn width='6'>
					<Input fluid placeholder="Length" id='length' label={{content:"FT", color: 'grey'}} labelPosition="right" value={length} onChange={updateInput}/>
				</GridColumn>
				<GridColumn width='6'>
					<Input fluid placeholder="Width" id='width' label={{content:"FT", color: 'grey'}} labelPosition="right" value={width} onChange={updateInput}/>
				</GridColumn>
				<GridColumn width='4'>
					<Dropdown  fluid selection placeholder="Wall Height" name="wallHeight" defaultValue={wallHeight} options={wallHeights} onChange={updateDropdown}	/>
				</GridColumn>

			</GridRow>
			
		</Grid>
		<Segment textAlign='center'>
			<Button inverted onClick={savePool}> Save </Button>
		</Segment>
	</>
	)
}

export default connect(MapStateToProps, MapDispatchToProps)(PoolFormComponent);