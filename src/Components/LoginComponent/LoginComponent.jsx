import React, { useState } from 'react';
import { Modal, Button, Form, FormButton, Message, Grid, FormField, Input, ModalContent, ModalHeader, GridRow, GridColumn } from 'semantic-ui-react';
import { loginAction } from '../../actions/action-creators';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';
import CreateUserComponent from '../UserComponents/CreateUserComponent';

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

	const input = {
		'width': '100%'
	}

	return(
		<>
		{ props.authUser ? <Redirect to="/home"/> : 
		<> 
			<Modal size="mini" 
					trigger=
					{<Button inverted >LOGIN</Button>}
					>
				<ModalHeader>LOGIN</ModalHeader>
				<ModalContent>
					<Form>
						<div className="ui left icon input" style={input}>
							<input autoFocus placeholder='E-mail Address' width="100" onChange={updateEmail} value={email}/>
							<i className="user icon"/>
						</div>
						<FormField>
							<Input icon="key" iconPosition="left" placeholder='Password' type='password' onChange={updatePassword} value={password}/>
						</FormField>
						<Grid>
							<GridRow centered>
								<Button type='submit' color='black' onClick={login}>LOGIN</Button>
							</GridRow>
						</Grid>
						
						{props.errorMessage ? <Message negative>{props.errorMessage}</Message> : <></> }
					</Form>
				</ModalContent>
			</Modal>
		</> }
		</>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);