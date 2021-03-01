import './App.css';
import NewActionForm from './NewActionForm';
import { StateProvider } from './providers/StateProvider';

function App() {
  return (
    <div className="App">
      <StateProvider>
        <NewActionForm></NewActionForm>
      </StateProvider>
    </div>
  );
}

export default App;
