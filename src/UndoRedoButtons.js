import { useState } from "react";

function UndoRedoButtons(props) {
    const [amount, setAmount] = useState(1);

    function onChange(value) {
      if(!isNaN(value) && Number(value) >= 1 && Number(value) <= 100) {
        setAmount(Number(value));
      }
    }

    return (
      <div>
        <div>
          <input type="number" value={amount} onChange={(e) => onChange(e.target.value)} min={1} max={100}></input>
        </div>
        <button disabled={!props.isUndoAvailable} onClick={() => props.onUndo(amount)}>
          Undo ({amount})
        </button>
        <button disabled={!props.isRedoAvailable} onClick={() => props.onRedo(amount)}>
          Redo ({amount})
        </button>
      </div>
    )
}

export default UndoRedoButtons;