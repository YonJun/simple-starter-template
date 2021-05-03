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
  ${tw`h-full col-span-1 `}
`;
const ContentContainer = styled.div`
  max-width: 1100px;
`;

export default function App() {
  return (
    <Router>
      <Cover>
        <div tw="grid grid-cols-6">
          <NavContainer>
            <Sidebar />
          </NavContainer>
          <div tw="col-span-5 w-full overflow-auto">
            <ContentContainer tw=" h-screen w-full mx-auto relative">
              <div tw="absolute top-0 right-0 bg-primary p-1 rounded-b-lg">
                <a href="/#" tw="inline-block py-2 px-8">
                  <img
                    alt="twitter"
                    height="auto"
                    width="100%"
                    src="/assets/images/twitter.svg"
                  />
                </a>
                <a href="/#" tw="inline-block py-2 px-8">
                  <img
                    alt="facebook"
                    height="auto"
                    width="100%"
                    src="/assets/images/facebook.svg"
                  />
                </a>
              </div>
              <div tw="pt-40 pb-10">
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
            </ContentContainer>
          </div>
        </div>
      </Cover>
    </Router>
  );
}
