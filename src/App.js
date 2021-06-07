import Navigation from './components/navigation';
import Routes from './Routes';
import './App.css';
import { ContectProvider } from './context/context';
import { useEffect } from 'react';
import { setUser } from './redux/actions/auth-actions';
import { useDispatch } from 'react-redux';

function App() {
  const distaptch = useDispatch();
  useEffect(() => {
    const userToken = localStorage.getItem('auth_token');
    if (userToken) {
      distaptch(setUser(userToken));
    }
  });
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
