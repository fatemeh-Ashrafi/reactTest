import './App.css';
import ContextProvider from './Context/provider';
import Home from './Views/home';

function App() {

  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

export default App;
