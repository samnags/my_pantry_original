// import {browserHistory} from 'react-router';

export default function users(state = !!localStorage.jwt, action) {
  switch(action.type) {
    case 'SIGN_UP':
      return Object.assign({}, state, action.payload);
    case 'LOG_IN':            
      return !!localStorage.jwt;
    case 'LOG_OUT':
      return !!sessionStorage.jwt;
    default:
      return state;
  }
}
