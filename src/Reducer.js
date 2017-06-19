import Actions from './Actions';

export function reducer(state, action) {
  switch(action.type) {
    case Actions.sidebarStateToggled:
      return Object.assign({}, state, {
        sidebar: {show: !state.sidebar.show}
      });
    default:
      return state;
  }
}
