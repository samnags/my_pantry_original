
const initialState = {
  addIngredientForm: false,
  editIngredientForm: false,
  addingIngredient: false,
  editingIngredient: false,
  deletingIngredient: false,
  categories: [],
  ingredients: [],
  measurements: []}

export default function ingredientReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_INGREDIENT_FORM':
      return {...state, addIngredientForm: !state.addIngredientForm}
    case 'EDIT_INGREDIENT_FORM':
      return {...state, editIngredientForm: !state.editIngredientForm}
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload }
    case 'GET_MEASUREMENTS':
      return { ...state, measurements: action.payload }
    case 'FETCH_PANTRY_INGREDIENTS':
      return { ...state, ingredients: action.payload }
    case 'ADD_INGREDIENT':
      return {...state, addingIngredient: !state.addingIngredient}
    case 'EDIT_INGREDIENT':
      return {...state, editingIngredient: !state.editingIngredient, editIngredient: action.payload}
    case 'DELETE_INGREDIENT':
      return {...state, deletingIngredient: !state.deletingIngredient}
    default:
      return state
  }
}
