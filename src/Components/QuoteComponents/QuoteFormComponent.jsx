import React from 'react';
import { Dropdown, Input, Checkbox, Grid, GridRow, GridColumn, Label } from 'semantic-ui-react';
import { useState } from 'react';
import { getAllDealers, getDealers } from '../../remote/dealer-service';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { quoteUpdateAction } from '../../actions/action-creators';
import { Quote } from '../../dtos/Quote';
import { Pool } from '../../dtos/Pool';

const MapStateToProps = (state) => {
	return {
		authUser: state.loginReducer.authUser,
		quote: state.quoteReducer.quote
	}
}

const MapDispatchToProps = {
	quoteUpdateAction
}

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
	{ key: 1, text: '', value: '' },
	{ key: 2, text: 'Size 1', value: 'Size 1' },
	{ key: 3, text: 'Size 2', value: 'Size 2' },
	{ key: 4, text: 'Size 3', value: 'Size 3' },
	{ key: 5, text: 'Custom', value: 'Custom' },
  ]

const wallHeights = [
	{ key: 1, text: '', value: '' },
	{ key: 2, text: '42"', value: '42"' },
	{ key: 3, text: '48"', value: '48"' },
	{ key: 4, text: '52"', value: '52"' },
  ]

const QuoteFormComponent = (props) => {

	const [dealer, setDealer] = useState(props.authUser?.dealerName);
	const [poolSize, setPoolSize] = useState(props.quote?.poolSize);
	const [length, setLength] = useState(props.quote?.length);
	const [width, setWidth] = useState(props.quote?.width);
	const [poolType, setPoolType] = useState(props.quote?.poolType);
	const [wallHeight, setWallHeight] = useState(props.quote?.wallHeight);
	const [skimmer, setSkimmer] = useState(props.quote?.skimmer);
	const [ladder, setLadder] = useState(props.quote?.ladder);
	const [dealers, setDealers] = useState([]);

	
	let pool = new Pool(poolType, length, width, wallHeight);
	let notes = ''

	let quote = new Quote(props.quote?.orderNumber, props.quote?.requestDate, props.quote?.customer, dealer, pool, notes);
	
	const updateDropdown = (e, data) => {
		switch(data.name) {
			case 'dealer': {
				setDealer(data.value);
				break;
			}
			case 'poolSize': {
				setPoolSize(data.value);
				break;
			}
			case 'wallHeight': {
				setWallHeight(data.value);
				break;
			}
			case 'poolType': {
				setPoolType(data.value);
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

	const updateCheckbox= (e) => {
		switch(e.target.id) {
			case 'skimmer': {
				setSkimmer(!skimmer);
				break;
			}
			case 'ladder': {
				setLadder(!ladder);
				break;
			}
			default: {
				return;
			}
		}
	}

	useEffect(() => {
	
		const fetchDealers = async () => {

		let dealerArray = [];

		let response = await getAllDealers();
			for(let item of response) {
				let nextDealer = {key: item.id, text:item.dealerName, value:item.dealerName};
				dealerArray.push(nextDealer);
			}
		
			setDealers(dealerArray);

		}
		fetchDealers();
		props.quoteUpdateAction(quote);
	},[dealer, poolSize, length, width, poolType, skimmer, ladder, wallHeight])

	return(
	<>
		<Grid padded container>
			<GridRow  centered>
				<GridColumn width='4'>
					<Dropdown fluid name="dealer" placeholder="Dealer" defaultValue={dealer} options={dealers} selection onChange={updateDropdown}/>
				</GridColumn>
				<GridColumn width='4'>
					<Dropdown  fluid selection	placeholder="Pool Type" name="poolType" defaultValue={poolType} options={poolTypes} onChange={updateDropdown} />
				</GridColumn>
				<GridColumn width='4'>
					<Dropdown fluid selection placeholder="Pool Size" name='poolSize' defaultValue={poolSize} options={poolSizes} onChange={updateDropdown} />
					{ (poolSize == 'Custom') ? 
					<>
					<Input fluid placeholder="Length" id='length' label={{content:"FT", color: 'grey'}} labelPosition="right" value={length} onChange={updateInput}/>
					<Input fluid placeholder="Width" id='width' label={{content:"FT", color: 'grey'}} labelPosition="right" value={width} onChange={updateInput}/>
					</> 
					: <> </> }
					</GridColumn>
				<GridColumn width='4'>
					<Dropdown  fluid selection placeholder="Wall Height" name="wallHeight" defaultValue={wallHeight} options={wallHeights} onChange={updateDropdown}	/>
				</GridColumn>
			</GridRow>
		
			<GridRow>
				<GridColumn textAlign='left' width='4'>
					<Label color='grey'>Additional Options</Label>
					<GridRow>
						<Checkbox id='skimmer' label="Skimmer" checked={skimmer} onChange={updateCheckbox}/>
					</GridRow>	
					<GridRow>
						<Checkbox id='ladder' label="Wall Ladder" checked={ladder} onChange={updateCheckbox}/>
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

export default connect(MapStateToProps, MapDispatchToProps)(QuoteFormComponent);