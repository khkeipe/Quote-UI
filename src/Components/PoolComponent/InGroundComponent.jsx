import React from 'react';
import { Dropdown, Input, Checkbox, Grid, GridRow, GridColumn, Label } from 'semantic-ui-react';
import { useState } from 'react';

const dealers = [{key: 'dealer 1', text:'dealer 1', value: 'dealer 1'},{text: 'dealer 2'},{text: 'dealer 3'}]

const InGroundComponent = (props) => {

	const [dealer, setDealer] = useState('');
	const [poolSize, setPoolSize] = useState('');
	const [length, setLength] = useState('');
	const [width, setWidth] = useState('');
	const [poolType, setPoolType] = useState('');
	const [wallHeight, setWallHeight] = useState('');
	const [skimmer, setSkimmer] = useState(false);
	const [ladder, setLadder] = useState(false);

	const updateDealer = (e, data) => {
		
		console.log(data);
	}
	const update = (e) => {
		let content = e.target.value;
		switch(e.target.id) {
			case 'dealer': {
				setDealer(content);
				console.log(dealer);
				break;
			}
			case 'poolSize': {
				setPoolSize(content);
				console.log(content);
				break;
			}
			case 'length': {
				setLength(content);
				console.log(content);
				break;
			}
			case 'width': {
				setWidth(content);
				console.log(content);
				break;
			}
			default: {
				return;
			}
		}
	}

	return(
	<>
		<Grid centered padded>
			<Dropdown
				selection
				options={dealers}
				placeholder='Dealer'
				name='dealer'
				onChange={updateDealer}
			/>
			
			<Dropdown
				selection
				placeholder="Pool Size"
				id='poolSize'
				value={poolSize}
				onChange={update}
			/>

			<Input placeholder="Custom Length" id='length' label="FT" labelPosition="right" value={length} onChange={update}/>
			<Input placeholder="Custom Width" id='width' label="FT" labelPosition="right" value={width} onChange={update}/>


			<Dropdown 
				selection
				placeholder="Pool Type"
				value={poolType}
				onChange={update}
			/>
			<Dropdown 
				selection
				placeholder="Wall Height"
				value={wallHeight}
				onChange={update}
			/>

			<GridRow>
				<GridColumn textAlign="left">
					<Label>Additional Options</Label>
					<GridRow>
						<Checkbox label="Skimmer" value={skimmer} onChange={update}/>
						
					</GridRow>	
					<GridRow>
						<Checkbox label="Wall Ladder" value={ladder} onChange={update}/>
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