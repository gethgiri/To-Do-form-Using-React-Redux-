import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import './index.css';

const middleware = applyMiddleware(logger, thunk);

const createStoreWithMiddleware = (createStore(reducers, middleware));

ReactDOM.render(
<Provider store={createStoreWithMiddleware}>
	<App />
</Provider>
, document.getElementById('root'));