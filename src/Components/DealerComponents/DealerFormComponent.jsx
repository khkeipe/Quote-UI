import React from 'react';
import { Button, Input, Segment, Grid, GridRow, GridColumn, Header, Divider, Dropdown, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import { createDealerAction } from '../../actions/action-creators';

const mapStateToProps = (state) => {
	return {
		authUser: state.loginReducer.authUser,
		dealer: state.dealerReducer.dealer,
		errorMessage: state.dealerReducer.errorMessage
	}
}

const states = [
	{ key: 1, text: '', value: '' },
	{ key: 2, text: 'Alabama', value: 'Alabama' },
	{ key: 3, text: 'Alaska', value: 'Alaska' },
	{ key: 4, text: 'Arizona', value: 'Arizona' },
	{ key: 5, text: 'Arkansas', valu: 'Arkansas'},
	{ key: 6, text: 'California', value: 'California' },
	{ key: 7, text: 'Colorado', value: 'Colorado' },
	{ key: 8, text: 'Connecticut', value: 'Connecticut' },
	{ key: 9, text: 'Delaware', value: 'Delaware' },
	{ key: 10, text: 'Florida', value: 'Florida' },
	{ key: 11, text: 'Georgia', value: 'Georgia' },
	{ key: 12, text: 'Hawaii', value: 'Hawaii' },
	{ key: 13, text: 'Idaho', value: 'Idaho' },
	{ key: 14, text: 'Illinois', value: 'Illinois' },
	{ key: 15, text: 'Indiana', value: 'Indiana' },
	{ key: 16, text: 'Iowa', value: 'Iowa' },
	{ key: 17, text: 'Kansas', value: 'Kansas' },
	{ key: 18, text: 'Kentucky', value: 'Kentucky' },
	{ key: 19, text: 'Louisiana', value: 'Louisiana' },
	{ key: 20, text: 'Maine', value: 'Maine' },
	{ key: 21, text: 'Maryland', value: 'Maryland' },
	{ key: 22, text: 'Massachusetts', value: 'Massachusetts' },
	{ key: 23, text: 'Michigan', value: 'Michigan' },
	{ key: 24, text: 'Minnesota', value: 'Minnesota' },
	{ key: 25, text: 'Mississippi', value: 'Mississippi' },
	{ key: 26, text: 'Missouri', value: 'Missouri' },
	{ key: 27, text: 'Montana', value: 'Montana' },
	{ key: 28, text: 'Nebraska', value: 'Nebraska' },
	{ key: 29, text: 'Nevada', value: 'Nevada' },
	{ key: 30, text: 'New Hampshire', value: 'New Hampshire' },
	{ key: 31, text: 'New Jersey', value: 'New Jersey' },
	{ key: 32, text: 'New Mexico', value: 'New Mexico' },
	{ key: 33, text: 'New York', value: 'New York' },
	{ key: 34, text: 'North Carolina', value: 'North Carolina' },
	{ key: 35, text: 'North Dakota', value: 'North Dakota' },
	{ key: 36, text: 'Ohio', value: 'Ohio' },
	{ key: 37, text: 'Oklahoma', value: 'Oklahoma' },
	{ key: 38, text: 'Oregon', value: 'Oregon' },
	{ key: 39, text: 'Pennsylvania', value: 'Pennsylvania' },
	{ key: 40, text: 'Rhode Island', value: 'Rhode Island' },
	{ key: 41, text: 'South Carolina', value: 'South Carolina' },
	{ key: 42, text: 'South Dakota', value: 'South Dakota' },
	{ key: 43, text: 'Tennessee', value: 'Tennessee' },
	{ key: 44, text: 'Texas', value: 'Texas' },
	{ key: 45, text: 'Utah', value: 'Utah' },
	{ key: 46, text: 'Vermont', value: 'Vermont' },
	{ key: 47, text: 'Virginia', value: 'Virginia' },
	{ key: 48, text: 'Washington', value: 'Washington' },
	{ key: 49, text: 'West Virginia', value: 'West Virginia' },
	{ key: 50, text: 'Wisconsin', value: 'Wisconsin' },
	{ key: 51, text: 'Wyoming', value: 'Wyoming' }
]

const mapDispatchToProps = {
	createDealerAction
}

const input = {
	'width': '100%',
}

const DealerFormComponent = (props) => {

	const [dealerName, setDealerName ] = useState('');
	const [dealerCode, setDealerCode ] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [street, setStreet] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zip, setZip] = useState('');

	const updateDealerName = (e) => { setDealerName(e.target.value); }
	const updateDealerCode = (e) => { setDealerCode(e.target.value); }
	const updatePhone = (e) => { setPhone(e.target.value); }
	const updateEmail = (e) => { setEmail(e.target.value); }
	const updateStreet = (e) => {setStreet(e.target.value)};
	const updateCity = (e) => {setCity(e.target.value)};
	const updateZip = (e) => {setZip(e.target.value)};
	const updateState = (e, data) => {setState(data.value)};

	const saveDealer= () => {
		props.createDealerAction(dealerName, dealerCode, phone, email, street, city, state, zip);	
	}

		return(
			<>
			{ !props.authUser ? <Redirect to="/home"/> : 
			<>
			<Segment raised>
				<Grid padded="vertically">
					<GridRow centered>
						<Header size="huge">Dealer</Header>
					</GridRow>
					<Divider/>

					<GridRow>
						<GridColumn width='4'>
							<div className="ui input" style={input}>
								<input tabIndex='3' fluid placeholder='Dealer Name' onChange={updateDealerName} value={dealerName}/>
							</div>
						</GridColumn>

						<GridColumn width='4'>
							<Input tabIndex='4' fluid placeholder='Dealer Code' onChange={updateDealerCode} value={dealerCode}/>
						</GridColumn>

						<GridColumn width='4'>
							<Input tabIndex='5' fluid placeholder='Phone Number' onChange={updatePhone} value={phone}/>
						</GridColumn>
						
						<GridColumn width='4'>
							<Input tabIndex='6' fluid placeholder='E-Mail Address' onChange={updateEmail} value={email}/>
						</GridColumn>

					</GridRow>

					<GridRow>
						<GridColumn width='5'>
							<Input tabIndex='7' fluid placeholder='Street Address' onChange={updateStreet} value={street}/>
						</GridColumn>

						<GridColumn width='4'>
							<Input tabIndex='8' fluid placeholder='City' onChange={updateCity} value={city}/>
						</GridColumn>

						<GridColumn width='3'>
							<Dropdown fluid name="State" placeholder="State" defaultValue={state} options={states} search selection onChange={updateState}/>
						</GridColumn>

						<GridColumn width='4'>
							<Input tabIndex='10' fluid placeholder='Zip Code' onChange={updateZip} value={zip}/>
						</GridColumn>
					</GridRow>

					<Divider/>

				</Grid>
					
				<Segment inverted padded textAlign='center'>
					<Button size="large" inverted color='black' onClick={saveDealer}> Save </Button>
					{ props.errorMessage ? <Message negative> {props.errorMessage} </Message> : <></>}
				</Segment>
			</Segment>
			
			</> }
			</>
		)
}

export default connect(mapStateToProps, mapDispatchToProps)(DealerFormComponent);