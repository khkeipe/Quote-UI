import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, CardMeta, Grid, GridColumn, Message, Segment } from 'semantic-ui-react';
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

	const [users, setUsers] = useState([]);

	const getUserInfo = async (user) => {
		console.log(user);
		// let selectedUser = getUserById(userId);
		// userUpdateAction(selectedUser);
	}

	useEffect(() => {

		const fetchUsers = async () => {

			let userArray = [];
	
			let response = await getAllUsers();
				for(let user of response) {
					let nextUser = {key: user.id, email: user.email, role: user.role, dealer: user.dealer};
					userArray.push(
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
								<Link> <Button onClick={getUserInfo(nextUser)} basic color='yellow'> Update </Button> </Link>
								<Link> <Button basic color='red'> Delete </Button> </Link>
							</CardContent>
						</Card>
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
				<GridColumn width='10'>
				{ users.length > 0 ? 
					<>{users}</>
					: <Segment textAlign='center'> <Message negative> No Users Found </Message> </Segment>}
				</GridColumn>
				<GridColumn width="3">
				</GridColumn>
			</Grid>
		</>
	)
}

export default connect(MapStatToProps, MapDispatchToProps)(ViewUserComponent);