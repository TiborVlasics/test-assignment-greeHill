import './App.css';
import NewActionForm from './NewActionForm';
import { StateProvider } from './providers/StateProvider';
import withHistoryHandling from './withHistoryHandling';

function App() {
  const ActionFormWithHistory = withHistoryHandling(NewActionForm);

  return (
    <div className="App">
      <StateProvider>
        <ActionFormWithHistory></ActionFormWithHistory>
      </StateProvider>
    </div>
  );
}

export default App;
