import {combineReducers} from 'redux'
import calReducer from './calReducer'
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
  calReducer,
  dataReducer
})

export default rootReducer;