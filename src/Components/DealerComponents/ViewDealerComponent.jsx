import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, CardMeta, Grid, GridColumn, Message, Segment, Table, TableRow } from 'semantic-ui-react';
import { getAllDealers } from '../../remote/dealer-service';

const ViewDealerComponent = () => {

	const [dealers, setDealers] = useState([]);

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
									<Link> <Button id={dealer.key} basic color='yellow'> Update </Button> </Link>
									<Link> <Button basic color='red'> Delete </Button> </Link>
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

export default ViewDealerComponent;