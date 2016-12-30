import $ from 'jquery'
// import { browserHistory } from 'react-router'

export function addIngredient(formData) {  
  return function(dispatch) {
    $.ajax({
      url: 'http://localhost:3000/pantryingredients',
      type: 'POST',
      data: JSON.stringify({currentPantry: formData.currentPantry, quantity: formData.quantity, measurement: formData.measurement, ingredient: formData.ingredient, category: formData.category}),
      contentType:"application/json; charset=utf-8",
      datatype: 'json',
      headers: {authorization: localStorage.getItem('jwt')}
    }).then((response) => {
      dispatch({type: 'ADD_INGREDIENT', payload: response})
    })
  }
}

export function getCategories() {
  return function(dispatch) {
    $.ajax({
      url: 'http://localhost:3000/categories',
      type: 'GET',
      contentType:"application/json; charset=utf-8",
      datatype: 'json',
      headers: {authorization: localStorage.getItem('jwt')}
    }).then((response) => {
      dispatch({type: 'GET_CATEGORIES', payload: response.categories })
    })
  }
}

export function getMeasurements() {
  return function(dispatch) {
    $.ajax({
      url: 'http://localhost:3000/measurements',
      type: 'GET',
      contentType:"application/json; charset=utf-8",
      datatype: 'json',
      headers: {authorization: localStorage.getItem('jwt')}
    }).then((response) => {
      dispatch({type: 'GET_MEASUREMENTS', payload: response.measurements })
    })
  }
}


export function toggleIngredientForm() {
  return function(dispatch) {
    dispatch({type: 'ADD_INGREDIENT_FORM'})
  }
}

export function fetchPantryIngredients(id) {
  return function(dispatch) {
    $.ajax({
      url: `http://localhost:3000/pantries/${id}/ingredients`,
      type: 'GET',
      contentType:"application/json; charset=utf-8",
      datatype: 'json',
      headers: {authorization: localStorage.getItem('jwt')}
    }).then((response) => {
      dispatch({type: 'FETCH_PANTRY_INGREDIENTS', payload: response})
    })
  }
}
