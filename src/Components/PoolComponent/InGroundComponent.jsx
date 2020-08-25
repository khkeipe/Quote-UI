import React from 'react';
import { Dropdown, Input, Checkbox, Grid, GridRow, GridColumn, Label } from 'semantic-ui-react';
import { useState } from 'react';
import { getDealers } from '../../remote/dealer-service';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { quoteCreatorAction } from '../../actions/action-creators';

const MapStateToProps = (state) => {
	return {
		quoteInfo: state.quoteReducer.quoteInfo
	}
}

const MapDispatchToProps = {
	quoteCreatorAction
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

const InGroundComponent = (props) => {

	const [dealer, setDealer] = useState(props.quoteInfo?.dealer);
	const [poolSize, setPoolSize] = useState(props.quoteInfo?.poolSize);
	const [length, setLength] = useState(props.quoteInfo?.length);
	const [width, setWidth] = useState(props.quoteInfo?.width);
	const [poolType, setPoolType] = useState(props.quoteInfo?.poolType);
	const [wallHeight, setWallHeight] = useState(props.quoteInfo?.wallHeight);
	const [skimmer, setSkimmer] = useState(props.quoteInfo?.skimmer);
	const [ladder, setLadder] = useState(props.quoteInfo?.ladder);
	const [dealers, setDealers] = useState([]);

	let quoteInfo = {
		dealer: dealer,
		poolSize: poolSize,
		length: length,
		width: width,
		poolType: poolType,
		wallHeight: wallHeight,
		skimmer: skimmer,
		ladder: ladder,
	}
	
	const updateDropdown = (e, data) => {
		switch(data.name) {
			case 'dealer': {
				setDealer(data.value);
				// props.quoteCreatorAction(quoteInfo);
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

		let response = await getDealers();
			for(let item of response) {
				let nextDealer = {key: item.id, text:item.dealerName, value:item.dealerName};
				dealerArray.push(nextDealer);
			}
		
			setDealers(dealerArray);

		}
		fetchDealers();
		props.quoteCreatorAction(quoteInfo);
	},[dealer, poolSize, length, width, poolType, skimmer, ladder, wallHeight])

	return(
	<>
		<Grid padded >
			<GridRow >
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

export default connect(MapStateToProps, MapDispatchToProps)(InGroundComponent);