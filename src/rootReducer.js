const INITIAL_STATE = {
  url: '',
  header: '',
  footer: '',
};
function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        url: action.url,
        header: action.header,
        footer: action.footer,
      };

    default:
      return state;
  }
}
export default rootReducer;
