import { combineReducers } from 'redux';
// import PantryReducer from './pantry_reducer'
import SessionReducer from './session_reducer'

const rootReducer = combineReducers({
  session: SessionReducer
});

export default rootReducer