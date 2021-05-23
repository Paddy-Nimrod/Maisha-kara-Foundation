import "../src/App.css";
import HeaderComponent from "./components/header/header.component";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home-page/home-page";
import AboutComponent from "./pages/about-page/about-page";
import GivingComponent from "./pages/giving-page/giving-page";
import ActionComponent from "./pages/actions-page/actions-page";
import WorkingComponent from "./pages/works-page/work-page";
import FooterComponent from "./components/footer/footer.component";
import UpperStripComponent from "./components/upper-page-strip/upper-strip.component";


function App() {
  return (
    <div>
      <HeaderComponent />
      <UpperStripComponent />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutComponent />
        </Route>
        <Route path="/giving">
          <GivingComponent />
        </Route>
        <Route path="/work">
          <WorkingComponent />
        </Route>
        <Route path="/actions">
          <ActionComponent />
        </Route>
      </Switch>


      <FooterComponent />
    </div>
  );
}

export default App;
