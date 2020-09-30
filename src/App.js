import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import QuoteComponent from './Components/QuoteComponents/QuoteComponent';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import QuoteInfoComponent from './Components/QuoteComponents/QuoteInfoComponent';
import DashboardComponent from './Components/Dashboard Component/DashboardComponent';
import QuoteHistoryComponent from './Components/QuoteComponents/QuoteHistoryComponent';
import CreateUserComponent from './Components/UserComponents/CreateUserComponent';
import ViewUserComponent from './Components/UserComponents/ViewUserComponent';
import ViewPoolComponent from './Components/PoolComponent/ViewPoolComponent';
import ViewDealerComponent from './Components/DealerComponents/ViewDealerComponent';
import PoolFormComponent from './Components/PoolComponent/PoolFormComponent';
import DealerFormComponent from './Components/DealerComponents/DealerFormComponent';

function App() {
  return (
    <div>
    	<Router>
			<Redirect to="/home"/>

			<NavBarComponent/>

			<Switch>

				<Route path="/home" render={() => <HomeComponent /> } />
				<Route path="/dashboard" render={() => <DashboardComponent/> } />
				<Route path="/user-form" render={() => <CreateUserComponent/> } />
				<Route path="/dealer-form" render={() => <DealerFormComponent/> } />
				<Route path="/pool-form" render={() => <PoolFormComponent/> } />
				<Route path="/quote-form" render={() => <QuoteComponent/> } />
				<Route path="/review" render={() => <QuoteInfoComponent/> } />
				<Route path="/quotes" render={() => <QuoteHistoryComponent/> } />
				<Route path="/users" render={() => <ViewUserComponent/> } />
				<Route path="/dealers" render={() => <ViewDealerComponent/> } />
				<Route path="/pools" render={() => <ViewPoolComponent/> } />

			</Switch>
		</Router>
    </div>
  );
}

export default App;
