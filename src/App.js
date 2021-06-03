import { Route, Switch } from 'react-router';
import './App.css';
import Auth from './pages/auth';
import Home from './pages/home';
import Navigation from './components/navigation'
import Greeting from './pages/greetingPage'

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

        <Route path="/">
          <Greeting />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
