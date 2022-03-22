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
    StyledPrice, StyledPriceWrapper,
} from "./styles/PriceStyles";
import {price} from "../data/price";

const PriceList = () => {
    return (
        <StyledSectionContainer id="cennik">
            <StyledHeaderWrapper>
                <StyledHeader>Cennik</StyledHeader>
                <StyledUnderline></StyledUnderline>
                <StyledPriceContainer>
                    {price.map((item) => {
                        return (
                            <StyledPriceWrapper key={item.id}>
                                <StyledPriceDesc>
                                    <h4>{item.type}</h4>
                                    <h4>{item.subtype}</h4>
                                    <h5>{item.desc}</h5>
                                </StyledPriceDesc>
                                <StyledPrice>
                                    <h3>{item.price}</h3>
                                </StyledPrice>
                            </StyledPriceWrapper>
                        );
                    })}
                </StyledPriceContainer>
            </StyledHeaderWrapper>
        </StyledSectionContainer>
    );
};

export default PriceList;
