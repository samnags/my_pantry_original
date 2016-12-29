
const initialState = { addIngredientForm: false, categories: [], ingredients: []}

export default function ingredientReducer(state = initialState, action) {
  // debugger
  switch (action.type) {
    case 'ADD_INGREDIENT_FORM':
      return {...state, addIngredientForm: !state.addIngredientForm}
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload }
    case 'FETCH_PANTRY_INGREDIENTS':      
      return { ...state, ingredients: action.payload }
    // case 'CLEAR_PANTRY_INGREDIENTS':
    //   return { ...state, ingredients: [] }
    case 'ADD_INGREDIENT':
      return {...state, ingredients: [...state.ingredients, action.payload]}
    default:
      return state
  }
}
