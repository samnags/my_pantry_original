
const initialState = {pantries: [], currentPantry: []}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'NEW_PANTRY':
      return action.payload
    case 'FETCH_PANTRIES':
      return { ...state, pantries: action.payload }
    case 'FETCH_PANTRY':      
      return { ...state, currentPantry: action.payload }
    case 'CLEAR_CURRENT_PANTRY':
      return { ...state, currentPantry: [] }
    case 'LOG_OUT':
      return initialState
    default:
      return state;
  }
}
