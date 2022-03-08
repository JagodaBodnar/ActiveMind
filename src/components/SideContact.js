import React from "react";
import {
  StyledSideContactContainer,
  StyledSideContactHeader,
  StyledSideContactAddress,
  StyledBottomContactAddress,
  StyledMailPhone,
  StyledSideContactCompanyName,
  StyledFacebookLogo
} from "./styles/SideContact";

import {Link} from "react-router-dom";


const SideContact = () => {
  return (
    <>
      <StyledSideContactContainer>
        <StyledSideContactHeader>Dane kontaktowe</StyledSideContactHeader>
        <div>
          <StyledSideContactCompanyName>
            Active Mind Psychoterapia CBT Magdalena Musiał
          </StyledSideContactCompanyName>
          <StyledSideContactAddress>
            ul. Żwirki i Wigury 10 m 13
          </StyledSideContactAddress>
          <StyledSideContactAddress>
            54-621 Wrocław, Muchobór Wielki
          </StyledSideContactAddress>
        </div>
        <StyledBottomContactAddress>
          <StyledSideContactAddress>
            e-mail:
            <StyledMailPhone>terapeuta.musial@gmail.com</StyledMailPhone>
          </StyledSideContactAddress>
          <StyledSideContactAddress>
            tel. <StyledMailPhone>+48 570 030 700</StyledMailPhone>
          </StyledSideContactAddress>
        </StyledBottomContactAddress>
        <StyledSideContactAddress>
        <a href="https://www.facebook.com/Active-Mind-Psychoterapia-CBT-Magdalena-Musia%C5%82-703300393425454" rel="noopener" target="_blank" ><StyledFacebookLogo /></a>
        </StyledSideContactAddress>
      </StyledSideContactContainer>
    </>
  );
};

export default SideContact;
