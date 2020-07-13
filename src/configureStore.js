import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers'

export default function configureStore(preloadedState) {
	const middleware = [loggerMiddleware, thunkMiddleware];
	const middlewareEnhancer = applyMiddleware(...middleware)

	const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
	const composedEnhancers = compose(...enhancers);

	const store = createStore(rootReducer, preloadedState, composedEnhancers);
	
	return store;
}