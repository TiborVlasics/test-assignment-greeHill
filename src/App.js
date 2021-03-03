import './App.css';
import NewActionForm from './NewActionForm';
import { StateProvider } from './providers/StateProvider';
import withHistoryHandling from './withHistoryHandling';
import ActionHistory from './ActionHistory';
import UndoRedoButtons from './UndoRedoButtons';

function App() {
  const ActionFormWithHistory = withHistoryHandling(NewActionForm);
  const ActionListWithHistory = withHistoryHandling(ActionHistory);
  const UndoRedoButtonsWithHistory = withHistoryHandling(UndoRedoButtons);

  return (
    <div className="App">
      <StateProvider>
        <ActionFormWithHistory></ActionFormWithHistory>
        <UndoRedoButtonsWithHistory></UndoRedoButtonsWithHistory>
        <ActionListWithHistory></ActionListWithHistory>
      </StateProvider>
    </div>
  );
}

export default App;
