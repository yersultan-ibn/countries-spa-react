import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Route, } from "react-router-dom";
import { Main } from "./components/Main";

import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <HomePage countries={countries} setCountries={setCountries } />
          </Route>
          <Route path="/country/:name" component={Details} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

export default App;
