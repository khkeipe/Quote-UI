import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';
import { rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(preloadedState) {
	const middleware = [loggerMiddleware, thunkMiddleware];
	const middlewareEnhancer = applyMiddleware(...middleware)

	const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancers);

	const store = createStore(rootReducer, preloadedState, composedEnhancers);
	
	return store;
}