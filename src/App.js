import React from 'react';
import './sass/_base.scss'

import { Switch, Route} from 'react-router-dom'

//components
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import PlayHere from './components/PlayHere/PlayHere'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/play" exact component={PlayHere} />
      </Switch>
    </div>
  );
}

export default App;
