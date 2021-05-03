/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FirstItem from "./pages/FirstItem";
import Sidebar from "./layouts/Sidebar";
import Cover from "./components/Cover";

const NavContainer = styled.div`
  background: rgb(29, 30, 44, 0.8);
  ${tw`h-full col-span-1`}
`;
const ContentContainer = styled.div`
  max-width: 1000px;
`;

export default function App() {
  return (
    <Router>
      <Cover>
        <div tw="h-full grid grid-cols-6">
          <NavContainer>
            <Sidebar />
          </NavContainer>
          <ContentContainer tw="h-full col-span-5 w-full mx-auto">
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
          </ContentContainer>
        </div>
      </Cover>
    </Router>
  );
}
