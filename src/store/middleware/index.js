import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logging from './logger';
import * as storage from 'redux-storage';

const middleware = [
  thunk,
  logging
];

export default applyMiddleware(...middleware);
