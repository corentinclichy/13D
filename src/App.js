import React from "react";
import "./app.css";
import Header from "./Components/header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import FullpageMenu from "./Components/FullpageMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Collection from "./Components/Collection.js";
import Sidebar from "./Components/Sidebar";
import Expo1_EteSuper from "./Components/Expo1_EteSuper";

function App() {
  return (
    <Router>
      <div className="App">
        <FullpageMenu />

        <Header />
        <main>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Content} />
            <Route path="/about" exact component={About} />
            <Route path="/collection" exact component={Collection} />
            <Route
              path="/exhibitions/expo1_etesuper"
              exact
              component={Expo1_EteSuper}
            />
          </Switch>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
