import React, { useContext, useRef } from "react";
import { StyledInfo, StyledBackdrop, StyledClose, StyledContent } from "./styles/ModalStyles";
import { StyledImg } from "../views/styles/AboutStyles";
import RootContext from "../context/context";
import certificate from "../assets/images/certificate.jpg"
import {info} from "../data/therapyinfo";

const Modal = () => {
  const context = useContext(RootContext);
  const modalEl =useRef()
  const { modalOpen, closeModal, modalValue } = context;
  let content= ()=>{
      switch(modalValue){
          case "1":
              return <div>{info}</div>
          case "2":
              return <StyledImg src={certificate} alt="certificate" />
          default:
              return <div>{info}</div>
      }
  }

  return (
    <>
      <StyledBackdrop modalOpen={modalOpen} onClick={closeModal}  />
      <StyledInfo modalOpen={modalOpen} ref={modalEl}>
          <StyledClose onClick={closeModal} />
        <StyledContent>
            {content()}
        </StyledContent>
      </StyledInfo>
    </>
  );
};
export default Modal;
