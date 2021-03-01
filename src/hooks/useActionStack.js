import { useContext, useEffect, useState } from "react";
import { store } from "../providers/StateProvider";

function useActionStack() {
    const {dispatch, state} = useContext(store);
    const [isUndoAvailable, setUndoAvailable] = useState(false);
    const [isRedoAvailable, setRedoAvailable] = useState(false);

    useEffect(() => {
        state.presentIndex > 0 
            ? setUndoAvailable(true)
            : setUndoAvailable(false);

        state.presentIndex + 1 < state.actionStack.length
            ? setRedoAvailable(true)
            : setRedoAvailable(false)
    }, [state])

    function onAction(action) {
        dispatch({ type: 'setAction', payload: action });
    };

    function onUndo() {
        dispatch({ type: 'undo' });
    };

    function onRedo() {
        dispatch({ type: 'redo' });
    };

    return [state.present, isUndoAvailable, isRedoAvailable, onAction, onUndo, onRedo]
}

export default useActionStack;