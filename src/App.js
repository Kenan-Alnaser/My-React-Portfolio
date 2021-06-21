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
      <div id="image">
        <Menu />
        <div id="top">
          <div id="sky"></div>
        </div>
        <div id="bottom">
          <div id="ground"></div>
        </div>
        <h1 className="glitch">
          <span aria-hidden="true">Kenan Alnaser</span>
          Kenan Alnaser
          <span aria-hidden="true">Kenan Alnaser</span>
        </h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/contact" exact component={Contact} />
          <Route path={() => "404" || "admin" || "any-other-word"}>
            <Invalid />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
