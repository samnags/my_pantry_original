import $ from 'jquery'

export function signUp(formData) {
  return function(dispatch) {
    $.ajax({
      url: 'http://localhost:3000/users',
      type: 'POST',
      data: JSON.stringify({user: {name: formData.name, email: formData.email, password: formData.password}}),
      contentType:"application/json; charset=utf-8",
      datatype: 'json'
    }).then((response) => {
      localStorage.setItem('token', response.jwt)            
      dispatch({type: 'SIGN_UP', payload: response.user})
    })
  }
}
