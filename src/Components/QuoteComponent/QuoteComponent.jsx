import React from 'react';
import { Button, Input, Segment, Grid, GridRow, Dropdown, GridColumn, Header, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import PoolComponent from '../PoolComponent/PoolComponent';

const mapStateToProps = (state) => {
	return {
		authUser: state.loginReducer.authUser
	}
}

const input = {
	'width': '100%'
}


const QuoteComponent = (props) => {

	const [firstName, setFirstName ] = useState('');
	const [lastName, setLastName ] = useState('');
	const [phone, setPhone] = useState('');

	const updateFirstName = (e) => {
		setFirstName(e.target.value);
	}
	const updateLastName = (e) => {
		setLastName(e.target.value);
	}
	const updatePhone = (e) => {
		setPhone(e.target.value);
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
					<GridRow columns="2" >
						<GridColumn width="8">
							<Segment vertical>
							<div className="ui input" style={input}>
								<input autoFocus placeholder='First Name' onChange={updateFirstName} value={firstName}/>
							</div>
							</Segment>
							<Segment vertical>
								<Input fluid placeholder='Phone Number' onChange={updatePhone} value={phone}/>
							</Segment>
						</GridColumn>
						<GridColumn width="8">
							<Segment vertical>
								<Input fluid placeholder='Last Name' onChange={updateLastName} value={lastName}/>
							</Segment>
						</GridColumn>
					</GridRow>
					<GridRow>
						<PoolComponent/>
					</GridRow>
					<GridRow>
						<Button size="large" type='submit'>Submit</Button>
					</GridRow>
				</Grid>
			</Segment>
			</> }
			</>
		)
}

export default connect(mapStateToProps)(QuoteComponent);