import Navbar from 'components/Navbar';
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Collection from 'vews/Collection';
import Home from 'vews/Home';
import Search from 'vews/Search';

function Content() {
  return (
    <main className="flex-auto">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
      </Switch>
    </main>
  );
}

export default Content
