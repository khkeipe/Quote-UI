import React from 'react';
import { Button, Form, Input, FormField, Label, Segment, Container, Grid, GridRow } from 'semantic-ui-react';
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
			<Container>
				<Grid centered>
					<GridRow>
					<Form size="huge">
						<FormField >
							<Input placeholder='First Name' />
						</FormField>
						<FormField>
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
					</GridRow>
				</Grid>
			</Container>
			</> }
			</>
		)
}

export default connect(mapStateToProps)(QuoteComponent);