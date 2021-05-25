import {createStore,combineReducers,applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
export default createStore(
    combineReducers(reducers),
    applyMiddleware(thunk,logger)
)