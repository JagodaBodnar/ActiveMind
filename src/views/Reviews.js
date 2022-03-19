import React from "react";
import {
    StyledSectionContainer,
    StyledSectionWrapper,
    StyledHeaderWrapper,
    StyledLink
} from "./styles/AboutStyles";
import {StyledHeader} from "./styles/CommonStyles";
import Review from "../components/Review";


const About = () => {
    return (
        <StyledSectionWrapper>
            <StyledSectionContainer id="opinie">
                <StyledHeaderWrapper>
                    <StyledHeader>Opinie moich klientów</StyledHeader>
                </StyledHeaderWrapper>
                <Review/>
                <StyledLink href="https://www.znanylekarz.pl/magdalena-musial-2/psychoterapeuta/wroclaw"
                            target="_blank">Zobacz wszystkie opinie na znanylekarz.pl</StyledLink>
            </StyledSectionContainer>
        </StyledSectionWrapper>
    );
};

export default About;
