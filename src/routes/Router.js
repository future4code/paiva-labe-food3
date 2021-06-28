import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomeHage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/signup"}>
          <SignUpPage />
        </Route>

        <Route exact path={"/Mycart"}>
        <MyCartPage />
        </Route>

        <Route exact path={"/profile"}>
          <ProfilePage />
        </Route>

        <Route exact path={"/search"}>
          <SearchPage />
        </Route>

        <Route exact path={"/restaurant/:idRest"}>
          <Restaurant />
        </Route>

        <Route exact path={"/Profile"}>
          <ProfilePage />
        </Route>

        <Route>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;