import React from "react";
import {
  StyledSectionContainer,
  StyledSectionWrapper,
  StyledHeaderWrapper,
} from "./styles/AboutStyles";
import { StyledHeader } from "./styles/CommonStyles";
import Review from "../components/Review";

const About = () => {
  return (
    <StyledSectionWrapper>
      <StyledSectionContainer id="opinie">
        <StyledHeaderWrapper>
          <StyledHeader>Opinie moich klientów</StyledHeader>
        </StyledHeaderWrapper>
        <Review />
      </StyledSectionContainer>
    </StyledSectionWrapper>
  );
};

export default About;
