import React from "react";
import logo from "../assets/icons/logo3.png";
import { navigation } from "../data/navigationLinks";
import { v4 as uuidv4 } from "uuid";
import {
  StyledNavigationList,
  StyledNavigationLinks,
  StyledLogoContainer,
  StyledLogoName,
  StyledLogoImg,
} from "./styles/NavigationStyles";
import "./styles/navigation.css";

const DesktopNavigation = ({ navbarColor }) => {
  return (
    <>
      <StyledLogoContainer>
        <StyledLogoImg src={logo} alt="Magdalena Musiał" />
        <StyledLogoName navbarColor={navbarColor}>
            Active Mind
        </StyledLogoName>
      </StyledLogoContainer>
      <StyledNavigationList>
        {navigation.categories.map((navItem) => {
          const navItemTransformed =
            navItem.charAt(0).toLowerCase() + navItem.slice(1);
          const itemPath = navItemTransformed.replace(" ", "-");
          return (
            <StyledNavigationLinks
              key={uuidv4()}
              to={`${itemPath}`}
              activeClass="active"
              offset={-80}
              smooth
              spy
              $navbarColor={navbarColor}
            >
              {navItem}
            </StyledNavigationLinks>
          );
        })}
      </StyledNavigationList>
    </>
  );
};

export default DesktopNavigation;
