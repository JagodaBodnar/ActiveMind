import React from "react";
import {
  StyledIconsContainer,
  StyledIconsWrapper,
  StyledOfferIcon,
  StyledShowDetails,
  StyledDetailsParagraph,
} from "./styles/HelpStyles";
import {
  StyledSectionContainer,
  StyledHeaderWrapper,
  StyledHeader,
  StyledUnderline,
} from "./styles/CommonStyles";
import { v4 as uuidv4 } from "uuid";
import { help } from "../data/help";

const Help = () => {
  return (
    <StyledSectionContainer id="terapia">
      <StyledHeaderWrapper>
        <StyledHeader>W czym pomagam?</StyledHeader>
        <StyledUnderline></StyledUnderline>
      </StyledHeaderWrapper>
      <StyledIconsContainer>
        {help.map((offer) => {
          const { id, img, description } = offer;
          return (
            <StyledIconsWrapper key={id}>
              <StyledOfferIcon id={id} src={img} />
              <StyledShowDetails key={id}>
                {description.map((item) => {
                  return (
                    <StyledDetailsParagraph key={uuidv4()}>
                      {item}
                    </StyledDetailsParagraph>
                  );
                })}
              </StyledShowDetails>
            </StyledIconsWrapper>
          );
        })}
      </StyledIconsContainer>
    </StyledSectionContainer>
  );
};

export default Help;
