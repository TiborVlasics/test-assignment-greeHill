import { useEffect, useState } from 'react';

function NewActionForm(props) {
  const [action, setAction] = useState(props.currentAction);

  useEffect(() => {
      setAction(props.currentAction)
  }, [props.currentAction])

  const handlechange = function(key) {
    setAction({ ...action, [key]: !action[key] });
  }

  return (
    <div>
      <div>
        <label htmlFor="dev">Dev</label>
        <input
          id="dev"
          type="checkbox"
          checked={action.dev}
          onChange={() => handlechange('dev')}
        />
      </div>
      <div>
        <label htmlFor="qa">QA</label>
        <input
            id="qa"
            type="checkbox"
            checked={action.qa}
            onChange={() => handlechange('qa')}
        />
      </div>
      <div>
        <label htmlFor="prod">Prod</label>
        <input
            id="prod"
            type="checkbox"
            checked={action.prod}
            onChange={() => handlechange('prod')}
        />
      </div>
      <div>
        <button onClick={() => props.onAction(action)}>
          Set Action
        </button>
      </div>
    </div>
  );
}

export default NewActionForm;