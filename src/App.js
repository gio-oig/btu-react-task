import { Route, Switch } from 'react-router';
import './App.css';
import Auth from './pages/auth';
import Home from './pages/home';
import Navigation from './components/navigation'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
