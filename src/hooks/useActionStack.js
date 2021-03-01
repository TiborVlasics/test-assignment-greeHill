import { useContext } from "react";
import { store } from "../providers/StateProvider";

function useActionStack() {
    const {dispatch, state} = useContext(store);

    function onAction(action) {
        dispatch({ type: 'setAction', payload: action });
    };

    function onUndo() {
        dispatch({ type: 'undo' });
    };

    function onRedo() {
        dispatch({ type: 'redo' });
    };

    return [state.present, onAction, onUndo, onRedo]
}

export default useActionStack;