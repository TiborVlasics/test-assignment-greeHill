import { useEffect, useState } from "react";

function useCurrentAction(state) {
  const [currentAction, setCurrentAction] = useState(state.present);
  
  useEffect(() => {
    const action = state.actionStack
      .slice(0, state.presentIndex + 1)
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