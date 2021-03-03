import React, {createContext, useReducer} from 'react';

const initialState = {
    actionStack: [{ dev: true, qa: true, prod: false }],
    currentIndex: 0,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'setAction':
        return setAction(state, action);
      case 'undo':
        return undo(state, action.payload);
      case 'redo':
        return redo(state, action.payload);
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

function setAction(state, action) {
  const newState = {
    actionStack: [
      ...state.actionStack.slice(0, state.currentIndex + 1),
      action.payload
    ],
    currentIndex: state.currentIndex + 1
  };
  return newState;
}

function undo(state, payload) {
  if(state.currentIndex > 0) {
    return {
      ...state,
      currentIndex: state.currentIndex - payload >= 0 ? state.currentIndex - payload : 0
    }
  }
  return state;
}

function redo(state, payload) {
  if(state.actionStack.length - 1 > state.currentIndex) {
    return {
      ...state,
      currentIndex: state.currentIndex + payload <= state.actionStack.length - 1 ? state.currentIndex + payload : state.actionStack.length - 1
    }
  }
  return state;
}

export { store, StateProvider }