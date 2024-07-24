import {compose, legacy_createStore, applyMiddleware} from 'redux';
import createMiddleware from 'redux-saga';
import reducers from './reducers';
import middleware from './saga';

const middlewareStore = createMiddleware();
const store = legacy_createStore(reducers, compose(applyMiddleware(middlewareStore)));
middlewareStore.run(middleware);
export default store;