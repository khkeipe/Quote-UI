import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, CardMeta, Grid, GridColumn, Message, Segment } from 'semantic-ui-react';
import { getAllPools } from '../../remote/pool-service';

const ViewPoolComponent = () => {

	const [pools, setPools] = useState([]);

	useEffect(() => {

		const fetchPools = async () => {

			let poolArray = [];
	
			let response = await getAllPools();
				for(let pool of response) {
					let nextPool = {key: pool.id, size: pool.size};
					poolArray.push(
						<Card centered fluid>
							<CardHeader as='h2'>
								{nextPool.size}
							</CardHeader>
							<CardMeta>
								
							</CardMeta>
							<CardContent>

							</CardContent>
							<CardContent textAlign='center'>
								<Link> <Button basic color='yellow'> Update </Button> </Link>
								<Link> <Button basic color='red'> Delete </Button> </Link>
							</CardContent>
						</Card>
					)};

				setPools(poolArray);
	
			}
			fetchPools();
	},[]);

	return (
		<>
			<Grid>
				<GridColumn width="3">
				</GridColumn>
				<GridColumn width='10'>
					{ pools.length > 0 ? 
					<>{pools}</>
					: <Segment textAlign='center'> <Message textAlign='center' negative> No Pools Found </Message> </Segment>}
				</GridColumn>
				<GridColumn width="3">
				</GridColumn>
			</Grid>
		</>
	)
}

export default ViewPoolComponent;