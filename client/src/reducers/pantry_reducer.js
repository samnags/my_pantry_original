
export default function pantries(state = [], action) {
  switch (action.type) {
    case 'NEW_PANTRY':
      return action.payload
    case 'FETCH_PANTRIES':
      return action.payload
    case 'FETCH_PANTRY':
      return action.payload
    default:
      return state;
  }
}
