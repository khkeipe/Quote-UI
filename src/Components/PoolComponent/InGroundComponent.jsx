import React from 'react';
import { Dropdown, Input, Checkbox, Grid, GridRow, GridColumn, Label, Menu } from 'semantic-ui-react';
import { useState } from 'react';
import { getDealers } from '../../remote/dealer-service';
import { useEffect } from 'react';


// const dealers = [
// 	{ key: 1, text: 'Dealer 1', value: 'Dealer 1' },
// 	{ key: 2, text: 'Dealer 2', value: 'Dealer 2' },
// 	{ key: 3, text: 'Dealer 3', value: 'Dealer 3' },
//   ]

const poolTypes = [
	{ key: 1, text: '', value: '' },
	{ key: 2, text: 'ADIRONDACK', value: 'ADIRONDACK' },
	{ key: 3, text: 'CUSTOM FREEFORM', value: 'CUSTOM FREEFORM' },
	{ key: 4, text: 'BLUE LAGOON', value: 'BLUE LAGOON' },
	{ key: 5, text: 'EMERALD', value: 'EMERALD'},
	{ key: 6, text: 'GARNET', value: 'GARNET'},
	{ key: 7, text: 'GRECIAN', value: 'GRECIAN'},
	{ key: 8, text: 'KIDNEY(FLATBACK)', value: 'KIDNEY(FLATBACK)'},
	{ key: 9, text: 'MOUNTAIN LAKE', value: 'MOUNTAIN LAKE'},
	{ key: 10, text: 'OVAL IN GROUND', value: 'OVAL IN GROUND'},
	{ key: 11, text: 'OXBOW', value: 'OXBOW'},
	{ key: 12, text: 'ROMAN END', value: 'ROMAN END' },
	{ key: 13, text: 'TOPAZ', value: 'TOPAZ' },
  ]

const poolSizes = [
	{ key: 1, text: 'Size 1', value: 'Size 1' },
	{ key: 2, text: 'Size 2', value: 'Size 2' },
	{ key: 3, text: 'Size 3', value: 'Size 3' },
  ]

const wallHeights = [
	{ key: 1, text: '42"', value: '42"' },
	{ key: 2, text: '48"', value: '48"' },
	{ key: 3, text: '52"', value: '52"' },
  ]



const InGroundComponent = (props) => {

	const [dealer, setDealer] = useState('');
	const [poolSize, setPoolSize] = useState('');
	const [length, setLength] = useState('');
	const [width, setWidth] = useState('');
	const [poolType, setPoolType] = useState('');
	const [wallHeight, setWallHeight] = useState('');
	const [skimmer, setSkimmer] = useState(false);
	const [ladder, setLadder] = useState(false);
	const [dealers, setDealers] = useState([]);
	
	const update = (e, data) => {
		let content = {[data.name]: data.value};
		switch(data.name) {
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
			default: {
				return;
			}
		}
	}

	const updateLength = (e) => {
		setLength(e.target.value);
	}

	const updateWidth = (e) => {
		setWidth(e.target.value);
	}

	const updateCheckbox = () => {
		setSkimmer(!skimmer);
		console.log(skimmer);		
	}

	useEffect( async () => {

		let dealerArray = [];

		try{
			let response = await getDealers();
			for(let item of response) {
				let nextDealer = {key: item.id, text:item.dealerName, value:item.dealerName};
				dealerArray.push(nextDealer);
			}
		} catch (e) {
			console.log(e);
		}
		setDealers(dealerArray);
		return dealers;
	},[])

	return(
	<>
		<Grid centered padded>
			
			<Dropdown name="dealer" placeholder="Dealer" options={dealers} selection onChange={update}/>
			<Dropdown selection	placeholder="Pool Type" name="poolType" options={poolTypes} onChange={update} />
			<Dropdown selection placeholder="Pool Size" name='poolSize' options={poolSizes} onChange={update} />
			
			<Input placeholder="Custom Length" id='length' label="FT" labelPosition="right" value={length} onChange={updateLength}/>
			<Input placeholder="Custom Width" id='width' label="FT" labelPosition="right" value={width} onChange={updateWidth}/>

			<Dropdown selection placeholder="Wall Height" name="wallHeight" options={wallHeights} onChange={update}	/>

			<GridRow>
				<GridColumn textAlign="left">
					<Label>Additional Options</Label>
					<GridRow>
						<Checkbox label="Skimmer" checked={skimmer} onClick={updateCheckbox}/>
						
					</GridRow>	
					<GridRow>
						<Checkbox label="Wall Ladder" value={ladder} onChange={updateCheckbox}/>
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