import React, { useContext, useRef } from "react";
import { StyledInfo, StyledBackdrop, StyledClose, StyledContent } from "./styles/ModalStyles";
import RootContext from "../context/context";
import {info} from "../data/therapyinfo";
import Certificates from "./Certificates";

const Modal = () => {
  const context = useContext(RootContext);
  const modalEl =useRef()
  const { modalOpen, closeModal, modalValue } = context;
  let content= ()=>{
      switch(modalValue){
          case "1":
              return <div>{info}</div>
          case "2":
              return <Certificates />
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
