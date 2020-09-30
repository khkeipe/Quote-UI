import React, { useState } from 'react';
import { loginAction } from '../../actions/action-creators';
import { signUpAction } from '../../actions/action-creators';
import { connect } from 'react-redux';
import { Modal, Button, Input, Grid, GridRow, FormButton, Message, Segment, Divider, GridColumn, Header } from 'semantic-ui-react';

const mapStateToProps = (state) => {
	return { authUser: state.loginReducer.authUser,
			 errorMessage: state.signUpReducer.errorMessage }
};

const mapDispatchToProps = {
	loginAction,
	signUpAction
}

const CreateUserComponent = (props) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordTwo, setPasswordTwo] = useState('');

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

	const signUp = async () => {
		props.signUpAction(email, password, passwordTwo);
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
				<GridColumn width="6">
					<Input icon="key" iconPosition="left" placeholder='Password' type='password' onChange={updatePassword} value={password}/>
				</GridColumn>
				<GridColumn width="6">
					<Input icon="key" iconPosition="left" placeholder='Verify Password' type='password' onChange={updatePasswordTwo} value={passwordTwo}/>
				</GridColumn>
				</GridRow>
				<GridRow centered>
					<FormButton type='submit' onClick={signUp}>Create</FormButton>
				</GridRow>
				<GridRow>				
					{props.errorMessage ? <Message negative>{props.errorMessage}</Message> : <></> }
				</GridRow>
			</Grid>
		</Segment>
		</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserComponent);