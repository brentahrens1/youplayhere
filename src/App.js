import React from 'react';
import './sass/_base.scss'

import { Switch, Route} from 'react-router-dom'

//components
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import AboutYouPlayHere from './components/AboutYouPlayHere/AboutYouPlayHere'
import Protagonist from './components/Protagonist/Protagonist'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-you-play-here" exact component={AboutYouPlayHere} />
        <Route path="/protagonist" exact component={Protagonist} />
      </Switch>
    </div>
  );
}

export default App;
