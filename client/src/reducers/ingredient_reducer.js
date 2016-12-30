
const initialState = { addIngredientForm: false, addingIngredient: false, categories: [], ingredients: [], measurements: []}

export default function ingredientReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_INGREDIENT_FORM':
      return {...state, addIngredientForm: !state.addIngredientForm}
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload }
    case 'GET_MEASUREMENTS':
      return { ...state, measurements: action.payload }
    case 'FETCH_PANTRY_INGREDIENTS':
      return { ...state, ingredients: action.payload }
    case 'ADDING_INGREDIENT':
      return { ...state, addingIngredient: !state.addingIngredient}
    // case 'CLEAR_PANTRY_INGREDIENTS':
    //   return { ...state, ingredients: [] }
    case 'ADD_INGREDIENT':
      return {...state, addingIngredient: !state.addingIngredient}
    default:
      return state
  }
}

// return {...state, addingIngredient: !!addingIngredient, ingredients: [...state.ingredients, action.payload]}
