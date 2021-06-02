import { Route, Switch } from 'react-router';
import './App.css';
import Auth from './pages/auth';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
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
