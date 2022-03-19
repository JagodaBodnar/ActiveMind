import React, { useContext } from "react";
import logo from "../assets/icons/logo.png";
import { navigation } from "../data/navigationLinks";
import { v4 as uuidv4 } from "uuid";
import RootContext from "../context/context";
import {
  StyledNavigationContent,
  StyledHamburger,
  StyledSpan,
  StyledList,
  StyledNavigationLinks,
} from "./styles/MobileNavigationStyles";
import {
  StyledLogoContainer,
  StyledLogoName,
  StyledLogoImg,
} from "./styles/NavigationStyles";

const MobileNavigation = () => {
  const context = useContext(RootContext);
  const { isMenuOpen, toggleMenu, navbarColor } = context;

  return (
    <StyledNavigationContent>
      <StyledLogoContainer>
        <StyledLogoImg src={logo} alt="Magdalena Musiał" />
        <StyledLogoName navbarColor={navbarColor}>
            Active Mind
        </StyledLogoName>
      </StyledLogoContainer>

      <StyledHamburger
        onClick={toggleMenu}
        isMenuOpen={isMenuOpen}
        navbarColor={navbarColor}
      >
        <StyledSpan isMenuOpen={isMenuOpen} navbarColor={navbarColor} />
        <StyledSpan isMenuOpen={isMenuOpen} navbarColor={navbarColor} />
        <StyledSpan isMenuOpen={isMenuOpen} navbarColor={navbarColor} />
      </StyledHamburger>

      <StyledList isMenuOpen={isMenuOpen}>
        {navigation.categories.map((navItem) => {
          const navItemTransformed =
            navItem.charAt(0).toLowerCase() + navItem.slice(1);
          const itemPath = navItemTransformed.replace(" ", "-");
          return (
            <StyledNavigationLinks
              key={uuidv4()}
              to={`${itemPath}`}
              activeClass="active"
              smooth
              offset={-220}
              spy
            >
              {navItem}
            </StyledNavigationLinks>
          );
        })}
      </StyledList>
    </StyledNavigationContent>
  );
};

export default MobileNavigation;
