import React from 'react';
import './sass/_base.scss'

import { Switch, Route} from 'react-router-dom'

//components
import Home from './components/Home/Home'
import PlayHere from './components/PlayHere/PlayHere'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/play" exact component={PlayHere} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
