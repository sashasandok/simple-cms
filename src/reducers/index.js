import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers
import tabs from './tabs-reducers'

export default combineReducers({
  routing: routerReducer,
  tabs,
})
