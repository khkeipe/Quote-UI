import React, { useState } from 'react';
import { useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import { getAllQuotes } from '../../remote/quote-service';

const QuoteHistoryComponent = () => {

	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
	
		const fetchQuotes = async () => {

		let quoteArray = [];

		let response = await getAllQuotes();
			for(let quote of response) {
				quoteArray.push(
				<div>
					<Segment>
						{quote}
					</Segment>
				</div>);
			}
		
			setQuotes(quoteArray);

		}
		fetchQuotes();
	},[])

	return(
		<>
		
		{quotes}

		</>
	)
};

export default QuoteHistoryComponent;