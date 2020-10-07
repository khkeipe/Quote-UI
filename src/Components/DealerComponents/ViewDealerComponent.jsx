import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, CardMeta, Grid, GridColumn, Message, Segment, Table, TableRow } from 'semantic-ui-react';
import { getAllDealers, getDealerById } from '../../remote/dealer-service';
import { dealerUpdateAction } from '../../actions/action-creators';

const MapStateToProps = (state) => {
	return {
		authUser: state.loginReducer.authUser,
	}
}

const MapDispatchToProps = {
	dealerUpdateAction
}

const ViewDealerComponent = (props) => {

	const [dealers, setDealers] = useState([]);

	let history = useHistory();

	const update = async (e) => {
		const tableId = e.target.id;
		console.log('Update dealer with id: ' + tableId);
		let selectedDealer = await getDealerById(tableId);
		props.dealerUpdateAction(selectedDealer);
		
		history.push('/dealer-update');
	}

	useEffect(() => {

		const fetchDealers = async () => {


			let dealerArray = [];
	
			let response = await getAllDealers();
				for(let dealer of response) {
					let nextDealer = {key: dealer.id, name: dealer.dealerName};
					dealerArray.push(
						<TableRow>
							<Card centered fluid>
								<CardHeader as='h2'>
									{nextDealer.name}
								</CardHeader>
								<CardMeta>
									
								</CardMeta>
								<CardContent>

								</CardContent>
								<CardContent textAlign='center'>
									<Button id={dealer.key} onClick={update} basic color='yellow'> Update </Button>
									<Button basic color='red'> Delete </Button>
								</CardContent>
							</Card>
						</TableRow>
					)};

				setDealers(dealerArray);
	
			}
			fetchDealers();
	},[]);

	return (
		<>
			<Grid>
				<GridColumn width="3">
				</GridColumn>
				<GridColumn width='10' stretched={true}>
				{ dealers.length > 0 ? 
					<><Table>{dealers}</Table></>
					: <Segment textAlign='center'> <Message negative> No Dealers Found </Message> </Segment>}
				</GridColumn>
				<GridColumn width="3">
				</GridColumn>
			</Grid>
		</>
	)
}

export default connect(MapStateToProps, MapDispatchToProps)(ViewDealerComponent);