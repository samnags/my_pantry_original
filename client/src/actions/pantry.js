import $ from 'jquery'
import { browserHistory } from 'react-router'

export function addPantry(formData) {
  return function(dispatch) {
    $.ajax({
      url: 'http://localhost:3000/pantries',
      type: 'POST',
      data: JSON.stringify({ pantry: {location: formData.pantryName}}),
      contentType:"application/json; charset=utf-8",
      datatype: 'json',
      headers: {authorization: localStorage.getItem('jwt')}
    }).then((response) => {
      dispatch({type: 'NEW_PANTRY', payload: response.pantry })
      browserHistory.push('/home')
    })
  }
}

export function fetchPantries() {
  return function(dispatch) {
    // dispatch({type: 'CLEAR_CURRENT_PANTRY'})
    // dispatch({type: 'CLEAR_PANTRY_INGREDIENTS'})
    $.ajax({
      url: `http://localhost:3000/pantries/`,
      type: 'GET',
      contentType:"application/json; charset=utf-8",
      datatype: 'json',
      headers: {authorization: localStorage.getItem('jwt')}
    }).then((response) => {
      dispatch({type: 'FETCH_PANTRIES', payload: response })
      // browserHistory.push('/home')
    })
  }
}

export function fetchPantry(id) {
  return function(dispatch) {
    $.ajax({
      url: `http://localhost:3000/pantries/${id}`,
      type: 'GET',
      contentType:"application/json; charset=utf-8",
      datatype: 'json',
      headers: {authorization: localStorage.getItem('jwt')}
    }).then((response) => {
      dispatch({type: 'FETCH_PANTRY', payload: response})
    })
  }
}
