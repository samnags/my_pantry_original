import { combineReducers } from 'redux';
// import PantryReducer from './pantry_reducer'
import UserReducer from './user_reducer'

const rootReducer = combineReducers({
  user: UserReducer
});

export default rootReducer
