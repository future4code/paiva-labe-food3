
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomeHage/HomePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Restaurant from "../pages/Restaurant/Restaurant";
import SearchPage from "../pages/searchPage/SearchPage.js";
import LoginPage from "../pages/loginPage/LoginPage";
import MyCartPage from "../pages/MyCartPage/MyCartPage.js";





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
            </Route>
  
  
          <Route exact path={"/search"}>
            <SearchPage />
          </Route>
  
          <Route exact path={"/restaurant/:idRest"}>
            <Restaurants />
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