import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardMeta, Grid, GridColumn, Message, Segment } from 'semantic-ui-react';
import { getAllPools } from '../../remote/pool-service';

const ViewPoolComponent = () => {

	const [pools, setPools] = useState([]);

	useEffect(() => {

		const fetchPools = async () => {

			let poolArray = [];
	
			let response = await getAllPools();
				for(let pool of response) {
					let nextPool = {key: pool.id, type: pool.poolType, code: pool.poolCode, length: pool.length, width: pool.width, height: pool.height, hopper: pool.hopperSize};
					poolArray.push(
						<Card centered fluid>
							<CardHeader as='h2'>
								{nextPool.type}
							</CardHeader>
							<CardMeta>
								{nextPool.code}
							</CardMeta>
							<CardContent>
								Dimensions: {nextPool.length}" x {nextPool.width}"
							</CardContent>
							<CardContent>
								Wall Height: {nextPool.height}"
							</CardContent>
							<CardContent>
								Hopper Dimension: {nextPool.hopperSize}'
							</CardContent>

							<CardContent textAlign='center'>
								<Button id={nextPool.key} basic color='yellow'> Update </Button>
								<Button basic color='red'> Delete </Button>
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