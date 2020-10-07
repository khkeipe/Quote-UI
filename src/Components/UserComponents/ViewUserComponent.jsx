import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, CardMeta, Grid, GridColumn, Message, Segment, Table, TableRow } from 'semantic-ui-react';
import { getAllUsers, getUserById } from '../../remote/user-service';
import { userUpdateAction } from '../../actions/action-creators';

const MapStatToProps = (state) => {
	return {
		user: state.userReducer.user
	}
}

const MapDispatchToProps = {
	userUpdateAction
}

const ViewUserComponent = (props) => {

	let history = useHistory();

	const [users, setUsers] = useState([]);

	const getUserInfo = async (e) => {
		const tableId = e.target.id;
		console.log('Update user with id: ' + tableId);
		let selectedUser = await getUserById(tableId);
		props.userUpdateAction(selectedUser);
		
		history.push('/user-update');
	}

	useEffect(() => {

		const fetchUsers = async () => {

			let userArray = [];
	
			let response = await getAllUsers();
				for(let user of response) {
					let nextUser = {key: user.id, email: user.email, role: user.role, dealer: user.dealer};
					userArray.push(
						<TableRow >
							<Card centered fluid>
								<CardHeader as='h2'>
									{nextUser.email}
								</CardHeader>
								<CardMeta>
									Role: {nextUser.role}
								</CardMeta>
								<CardContent>

								</CardContent>
								<CardContent textAlign='center'>
									<Button id={nextUser.key} onClick={getUserInfo} basic color='yellow'> Update </Button>
									<Button basic color='red'> Delete </Button>
								</CardContent>
							</Card>
						</TableRow>
					)};

				setUsers(userArray);
	
			}
			fetchUsers();
	},[]);

	return (
		<>
			<Grid>
				<GridColumn width="3">
				</GridColumn>
				<GridColumn width='10' stretched={true}>
				{ users.length > 0 ? 
					<><Table>{users}</Table></>
					: <Segment textAlign='center'> <Message negative> No Users Found </Message> </Segment>}
				</GridColumn>
				<GridColumn width="3">
				</GridColumn>
			</Grid>
		</>
	)
}

export default connect(MapStatToProps, MapDispatchToProps)(ViewUserComponent);