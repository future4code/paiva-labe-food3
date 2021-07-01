export const goToHomePage = (history) => {
    history.push("/");
};

export const goToSignUpPage = (history) => {
    history.push("/signup");
};

export const goToLoginPage = (history) => {
    history.push("/login");
};

export const goToMyCartPage = (history) => {
    history.push("/cart");
};

export const goToProfile = (history) => {
    history.push("/profile");
};

export const goToSearch = (history) => {
    history.push("/search");
};

export const goToEditAddress = (history) => {
    history.push("/edit-address");
};

export const goToEditProfile = (history) => {
    history.push("/edit-profile");
};

export const goToRestaurant = (history, idRest) => {
    history.push(`/restaurant`);
};


export const goToAddressPage = (history) => {
    history.push('/endereco');
  };


export const goToLastPage = (history) => {
    history.goBack();
};