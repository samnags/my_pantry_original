
const initialState = {categories: [], ingredients: []}

export default function ingredientReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload }
    default:
      return state
  }
}
