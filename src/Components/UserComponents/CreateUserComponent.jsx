import React, { useEffect, useState } from 'react';
import { createUserAction, userUpdateAction } from '../../actions/action-creators';
import { connect } from 'react-redux';
import { Modal, Button, Input, Grid, GridRow, Message, Segment, Divider, GridColumn, Header, Dropdown, ModalContent } from 'semantic-ui-react';
import { getAllDealers } from '../../remote/dealer-service';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
	return { authUser: state.loginReducer.authUser,
			 errorMessage: state.userReducer.errorMessage,
			 }
};

const mapDispatchToProps = {
	createUserAction,
	userUpdateAction
}

const CreateUserComponent = (props) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordTwo, setPasswordTwo] = useState('');
	const [dealer, setDealer] = useState('');
	const [dealerList, setDealersList] = useState([]);
	const [role, setRole] = useState('');
	const [dealerID, setDealerID] = useState('');

	const roleList = [
		{key: 'Admin', text: 'Admin', value: 'Admin'}, 
		{key: 'User', text: 'User', value: 'User'}
	];

	useEffect(() => {
	
		const fetchDealers = async () => {

		let dealerArray = [];

		let response = await getAllDealers();
			for(let item of response) {
				let nextDealer = {key: item.id, text:item.dealerName, value:item.id};
				dealerArray.push(nextDealer);
			}
		
			setDealersList(dealerArray);

		}
		fetchDealers();
	},[dealerList])

	window.onkeypress = (event) => {
		let key = event.key.toUpperCase();
		if(key === 'ENTER' && Modal.open === true) {
			signUp();	
		}
	}

	let updateEmail = (e) => {
		setEmail(e.target.value);
	}
	let updatePassword = (e) => {
		setPassword(e.target.value);
	}
	let updatePasswordTwo = (e) => {
		setPasswordTwo(e.target.value);
	}

	const updateDropdown = (e, data) => {
		setDealer(data.text);
		setDealerID(data.value)
	}

	const updateRole = (e, data) => {
		setRole(data.value);
	}

	const signUp = async () => {
		if(password === passwordTwo){
			props.createUserAction(email, password, role, dealerID);
		}
	}

	const input = {
		'width': '100%'
	}

	return (
		<>
		<Segment>
			<Grid>
				<GridRow centered>
					<Header as="h1" > Add User </Header>
				</GridRow>
				<Divider/>
				<GridRow>
					<GridColumn width="6">
						<div className="ui left icon input" style={input}>
							<input autoFocus placeholder='E-mail Address' width="100" onChange={updateEmail} value={email}/>
							<i className="user icon"/>
						</div>
					</GridColumn>
				<GridColumn width="5">
					<Input icon="key" fluid iconPosition="left" placeholder='Password' type='password' onChange={updatePassword} value={password}/>
				</GridColumn>
				<GridColumn width="5">
					<Input icon="key" fluid iconPosition="left" placeholder='Verify Password' type='password' onChange={updatePasswordTwo} value={passwordTwo}/>
				</GridColumn>
				</GridRow>
				<GridRow>
					<GridColumn width='4'>
						<Dropdown fluid name="dealer" placeholder="Dealer" defaultValue={dealer} options={dealerList} selection onChange={updateDropdown}/>
					</GridColumn>
					<GridColumn width='4'>
						<Dropdown fluid name="role" placeholder="Role" defaultValue={role} options={roleList} selection onChange={updateRole}/>
					</GridColumn>
				</GridRow>
				
			</Grid>
				<Segment inverted padded textAlign='center'>
					<Modal
					size='mini' 
					trigger={<Button color='black' inverted size='large' onClick={signUp}> Save </Button>}>
						<ModalContent>
							{ props.errorMessage ? <>
								<Grid>
								<GridRow centered>
									<Message error> {props?.errorMessage} </Message>
								</GridRow>
							</Grid>
							</>
							: <>
							<Grid>
								<GridRow centered>
									<Message info> A new account has been created for {props?.user?.email} </Message>
								</GridRow>
								<GridRow centered>
									<Link to='/dashboard'><Button color='black' size='mini'>Return to Dashboard</Button></Link>
								</GridRow>
							</Grid>
							</> }
						</ModalContent>
					</Modal>

					
					{props.errorMessage ? <Message negative>{props.errorMessage}</Message> : <></> }
				</Segment>
		</Segment>
		</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserComponent);