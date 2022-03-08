import React from "react";
import styled, { keyframes } from "styled-components";
import bodyImg from "../../assets/images/image17.jpeg";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";
import { FaAngleDown } from "react-icons/fa";
import { device } from "../../globalStyles/Device";

export const StyledHomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url(${bodyImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${device.mobileS} {
    background-position: right;
  }
`;
export const StyledSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  @media ${device.mobile} {
    width: 60%;
  }
  @media ${device.tablet} {
    width: 50%;
    flex-direction: row;
  }
  @media ${device.laptop} {
    width: 60%;
  }
  @media ${device.desktop} {
    width: 50%;
  }
`;

export const StyledContainer = withReveal(
  styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.tablet} {
      padding: 20px;
    }
  `,
  <Fade right />
);
export const StyledLogo = styled.img`
  width: 100px;
  margin: 20px 0;
`;
export const StyledCompanyName = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.white};
  font-size: 35px;
  margin-bottom: 10%;
  text-align: center;
  @media ${device.tablet} {
    margin-bottom: 10%;
  }
`;
export const StyledCompanySubName = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.white};
  font-size: 20px;
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;
export const StyledCompanySubInfo = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  font-weight: 500;
  margin-bottom: 10%;
  @media ${device.tablet} {
    font-size: 1.4rem;
    margin-bottom: 50px;
  }
`;
export const bounce = keyframes`
   0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translateY(0);
  }
`;
export const StyledScrollDownButton = styled(FaAngleDown)`
  color: ${({ theme }) => theme.textColor};
  font-size: 20px;
  animation: ${bounce} 2.5s linear infinite;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;
