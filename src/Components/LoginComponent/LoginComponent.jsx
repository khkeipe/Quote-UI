import React, { useState } from 'react';
import { Modal, Button, Form, FormButton, Message, Grid, FormField, Input, Icon, Label, ModalContent, ModalHeader, GridRow, GridColumn } from 'semantic-ui-react';
import { loginAction } from '../../actions/action-creators';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';

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
		{ props.authUser ? <Redirect to="/home"/> : 
		<> 
			<Modal size="mini" 
					trigger=
					{<Button inverted>LOGIN</Button>}
					>
				<ModalHeader>LOGIN</ModalHeader>
				<ModalContent>
					<Form>
						<FormField>
							<Input icon="user left" iconPosition="left" placeholder='E-mail Address' onChange={updateEmail} value={email}/>
						</FormField>
						<Form.Field>
							<Input icon="key" iconPosition="left" placeholder='Password' type='password' onChange={updatePassword} value={password}/>
						</Form.Field>
						<Grid>
							<GridRow centered>
								<FormButton type='submit' onClick={login}>LOGIN</FormButton>
							</GridRow>
							<GridRow>
								<GridColumn width="10" verticalAlign="middle" textAlign="center">
									<HeaderSubHeader >Don't have an account?</HeaderSubHeader>
								</GridColumn>
								<GridColumn width="6" textAlign="center">
									<Button size="tiny">Sign Up</Button>
								</GridColumn>
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