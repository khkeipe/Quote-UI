import React, { useState } from 'react';
import { Modal, Button, Form, FormButton, Message, Grid } from 'semantic-ui-react';
import { loginAction } from '../../actions/action-creators';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
	return { authUser: state.loginReducer.authUser,
			 errorMessage: state.loginReducer.errorMessage }
};

const mapDispatchToProps = {
	loginAction
}

const LoginComponent = (props) => {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	window.onkeypress = (event) => {
		let key = event.key.toUpperCase();
		if(key === 'ENTER' && Modal.open === true) {
			login();	
		}
	}

	let updateEmail = (e) => {
		setEmail(e.target.value);
	}
	let updatePassword = (e) => {
		setPassword(e.target.value);
	}

	async function login(){
		props.loginAction(email, password)
	}

	return(
		<>
		{ props.authUser ? <Redirect to='/quote'/> : 
		<> 
			<h2>{props.authUser}</h2>
			<Modal size="mini" 
					trigger={
					<Button>LOGIN</Button>
					} >
				<Modal.Header>LOGIN</Modal.Header>
				<Modal.Content>
					<Form>
						<Form.Field>
							<label>Email</label>
							<input placeholder='Email' onChange={updateEmail} value={email}/>
						</Form.Field>
						<Form.Field>
							<label>Password</label>
							<input placeholder='Password' type='password' onChange={updatePassword} value={password}/>
						</Form.Field>
						<Grid>
							<Grid.Column textAlign="center">
								<FormButton type='submit' onClick={login}>LOGIN</FormButton>
							</Grid.Column>
						</Grid>
						
						{props.errorMessage ? <Message negative>{props.errorMessage}</Message> : <></> }
					</Form>
				</Modal.Content>
			</Modal>
		</> }
		</>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);