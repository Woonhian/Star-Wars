import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import People from "./components/People";
import AllPeople from "./components/AllPeople";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/people">
          <AllPeople />
        </Route>
        <Route path="/people/:id">
          <People />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
