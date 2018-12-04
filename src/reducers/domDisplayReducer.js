import constants from './../constants';
const { types, initialState } = constants;

const domDisplayReducer = (state = initialState.domDisplay, action) => {
  switch (action.type) {
  case types.SHOW_RECIPES:
    const newDisplayState = Object.assign({}, state, {
      listVisibleOnPage: true
    });
    return newDisplayState;
  default:
    return state;
  }
};

export default domDisplayReducer;
