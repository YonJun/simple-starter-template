import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FirstItem from "./pages/FirstItem";
import Sidebar from "./layouts/Sidebar";

export default function App() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
}
