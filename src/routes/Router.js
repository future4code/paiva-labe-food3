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
            <Restaurants />
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