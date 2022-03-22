import React from "react";
import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

export const StyledPriceContainer = withReveal(
  styled.div`
    grid-column-gap: 200px;
    color: ${({ theme }) => theme.textColor};
  `,
  <Fade bottom />
);

export const StyledPriceWrapper =styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
 
`
export const StyledPriceDesc = styled.div`
  min-height: 40px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px 5px;
`;

export const StyledPrice = styled.div`
  min-height: 50px;
  margin: 30px 5px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
