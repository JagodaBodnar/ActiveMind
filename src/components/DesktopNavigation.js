import React from "react";
import dandelion from "../assets/icons/dandelion.png";
import dandelion1 from "../assets/icons/dandelion1.png";
import {navigation} from "../data/navigationLinks";
import {v4 as uuidv4} from "uuid";
import {
    StyledNavigationList,
    StyledNavigationLinks,
    StyledContainer,
    StyledCompanyName,
    StyledDandelionImg,
} from "./styles/NavigationStyles";
import "./styles/navigation.css";

const DesktopNavigation = ({navbarColor}) => {
    return (
        <>
            <StyledContainer>
                <StyledDandelionImg src={navbarColor ? dandelion : dandelion1} alt="dmuchawiec obrazek"/>
                <StyledCompanyName navbarColor={navbarColor}>
                    Active Mind
                </StyledCompanyName>
            </StyledContainer>
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
