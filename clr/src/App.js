import logo from './logo.svg';
import './App.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Switch, Route } from 'react-router-dom';
import About from './About.js';
import Rain from './Rainfall.js'
import Materials from './Materials.js'
import Outcomes from './Outcomes.js'
import References from './References.js'

function App() {
  return (
    <main>
    <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/rain' component={Rain} />
        <Route exact path='/materials' component={Materials} />
        <Route exact path='/references' component={References} />
        <Route exact path='/outcomes' component={Outcomes} />
    </Switch>
    </main>
  );
}

export default App; 
