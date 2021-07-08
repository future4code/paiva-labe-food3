import React from "react";
import { Radio, withStyles } from "@material-ui/core";
import styled from "styled-components";
import {
  secondaryColor,
  neutralColor,
  primaryColor,
} from "../../constants/colors";

export const ContainerMyCart = styled.main`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerHeader = styled.header`
  width: 100%;
`;

export const HeaderCart = styled.div`
padding-top: 0.8rem;
  text-align: center;
  height: 44px;
`;

export const AdressCard = styled.div`
  border-top: 1px solid ${secondaryColor};
  background-color: #eeeeee;
  padding: 1rem 0 1rem 1rem;
`;

export const AdressLabel = styled.p`
  color: ${secondaryColor};
  margin: 0.5rem 0;
`;

export const Adress = styled.p`
  font-weight: 600;
  margin: 0.5rem 0;
`;

export const ContainerScroll = styled.div`
  overflow-y: auto;
  width: 100%;
`;

export const ContainerOrder = styled.div`
  margin-top: 8px;
  width: 100%;
`;

export const RestaurantAdress = styled.div`
  margin-bottom: 8px;
  padding: 0 16px;
  p {
    color: ${secondaryColor};
  }
`;

export const LabelRestaurantName = styled.span`
  color: ${primaryColor};
`;

export const CardItem = styled.div`
  height: 112px;
  background-color: black;
  margin-bottom: 8px;
  margin: 0 auto;
`;

export const ContainerPayment = styled.form`
display: flex;
margin: 0 auto;
flex-direction: column;
  width: 80%;
  padding: 16px;
`;

export const ContainerValues = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SubTotal = styled.div`
  margin-top: 13px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TotalValue = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${primaryColor};
`;

export const PaymentType = styled.div`
  margin-top: 25px;
`;

export const PaymentTypeTitle = styled.p`
  margin-bottom: 3px;
`;

export const ConfirmButton = styled.button`
  color: black;
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  background-color: ${primaryColor};
  margin-top: 5rem;
  height: 42px;
  :disabled {
    background-color: rgba(232, 34, 46, 0.5);
  }
`;

export const RadioBlack = withStyles({
  root: {
    color: neutralColor,
    "&$checked": {
      color: neutralColor,
    },
  },
  checked: {},
})((props) => <Radio required color="default" {...props} />);
