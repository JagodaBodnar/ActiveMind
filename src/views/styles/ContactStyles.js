import styled, {keyframes} from "styled-components";
import { device } from "../../globalStyles/Device";

export const StyledIntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  @media ${device.laptop} {
    width: 50%;
  }
`;
export const StyledContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const StyledCompanyAddressWrapper = styled.div`
  flex: 1;
  padding-left: 10px;
`;

export const StyledFormWrapper = styled.div`
  flex: 2;
`;
export const StyledSendInformation = styled.div`
  width: 60%;
  min-height: 30px;
  margin: 20px auto;
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.green};
  position: relative;
`;
export const StyledCheckMarkDraw = styled.svg`
  width: 100px;
  display: block;
  margin: 10px auto 0;
`
const dash = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
  `
export const StyledCircle = styled.circle`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  animation: ${dash} .9s ease-in-out;
`
const dashCheck = keyframes`
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  `
export const StyledPolyline = styled.polyline`
  stroke-dasharray: 1000;
  stroke-dashoffset: -100;
  animation: ${dashCheck} .9s .35s ease-in-out forwards;
 
`
