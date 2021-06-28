import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignupPage/SignupPage"



const Router = () => {
    return (
      <BrowserRouterter>
        <Switchitch>
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