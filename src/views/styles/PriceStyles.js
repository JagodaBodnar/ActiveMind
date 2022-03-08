import React from "react";
import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

export const StyledPriceContainer = withReveal(
  styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 50px;
    color: ${({ theme }) => theme.textColor};
    text-align: justify;
  `,
  <Fade bottom />
);

export const StyledPriceDesc = styled.div`
  min-height: 40px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-around;
  margin: 30px 5px;
`;

export const StyledPrice = styled.div`
  min-height: 50px;
  margin: 30px 5px;
  text-align: right;
`;
