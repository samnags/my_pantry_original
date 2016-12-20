
const initialState = { addIngredientForm: false, categories: [], ingredients: []}

export default function ingredientReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_INGREDIENT_FORM':
      return {...state, addIngredientForm: !state.addIngredientForm}
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload }
    default:
      return state
  }
}
