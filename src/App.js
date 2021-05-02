import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FirstItem from "./pages/FirstItem";
import Sidebar from "./layouts/Sidebar";
import Cover from "./components/Cover";

export default function App() {
  return (
    <Router>
      <Cover>
        <Sidebar />
        <Switch>
          <Route path="/item1">
            <FirstItem />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*" exact>
            <h1>404</h1>
          </Route>
        </Switch>
      </Cover>
    </Router>
  );
}
