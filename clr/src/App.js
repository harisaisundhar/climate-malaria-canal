import logo from './logo.svg';
import './App.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Switch, Route } from 'react-router-dom';
import About from './About.js';
import Rain from './Rainfall.js'

function App() {
  return (
    <main>
    <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/rain' component={Rain} />
    </Switch>
    </main>
  );
}

export default App; 
