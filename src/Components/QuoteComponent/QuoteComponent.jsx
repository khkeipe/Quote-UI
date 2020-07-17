import React from 'react';
import { Button, Form, Input, FormField, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
	return {
		authUser: state.loginReducer.authUser
	}
}

const getDealers = () => {

	// const dealers = {

	// }
}


const QuoteComponent = (props) => {

	
		return(
			<>
			{ !props.authUser ? <Redirect to="/home"/> : 
			<>
				<Form className="container segment">
					<FormField >
						<Label >First Name</Label>
						<Input placeholder='First Name' />
					</FormField>
					<FormField>
						<Label>Last Name</Label>
						<Input placeholder='Last Name' />
					</FormField>
					<Form.Select
						fluid
						label=''
						options={getDealers}
						placeholder='Dealer'
					/>

					<Button type='submit'>Submit</Button>
					
				</Form>			
			</> }
			</>
		)
}

export default connect(mapStateToProps)(QuoteComponent);