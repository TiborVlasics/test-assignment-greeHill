import { useContext, useEffect, useState } from "react";
import useCurrentAction from "./hooks/useCurrentAction";
import { store } from "./providers/StateProvider";

const withHistoryHandling = WrappedComponent => props => {
  const {dispatch, state} = useContext(store);
  const [isUndoAvailable, setUndoAvailable] = useState(false);
  const [isRedoAvailable, setRedoAvailable] = useState(false);
  const currentAction = useCurrentAction(state);

  useEffect(() => {
    state.currentIndex > 0 
      ? setUndoAvailable(true)
      : setUndoAvailable(false);

    state.currentIndex + 1 < state.actionStack.length
      ? setRedoAvailable(true)
      : setRedoAvailable(false)
  }, [state])

  /**
   * 
   * @param {*} action 
   * 
   * Dispatches the changed properties, to the action stack
   */
  function onAction(action) {
    const newAction = ['dev', 'qa', 'prod'].reduce((acc, key) => {
      if(action[key] !== currentAction[key]) {
          return {...acc, [key]: action[key] }
      }
      return acc;
    }, {});

    if(Object.keys(newAction).length === 0) {
      return;
    }

    dispatch({ type: 'setAction', payload: newAction });
  };

  function onUndo(amount) {
    if(isUndoAvailable) {
      dispatch({ type: 'undo', payload: amount });
    }
  };

  function onRedo(amount) {
    if(isRedoAvailable) {
      dispatch({ type: 'redo', payload: amount });
    }
  };
  
  return <WrappedComponent 
    onAction={onAction}
    onUndo={onUndo}
    onRedo={onRedo}
    isUndoAvailable={isUndoAvailable}
    isRedoAvailable={isRedoAvailable}
    currentAction={currentAction}
    currentIndex={state.currentIndex}
    actionStack={state.actionStack}
  />;
}

export default withHistoryHandling;