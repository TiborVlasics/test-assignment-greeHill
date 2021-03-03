import { useEffect, useState } from 'react';

function NewActionForm(props) {
  const [config, setConfig] = useState({ 
    dev: false,
    qa: false,
    prod: false
  });

  useEffect(() => {
      setConfig(props.currentAction)
  }, [props.currentAction])

  const handlechange = function(key) {
    setConfig({ ...config, [key]: !config[key] });
  }

  return (
    <div>
      <div>
        <label htmlFor="dev">Dev</label>
        <input
          id="dev"
          type="checkbox"
          checked={config.dev}
          onChange={() => handlechange('dev')}
        />
      </div>
      <div>
        <label htmlFor="qa">QA</label>
        <input
            id="qa"
            type="checkbox"
            checked={config.qa}
            onChange={() => handlechange('qa')}
        />
      </div>
      <div>
        <label htmlFor="prod">Prod</label>
        <input
            id="prod"
            type="checkbox"
            checked={config.prod}
            onChange={() => handlechange('prod')}
        />
      </div>
      <div>
        <button onClick={() => props.onAction(config)}>
          Set Action
        </button>
      </div>
      <div>
        <button disabled={!props.isUndoAvailable} onClick={() => props.onUndo()}>
          Undo
        </button>
        <button disabled={!props.isRedoAvailable} onClick={() => props.onRedo()}>
          redo
        </button>
      </div>
    </div>
  );
}

export default NewActionForm;