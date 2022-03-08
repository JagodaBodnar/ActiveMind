import React from "react";
import {
  StyledSideContactContainer,
  StyledSideContactHeader,
  StyledSideContactAddress,
  StyledBottomContactAddress,
  StyledMailPhone,
  StyledSideContactCompanyName,
} from "./styles/SideContact";

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
      </StyledSideContactContainer>
    </>
  );
};

export default SideContact;
