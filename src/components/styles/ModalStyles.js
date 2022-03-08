import styled from "styled-components";
import {GrClose} from "react-icons/gr";

export const StyledInfo = styled.div`
  display: ${({modalOpen}) => (modalOpen ? "flex" : "none")};
  position: fixed;
  top: 20%;
  z-index: 99999;
  color: black;
  background-color: #FFF;
  padding: 50px;
  width: 50%;
  height: 500px;
  flex-direction: column;
  border: 5px solid #555;
`;

export const StyledBackdrop = styled.div`
  display: ${({modalOpen}) => (modalOpen ? "block" : "none")};
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
`;

export const StyledClose = styled(GrClose)`
  cursor: pointer;
  margin-bottom: 20px;
  align-self: flex-end;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const StyledContent = styled.div`
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
    height: 300px;
    width: 65px;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #555;
  }
`
