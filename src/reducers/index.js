import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers
import tabsReducer from './tabs-reducers'

export default combineReducers({
  routing: routerReducer,
  tabsReducer,
})
