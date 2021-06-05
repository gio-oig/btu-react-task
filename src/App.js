import Navigation from './components/navigation';
import Routes from './Routes';
import './App.css';
import { ContectProvider } from './context/context';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ContectProvider>
        <Routes />
      </ContectProvider>
    </div>
  );
}

export default App;
