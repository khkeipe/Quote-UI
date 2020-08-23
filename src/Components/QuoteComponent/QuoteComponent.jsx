import React from 'react';
import { Button, Input, Segment, Grid, GridRow, GridColumn, Header, Label, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { useState } from 'react';
import PoolComponent from '../PoolComponent/PoolComponent';
import { contactCreatorAction } from '../../actions/action-creators';

const mapStateToProps = (state) => {
	return {
		authUser: state.loginReducer.authUser,
		quoteInfo: state.quoteReducer.quoteInfo
	}
}

const mapDispatchToProps = {
	contactCreatorAction
}

const input = {
	'width': '100%',
}

const color = {
	'color': 'black'
}


const QuoteComponent = (props) => {

	const [firstName, setFirstName ] = useState('');
	const [lastName, setLastName ] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [orderNumber, setOrderNumber] = useState('');
	const [requestDate, setRequestDate] = useState('');

	const updateFirstName = (e) => {
		setFirstName(e.target.value);
	}
	const updateLastName = (e) => {
		setLastName(e.target.value);
	}
	const updatePhone = (e) => {
		setPhone(e.target.value);
	}

	const updateEmail = (e) => {
		setEmail(e.target.value);
	}

	const buildQuote = () => {
		let contactInfo = {
			firstName: firstName,
			lastName: lastName,
			number: phone,
			email: email
		}
		props.contactCreatorAction(contactInfo);
	}

		return(
			<>
			{/* { !props.authUser ? <Redirect to="/home"/> : 
			<> */}
			<Segment raised>
				<Grid padded="vertically">
					<GridRow centered>
						<Header size="huge">Quote Form</Header>
					</GridRow>
					<Divider/>
					<GridRow>
						<GridColumn width='3'>
							<div className="ui input" style={input}>
								<input autoFocus tabIndex='1' placeholder='Order Number' value={orderNumber} />
							</div>
						</GridColumn>
						<GridColumn width='10'/>
						<GridColumn width='3'>
							<Input fluid tabIndex='2' type='date' label={{content:"Requested Date", color: 'grey'}} value={requestDate}/>
						</GridColumn>
						
					</GridRow>

					<GridRow>
						<GridColumn width='4'>
							<Input tabIndex='3' fluid placeholder='First Name' onChange={updateFirstName} value={firstName}/>
						</GridColumn>
						<GridColumn width='4'>
						<Input tabIndex='4' fluid placeholder='Last Name' onChange={updateLastName} value={lastName}/>

						</GridColumn>
						<GridColumn width='4'>
						<Input tabIndex='5' fluid placeholder='Phone Number' onChange={updatePhone} value={phone}/>

						</GridColumn>
						<GridColumn width='4'>
						<Input tabIndex='6' fluid placeholder='E-Mail Address' onChange={updateEmail} value={email}/>

						</GridColumn>

					</GridRow>

					<Divider/>

					<GridRow centered>
						<PoolComponent/>
					</GridRow>

					<GridRow centered>
						Pool Image Will Go Here
					</GridRow>

				</Grid>
					
				<Segment inverted padded textAlign='center'>
					<Link to="/quote"><Button size="large" inverted color='grey' onClick={buildQuote}>Review</Button></Link>
				</Segment>
			</Segment>
			
			{/* </> } */}
			</>
		)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent);