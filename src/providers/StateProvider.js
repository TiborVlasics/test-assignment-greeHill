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
        const newState = { 
          actionStack: [
            ...state.actionStack.slice(state.presentIndex), 
            action.payload
          ], 
          present: action.payload,
          presentIndex: state.presentIndex + 1
        };
        return newState;
      case 'undo':
        //TODO
        break;
      case 'redo':
        //TODO
        break;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }