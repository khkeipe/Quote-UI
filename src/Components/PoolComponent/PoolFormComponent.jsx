import React from 'react';
import { Input, Grid, GridRow, GridColumn, Button, Segment, Header } from 'semantic-ui-react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { createPool } from '../../remote/pool-service';
import { createPoolAction } from '../../actions/action-creators';

const MapStateToProps = (state) => {
	return {
		pool: state.poolReducer.pool
	}
}

const MapDispatchToProps = {
	createPoolAction
}

const PoolFormComponent = (props) => {

	const [poolType, setPoolType] = useState(props.pool?.poolType);
	const [poolCode, setPoolCode] = useState(props.pool?.poolCode);
	const [length, setLength] = useState(props.pool?.length);
	const [width, setWidth] = useState(props.pool?.width);
	const [height, setHeight] = useState(props.pool?.height);
	const [hopperSize, setHopperSize] = useState(props.pool?.hopperSize);

	const savePool = () => {
		props.createPoolAction(poolType, poolCode, length, width, height, hopperSize);
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
			case 'height': {
				setHeight(e.target.value);
				break;
			}
			case 'hopperSize': {
				setHopperSize(e.target.value);
				break;
			}
			case 'poolType': {
				setPoolType(e.target.value);
				break;
			}
			case 'poolCode': {
				setPoolCode(e.target.value);
				break;
			}
			case 'height': {
				setHeight(e.target.value);
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
			<GridRow centered>
					<Header as="h1" > Add Pool </Header>
				</GridRow>
			<GridRow centered>
			<GridColumn width='10'>
					<Input fluid placeholder="Pool Type" id='poolType' value={poolType} onChange={updateInput}/>
				</GridColumn>
				<GridColumn width='6'>
					<Input fluid placeholder="Pool Code" id='poolCode' value={poolCode} onChange={updateInput}/>
				</GridColumn>
			</GridRow>
			<GridRow centered>
				<GridColumn width='4'>
					<Input fluid placeholder="Length" id='length' label={{content:"FT", color: 'grey'}} labelPosition="right" value={length} onChange={updateInput}/>
				</GridColumn>
				<GridColumn width='4'>
					<Input fluid placeholder="Width" id='width' label={{content:"FT", color: 'grey'}} labelPosition="right" value={width} onChange={updateInput}/>
				</GridColumn>
				<GridColumn width='4'>
					<Input  fluid placeholder="Wall Height" id="height" label={{content:"IN", color: 'grey'}} labelPosition="right" value={height} onChange={updateInput}	/>
				</GridColumn>
				<GridColumn width='4'>
					<Input  fluid placeholder="Hopper Size" id="hopperSize" label={{content:"FT", color: 'grey'}} labelPosition="right" value={hopperSize} onChange={updateInput}	/>
				</GridColumn>
			</GridRow>
		</Grid>
		<Segment inverted textAlign='center'>
			<Button inverted onClick={savePool}> Save </Button>
		</Segment>
	</>
	)
}

export default connect(MapStateToProps, MapDispatchToProps)(PoolFormComponent);