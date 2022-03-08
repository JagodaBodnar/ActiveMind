import React from "react";
import {
  StyledSectionContainer,
  StyledHeaderWrapper,
  StyledHeader,
  StyledUnderline,
} from "./styles/CommonStyles";
import {
  StyledPriceContainer,
  StyledPriceDesc,
  StyledPrice,
} from "./styles/PriceStyles";
import { price } from "../data/price";

const PriceList = () => {
  return (
    <StyledSectionContainer id="cennik">
      <StyledHeaderWrapper>
        <StyledHeader>Cennik</StyledHeader>
        <StyledUnderline></StyledUnderline>
        <StyledPriceContainer>
          <div>
            {price.map((item) => {
              return (
                <StyledPriceDesc key={item.id}>
                  <h4>{item.type}</h4>
                  <h4>{item.subtype}</h4>
                  <h5>{item.desc}</h5>
                </StyledPriceDesc>
              );
            })}
          </div>
          <div>
            {price.map((item) => {
              return (
                <StyledPrice key={item.id}>
                  <h3>{item.price}</h3>
                </StyledPrice>
              );
            })}
          </div>
        </StyledPriceContainer>
      </StyledHeaderWrapper>
    </StyledSectionContainer>
  );
};

export default PriceList;
