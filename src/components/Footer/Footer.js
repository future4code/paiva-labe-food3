import React from "react";
import { FooterContainer, IconImage } from "./styled";
import { useHistory } from "react-router-dom";
import home from "../../assets/homepage.svg";
import cart from "../../assets/shopping-cart.svg";
import avatar from "../../assets/avatar.svg";
import homeRed from "../../assets/homepageRed.svg";
import cartRed from "../../assets/shopping-cartRed.svg";
import avatarRed from "../../assets/avatarRed.svg";
import {
  goToProfile,
  goToRestaurant,
  goToMyCartPage,
} from "../../routes/coordinator";

const Footer = () => {
  const history = useHistory();

  return (
    <FooterContainer>
      <IconImage
        src={history.location.pathname === "/profile" ? avatarRed : avatar}
        alt="avatar"
        onClick={() => goToProfile(history)}
      />
      <IconImage
        src={history.location.pathname === "/cart" ? cartRed : cart}
        alt="cart"
        onClick={() => goToMyCartPage(history)}
      />
      <IconImage
        src={history.location.pathname === "/restaurant" ? homeRed : home}
        alt="home"
        onClick={() => goToRestaurant(history)}
      />
    </FooterContainer>
  );
};
export default Footer;
