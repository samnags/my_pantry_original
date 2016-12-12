
export default function users(state = {}, action) {
  switch(action.type) {
    case 'SIGN_UP':
      return Object.assign({}, state, action.payload);
    case 'LOG_IN':
      return Object.assign({}, state, action.payload);
    case 'LOG_OUT':
      return ;
    default:
      return state;
  }
}
