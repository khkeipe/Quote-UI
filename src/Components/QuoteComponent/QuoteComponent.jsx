import React from 'react';
import { Button, Form, Input, FormField, Label, Segment, Container, Grid, GridRow, FormSelect, Dropdown, GridColumn, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
	return {
		authUser: state.loginReducer.authUser
	}
}

const dealers = [
	{
	key:'Allen Pools',
	text:'Allen Pools',
	value:'Allen Pools'
	},
	{ 
	key: 'Backyard Leisure',
	text:'Backyard Leisure',
	value: 'Backyard Leisure'
	},
	{ 
	key: 'B&B Pools LLC',
	text:'B&B Pools LLC',
	value: 'B&B Pools LLC'
	}
]


const QuoteComponent = (props) => {

	
		return(
			<>
			{ !props.authUser ? <Redirect to="/home"/> : 
			<>
			<Segment raised>
				<Grid centered divided="vertically" padded="vertically">
					<GridRow>
						<Header size="huge">Quote Form</Header>
					</GridRow>
					<GridRow columns="2" >
						<GridColumn width="8">
							<Segment vertical>
								<Input fluid placeholder='First Name' />
							</Segment>
							<Segment vertical>
								<Input fluid placeholder='Phone Number' />
							</Segment>
						</GridColumn>
						<GridColumn width="8">
							<Segment vertical>
								<Input fluid placeholder='Last Name' />
							</Segment>
						</GridColumn>
					</GridRow>
					<GridRow>
							<Dropdown
								selection
								options={dealers}
								placeholder='Dealer'
							/>
					</GridRow>
					<GridRow>
						<Button size="large" type='submit'>Submit</Button>
					</GridRow>
				</Grid>
			</Segment>
			</> }
			</>
		)
}

export default connect(mapStateToProps)(QuoteComponent);