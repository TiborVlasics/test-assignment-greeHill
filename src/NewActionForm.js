import { useEffect, useState } from 'react';
import useActionStack from './hooks/useActionStack';

function NewActionForm() {
  const [config, setConfig] = useState({ 
    dev: false,
    qa: false,
    prod: false
  });
  const [present, isUndoAvailable, isRedoAvailable, onAction, onUndo, onRedo] = useActionStack();

  useEffect(() => {
      setConfig(present)
  }, [present])

  const handlechange = function(key) {
    setConfig({ ...config, [key]: !config[key] });
  }

  return (
    <div className="App">
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
        <button onClick={() => onAction(config)}>
          Set Action
        </button>
      </div>
      <div>
        <button disabled={!isUndoAvailable} onClick={() => onUndo()}>
          Undo
        </button>
        <button disabled={!isRedoAvailable} onClick={() => onRedo()}>
          redo
        </button>
      </div>
    </div>
  );
}

export default NewActionForm;