import React, { useState } from 'react';
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardMeta, Grid, GridColumn, Header, Message, Segment, Table, TableRow } from 'semantic-ui-react';
import { getAllQuotes } from '../../remote/quote-service';

const ViewQuoteComponent = () => {

	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
	
		const fetchQuotes = async () => {

		let quoteArray = [];

		let response = await getAllQuotes();
			for(let quote of response) {
				let nextQuote = {
					key: quote.id, order: quote.orderNumber, 
					date: quote.requestDate, 
					customer: quote.quoteCustomer?.email, 
					dealer: quote.quoteDealer?.dealerName };
				quoteArray.push(
					<TableRow>
						<Card centered fluid>
							<CardHeader as='h2'>
								Order Number: {nextQuote.order}
							</CardHeader>
							<CardMeta>
								Requested Date: {nextQuote.date}
							</CardMeta>
							<CardContent>
								<Header as='h3'>Dealer:</Header> {nextQuote.dealer}
							</CardContent>
							<CardContent>
								<Header as='h3'>Customer E-Mail: </Header> {nextQuote.customer}
							</CardContent>
						</Card>
				</TableRow>);
			}
		
			setQuotes(quoteArray);

		}
		fetchQuotes();
	},[])

	return(
		<>
			<Grid>
				<GridColumn width="3">
				</GridColumn>
				<GridColumn width='10' stretched={true}>
				{ quotes.length > 0 ? 
					<><Table>{quotes}</Table></>
					: <Segment textAlign='center'> <Message negative> No Quotes Found </Message> </Segment>}
				</GridColumn>
				<GridColumn width="3">
				</GridColumn>
			</Grid>
		</>
	)
};

export default ViewQuoteComponent;