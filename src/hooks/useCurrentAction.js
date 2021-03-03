import { useEffect, useState } from "react";

function useCurrentAction(state) {
  const [currentAction, setCurrentAction] = useState(state.actionStack[0]);
  
  useEffect(() => {
    const action = state.actionStack
      .slice(0, state.currentIndex + 1)
      .reduce((acc, curr) => {
        ['dev', 'qa', 'prod'].forEach(key => {
          if (curr[key] !== undefined) {
              acc[key] = curr[key]
          }
        })
        return acc;
      }, {})
    setCurrentAction(action)
  }, [state])

  return currentAction;
}

export default useCurrentAction;