import React from 'react';
import { Segment, Container, Grid, GridRow, GridColumn, Header } from 'semantic-ui-react';

const FooterComponent = () => {


	const footer = {
		'padding': '5em 0em',
		'position': 'static',
		'bottom': '0',
		'width': '100%'
	}

	return (
		<>
		<Segment textAlign="center" vertical inverted style={footer}>
				<Container>
					<Grid inverted stackable divided>
						<GridRow>
							<GridColumn width="3">
								<Header as="h4" inverted>About</Header>
							</GridColumn>
							<GridColumn width="3">
							<Header as="h4" inverted>About</Header>
							</GridColumn>
							<GridColumn width="7">
							<Header as="h4" inverted>Footer Header</Header>

							</GridColumn>
						</GridRow>
					</Grid>
				</Container>
			</Segment>
		</>
	)
}

export default FooterComponent;