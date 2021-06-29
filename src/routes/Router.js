import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage'
import MenuPage from '../pages/MenuPage/MenuPage'
import SignUpPage from '../pages/SignupPage/SignupPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import SearchPage from '../pages/SearchPage/SearchPage'
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage';
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage'

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
          <Route exact path={"/:restaurant"}>
            <RestaurantPage />
          </Route>
  
          <Route exact path={"/signup"}>
            <SignUpPage />
          </Route>
  
          <Route exact path={"/addAddress"}>
            
          </Route>
  
          <Route exact path={"/cart"}>
            
          </Route>
  
          <Route exact path={"/profile"}>
            <ProfilePage />
          </Route>
  
          <Route exact path={"/search"}>
            <SearchPage />
          </Route>
  
          <Route exact path={"/editAddressPage"}>
            
          </Route>
  
          <Route exact path={"/restaurant/:idRest"}>
            <MenuPage />
          </Route>
  
          <Route exact path={"/editProfile"}>
            <EditProfilePage />
          </Route>
  
          <Route>
            <div>Página não encontrada</div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;