import React from "react";
import Main from "./components/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import AllProject from "./components/AllProject";
import "antd/dist/antd.css";
import Header from "./components/Header";
import SignPage from "./components/SignPage";
import CreateProject from "./components/CreateProject";
import UserDashboard from "./components/UserDashboard";
import Create from "./components/Create";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={SignPage} />
        <Route exact path="/detail/id" component={DetailPage} />
        <Route exact path="/all" component={AllProject} />
        <Route exact path="/login2" component={CreateProject} />
        <Route exact path="/user" component={UserDashboard} />
        <Route exact path="/create" component={Create} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
