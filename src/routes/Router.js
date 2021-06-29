
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignupPage from "../pages/SignupPage/SignupPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Restaurant from "../pages/Restaurant/Restaurant";
import SearchPage from "../pages/SearchPage/SearchPage.js";
// import LoginPage from "../pages/LoginPage/LoginPage";
import MyCartPage from "../pages/MyCartPage/MyCartPage.js";





const Router = () => {
    return (

      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <HomePage />
          </Route>
  
          {/* <Route exact path={"/login"}>
           <LoginPage />
             </Route> */}
  
          <Route exact path={"/signup"}>
            <SignupPage />
          </Route>
  
  
          <Route exact path={"/Mycart"}>
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