import './App.css';
import NewActionForm from './components/NewActionForm';
import { StateProvider } from './providers/StateProvider';
import withHistoryHandling from './components/withHistoryHandling';
import ActionHistory from './components/ActionHistory';
import UndoRedoButtons from './components/UndoRedoButtons';

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
