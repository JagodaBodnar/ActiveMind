import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";
import {FaFacebookSquare} from 'react-icons/fa';
import {IoLocationSharp} from 'react-icons/io5'

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
  color: ${({theme})=>theme.secondaryTextColor};
  font-weight: 400;
`;
export const StyledSideContactAddress = styled.p`
  color: ${({theme})=>theme.secondaryTextColor};
  font-weight: 300;
`;

export const StyledBottomContactAddress = styled.div`
  margin-top: 30px;
`;
export const StyledMailPhone = styled.span`
  color: ${({theme})=>theme.mainBlue};
  margin-left: 3px;
  cursor: pointer;
`;
export const StyledFacebookLogo =styled(FaFacebookSquare)`
  color: ${({theme})=>theme.blueIcon};
  width: 30px;
  height: 30px;
`
export const StyledLocationLogo =styled(IoLocationSharp)`
  color: ${({theme})=>theme.redIcon};
  width: 30px;
  height: 30px;
`