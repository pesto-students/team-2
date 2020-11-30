import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

import Game from './components/Game/Game';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'  component = {Home}/>
          <Route path='/game' component = {Game}/>
        </Switch>
      </Router>
    </div>
  );
}
 
export default App;
