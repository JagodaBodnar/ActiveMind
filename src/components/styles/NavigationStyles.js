import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-scroll";

export const StyledNavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  background-color: ${({ navbarColor, theme }) =>
    navbarColor ? theme.white : "transparent"};
  width: 100%;
  z-index: 9999;
`;
export const StyledNavigationList = styled.ul`
  margin-right: 5%;
`;

export const StyledLogoContainer = styled.div`
  margin-left: 5%;
  display: flex;
  align-items: center;
`;

export const StyledLogoImg = styled.img`
  width: 70px;
`;
export const StyledLogoName = styled.h3`
  color: ${({ navbarColor, theme }) =>
    navbarColor ? theme.textColor : theme.white};
  font-weight: 300;
`;
export const StyledNavigationLinks = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ $navbarColor, theme }) =>
    $navbarColor ? theme.textColor : theme.white};
  margin-right: 20px;
  font-size: 18px;
  &:hover {
    color: ${({ navbar, theme }) =>
      navbar ? theme.mainBlue : theme.textColor};
  }
`;
export const StyledButton = styled(Link)`
  position: fixed;
  top: 90%;
  right: 3%;
  transition: 0.7s;
  visibility: hidden;
  background-color: ${({ theme }) => theme.mainBlue};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.textColor};
  }
`;
export const StyledToTopIcon = styled(FaAngleUp)`
  font-size: 15px;
  color: ${({ theme }) => theme.white};
`;
