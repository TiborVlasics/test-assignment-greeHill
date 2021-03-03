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
      {["dev", "qa", "prod"].map(key => {
        return (
          <div key={key}>
            <label htmlFor="{key}">{key}</label>
            <input
              id="{key}"
              type="checkbox"
              checked={action[key]}
              onChange={() => handlechange(key)}
            />
          </div>
      )})}
      <div>
        <button onClick={() => props.onAction(action)}>
          Set Action
        </button>
      </div>
    </div>
  );
}

export default NewActionForm;