import React, {createContext, useReducer} from 'react';

const initialState = {
    actionStack: [{ dev: true, qa: true, prod: false }],
    presentIndex: 0,
    present: { dev: true, qa: true, prod: false },
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'setAction':
        return setActionReducer(state, action);
      case 'undo':
        return undoReducer(state, action);
      case 'redo':
        return redoReducer(state, action);
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

function setActionReducer(state, action) {
  const newState = {
    actionStack: [
      ...state.actionStack.slice(0, state.presentIndex + 1),
      action.payload
    ],
    present: action.payload,
    presentIndex: state.presentIndex + 1
  };
  return newState;
}

function undoReducer(state) {
  if(state.presentIndex > 0) {
    return {
      ...state, 
      presentIndex: state.presentIndex - 1, 
      present: state.actionStack[state.presentIndex - 1]
    }
  }
  return state;
}

function redoReducer(state) {
  if(state.actionStack.length - 1 > state.presentIndex) {
    return {
      ...state, 
      presentIndex: state.presentIndex + 1, 
      present: state.actionStack[state.presentIndex + 1]
    }
  }
  return state;
}

export { store, StateProvider }