import React, {useContext} from "react";
import dandelion from "../assets/icons/dandelion.png";
import dandelion1 from "../assets/icons/dandelion1.png";
import {navigation} from "../data/navigationLinks";
import {v4 as uuidv4} from "uuid";
import RootContext from "../context/context";
import {
    StyledNavigationContent,
    StyledHamburger,
    StyledSpan,
    StyledList,
    StyledNavigationLinks,
} from "./styles/MobileNavigationStyles";
import {
    StyledContainer,
    StyledCompanyName,
    StyledDandelionImg,
} from "./styles/NavigationStyles";

const MobileNavigation = () => {
    const context = useContext(RootContext);
    const {isMenuOpen, toggleMenu, navbarColor} = context;

    return (
        <StyledNavigationContent>
            <StyledContainer>
                <StyledDandelionImg src={navbarColor ? dandelion : dandelion1} alt="dmuchawiec obrazek"/>
                <StyledCompanyName navbarColor={navbarColor}>
                    Active Mind
                </StyledCompanyName>
            </StyledContainer>
            <StyledHamburger
                onClick={toggleMenu}
                isMenuOpen={isMenuOpen}
                navbarColor={navbarColor}
            >
                <StyledSpan isMenuOpen={isMenuOpen} navbarColor={navbarColor}/>
                <StyledSpan isMenuOpen={isMenuOpen} navbarColor={navbarColor}/>
                <StyledSpan isMenuOpen={isMenuOpen} navbarColor={navbarColor}/>
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
