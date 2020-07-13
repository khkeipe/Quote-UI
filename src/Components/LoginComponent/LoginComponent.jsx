import React from 'react';
import { Modal, Button, Form, FormButton} from 'semantic-ui-react';
import { authenticate } from '../../remote/auth-service';



const LoginComponent = () => {
	
	let email;
	let password;

	window.onkeypress = (event) => {
		let key = event.key.toUpperCase();
		if(key === 'ENTER' && Modal.open === true) {
			login();	
		}
	}

	async function login(email, password){

		console.log(email);
		console.log(password);
		
		try {
			let response = authenticate(email, password);
			console.log(response);
			return response;
		} catch (e) {
	
		}
	}

	return(
		<>
			<Modal trigger={<Button>LOGIN</Button>} >
				<Modal.Header>LOGIN</Modal.Header>
				<Modal.Content>
					<Form>
						<Form.Field>
							<label>Email</label>
							<input placeholder='Email' value={email} />
						</Form.Field>
						<Form.Field>
							<label>Password</label>
							<input placeholder='Password' type='password' value={password}/>
						</Form.Field>
						<FormButton type='submit' onClick={login}>LOGIN</FormButton>
					</Form>
				</Modal.Content>
			</Modal>
		</>
	);
}

export default LoginComponent;