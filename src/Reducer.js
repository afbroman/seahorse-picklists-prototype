import Actions from './Actions';

export function reducer(state, action) {
  switch(action.type) {
    case Actions.sidebarStateToggled:
      return Object.assign({}, state, {
        sidebar: {show: !state.sidebar.show}
      });
    case Actions.visitDropped:
      return Object.assign({}, state, {
        modal: {
          show: true,
          text: action.text
        }
      });
    case Actions.modalClosed:
      return Object.assign({}, state, {
        modal: {show: false}
      });
    default:
      return state;
  }
}
