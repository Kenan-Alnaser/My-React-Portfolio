import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Videos from "./components/Videos";
import Invalid from "./components/Invalid";

function App() {
  return (
    <Router>
      <Menu />
      <h1 class="glitch">
        <span aria-hidden="true">Kenan Alnaser</span>
        Kenan Alnaser
        <span aria-hidden="true">Kenan Alnaser</span>
      </h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/videos" exact component={Videos} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/404" component={Invalid} />
      </Switch>
    </Router>
  );
}

export default App;
