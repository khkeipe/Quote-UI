import React from 'react';
import { Button, Input, Segment, Grid, GridRow, GridColumn, Header, Label } from 'semantic-ui-react';
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
	'width': '100%'
}


const QuoteComponent = (props) => {

	const [firstName, setFirstName ] = useState('');
	const [lastName, setLastName ] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [orderNumber, setOrderNumber] = useState('');
	const [date, setDate] = useState('');
	const [dateNeeded, setDateNeeded] = useState('');

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
			{ !props.authUser ? <Redirect to="/home"/> : 
			<>
			<Segment raised>
				<Grid centered divided="vertically" padded="vertically">
					<GridRow>
						<Header size="huge">Quote Form</Header>
					</GridRow>
					<GridRow>
						<GridColumn width="6">
							<Segment vertical>
								<Label>First Name</Label>
							<div className="ui input" style={input}>
								<input autoFocus placeholder='First Name' onChange={updateFirstName} value={firstName}/>
							</div>
							</Segment>

							<Segment vertical>
								<Label>Last Name</Label>
								<Input fluid placeholder='Last Name' onChange={updateLastName} value={lastName}/>
							</Segment>
						</GridColumn>
						<GridColumn width="6">
						<Segment vertical>
								<Label>Phone Number</Label>
								<Input fluid placeholder='Phone Number' onChange={updatePhone} value={phone}/>
							</Segment>
							
							<Segment vertical>
								<Label>E-mail Address</Label>
								<Input fluid placeholder='E-Mail Address' onChange={updateEmail} value={email}/>
							</Segment>
						</GridColumn>
					</GridRow>
					<GridRow>
						<PoolComponent/>
					</GridRow>

					<GridRow>
						Pool Image Will Go Here
					</GridRow>

					<GridRow>
						<Link to="/quote"><Button size="large" type='submit' onClick={buildQuote}>Review</Button></Link>
					</GridRow>
				</Grid>
			</Segment>
			
			</> }
			</>
		)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent);