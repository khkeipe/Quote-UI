import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const getDealers = () => {

	// const dealers = {

	// }
}


const QuoteComponent = () => {

	
		return(
			<>
				<Form className="container segment">
					<Form.Field>
						<label>First Name</label>
						<input placeholder='First Name' />
					</Form.Field>
					<Form.Field>
						<label>Last Name</label>
						<input placeholder='Last Name' />
					</Form.Field>
					<Form.Select
						fluid
						label=''
						options={getDealers}
						placeholder='Dealer'
					/>

					<Button type='submit'>Submit</Button>
					
				</Form>			
			
			</>
		)
}

export default QuoteComponent;