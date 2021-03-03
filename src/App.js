import './App.css';
import NewActionForm from './NewActionForm';
import { StateProvider } from './providers/StateProvider';
import withHistoryHandling from './withHistoryHandling';
import ActionHistory from './ActionHistory';

function App() {
  const ActionFormWithHistory = withHistoryHandling(NewActionForm);
  const ActionListWithHistoryHandling = withHistoryHandling(ActionHistory);

  return (
    <div className="App">
      <StateProvider>
        <ActionFormWithHistory></ActionFormWithHistory>
        <ActionListWithHistoryHandling></ActionListWithHistoryHandling>
      </StateProvider>
    </div>
  );
}

export default App;
