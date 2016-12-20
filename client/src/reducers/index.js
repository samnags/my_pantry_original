import { combineReducers } from 'redux';
import PantryReducer from './pantry_reducer'
import SessionReducer from './session_reducer'
import IngredientReducer from './ingredient_reducer'

const rootReducer = combineReducers({
  session: SessionReducer,
  pantry: PantryReducer,
  ingredient: IngredientReducer
});

export default rootReducer
