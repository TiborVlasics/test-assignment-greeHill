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
        return setAction(state, action);
      case 'undo':
        return undo(state, action);
      case 'redo':
        return redo(state, action);
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

function setAction(state, action) {
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

function undo(state) {
  if(state.presentIndex > 0) {
    return {
      ...state, 
      presentIndex: state.presentIndex - 1, 
      present: state.actionStack[state.presentIndex - 1]
    }
  }
  return state;
}

function redo(state) {
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