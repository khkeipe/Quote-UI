import React, { useState } from 'react';
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardMeta, Grid, GridColumn, Message, Segment } from 'semantic-ui-react';
import { getAllQuotes } from '../../remote/quote-service';

const QuoteHistoryComponent = () => {

	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
	
		const fetchQuotes = async () => {

		let quoteArray = [];

		let response = await getAllQuotes();
			for(let quote of response) {
				let nextQuote = {key: quote.id, order: quote.orderNumber, customer: quote.customer, date: quote.reqDate, dealer: quote.dealer};
				quoteArray.push(
					<Card centered fluid>
					<CardHeader as='h2'>
						{nextQuote.order}
					</CardHeader>
					<CardMeta>
						Requested Date: {nextQuote.date}
					</CardMeta>
					<CardContent>
						Dealer: {nextQuote.dealer}
					</CardContent>
				</Card>);
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
				<GridColumn width='10'>
				{ quotes.length > 0 ? 
					<>{quotes}</>
					: <Segment textAlign='center'> <Message negative> No Quotes Found </Message> </Segment>}
				</GridColumn>
				<GridColumn width="3">
				</GridColumn>
			</Grid>
		</>
	)
};

export default QuoteHistoryComponent;