import React from "react";
import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";
import {device} from "../../globalStyles/Device";

export const StyledSectionWrapper = styled.div`
  background-color: ${({theme}) => theme.sectionDarkBackground};
  margin: 100px auto;
`;
export const StyledSectionContainer = styled.div`
  min-height: 250px;
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  text-align: center;
`;
export const StyledAboutUs = withReveal(
    styled.div`
      width: 80%;
      margin: 10px auto 40px auto;
      color: ${({theme}) => theme.textColor};
      text-align: justify;
    `,
    <Fade bottom/>
);
export const StyledLink = styled.a`
  color: ${({theme}) => theme.mainBlue};
  cursor: pointer;
`;
export const StyledAboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
  };
`
export const StyledImg = styled.img`
  width: 400px;
  height: auto;
  margin-bottom: 20px;
`