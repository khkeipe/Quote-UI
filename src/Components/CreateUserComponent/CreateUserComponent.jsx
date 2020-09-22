import React, { useState } from 'react';
import { loginAction } from '../../actions/action-creators';
import { signUpAction } from '../../actions/action-creators';
import { connect } from 'react-redux';
import { Modal, Button, ModalHeader, ModalContent, Form, FormField, Input, Grid, GridRow, FormButton, Message } from 'semantic-ui-react';

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

	// const login = () => {
	// 	props.loginAction(newUser.email, newUser.password);
	// }

	const input = {
		'width': '100%'
	}

	return (
		<>
		<Modal size="mini" 
					trigger=
					{<Button>Sign Up</Button>}
					>
				<ModalHeader>Sign Up</ModalHeader>
				<ModalContent>
					<Form>
						<div className="ui left icon input" style={input}>
							<input autoFocus placeholder='E-mail Address' width="100" onChange={updateEmail} value={email}/>
							<i className="user icon"/>
						</div>
						<FormField>
							<Input icon="key" iconPosition="left" placeholder='Password' type='password' onChange={updatePassword} value={password}/>
						</FormField>
						<FormField>
							<Input icon="key" iconPosition="left" placeholder='Verify Password' type='password' onChange={updatePasswordTwo} value={passwordTwo}/>
						</FormField>
						<Grid>
							<GridRow centered>
								<FormButton type='submit' onClick={signUp}>Create</FormButton>
							</GridRow>
						</Grid>
						
						{props.errorMessage ? <Message negative>{props.errorMessage}</Message> : <></> }
					</Form>
				</ModalContent>
			</Modal>

		</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserComponent);