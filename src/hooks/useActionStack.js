import { useContext } from "react";
import { store } from "../providers/StateProvider";

function useActionStack() {
    const {dispatch, state} = useContext(store);

    function onAction(action) {
        dispatch({ type: 'setAction', payload: action });
    };

    function onUndo() {
        //TODO
        console.log('undoing');
    };

    function onRedo() {
        //TODO
        console.log('redoing')
    };

    return [state.present, onAction, onUndo, onRedo]
}

export default useActionStack;