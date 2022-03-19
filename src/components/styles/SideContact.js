import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";
import {FaFacebookSquare} from 'react-icons/fa';

export const StyledSideContactContainer = withReveal(
  styled.div`
    margin-top: 90px;
  `,
  <Fade left />
);

export const StyledSideContactHeader = styled.h3`
  text-transform: uppercase;
`;
export const StyledSideContactCompanyName = styled.h4`
  color: #888;
  font-weight: 400;
`;
export const StyledSideContactAddress = styled.p`
  color: #888;
  font-weight: 300;
`;

export const StyledBottomContactAddress = styled.div`
  margin-top: 30px;
`;
export const StyledMailPhone = styled.span`
  color: #128195;
  margin-left: 3px;
  cursor: pointer;
`;
export const StyledFacebookLogo =styled(FaFacebookSquare)`
  color: #3982E4;
  width: 30px;
  height: 30px;
`