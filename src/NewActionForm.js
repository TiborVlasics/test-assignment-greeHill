import { useState } from 'react';

function NewActionForm() {
  const [config, setConfig] = useState({ 
    dev: true,
    qa: true,
    prod: false
  });

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
        <button>
          Set Action
        </button>
      </div>
    </div>
  );
}

export default NewActionForm;