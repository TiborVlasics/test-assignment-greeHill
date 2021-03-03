import { useContext, useEffect, useState } from "react";
import useCurrentAction from "./hooks/useCurrentAction";
import { store } from "./providers/StateProvider";

const withHistoryHandling = WrappedComponent => props => {
  const {dispatch, state} = useContext(store);
  const [isUndoAvailable, setUndoAvailable] = useState(false);
  const [isRedoAvailable, setRedoAvailable] = useState(false);
  const currentAction = useCurrentAction(state);

  useEffect(() => {
    state.presentIndex > 0 
      ? setUndoAvailable(true)
      : setUndoAvailable(false);

    state.presentIndex + 1 < state.actionStack.length
      ? setRedoAvailable(true)
      : setRedoAvailable(false)
  }, [state])

  /**
   * 
   * @param {*} action 
   * 
   * Dispatches only the properties that changed to the action stack
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

  function onUndo() {
      dispatch({ type: 'undo' });
  };

  function onRedo() {
      dispatch({ type: 'redo' });
  };
  
  return <WrappedComponent 
    onAction={onAction}
    onUndo={onUndo}
    onRedo={onRedo}
    isUndoAvailable={isUndoAvailable}
    isRedoAvailable={isRedoAvailable}
    currentAction={currentAction}
    currentIndex={state.presentIndex}
    actionStack={state.actionStack}
  />;
}

export default withHistoryHandling;