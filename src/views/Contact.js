import React, {useContext} from "react";
import ContactForm from "../components/ContactForm";
import SideContact from "../components/SideContact";
import {
    StyledSectionContainer,
    StyledHeaderWrapper,
    StyledHeader,
    StyledUnderline,
} from "./styles/CommonStyles";
import {
    StyledContactInfoWrapper,
    StyledCompanyAddressWrapper,
    StyledFormWrapper,
    StyledIntroContainer,
    StyledCheckMarkDraw,
    StyledSendInformation,
    StyledCircle,
    StyledPolyline
} from "./styles/ContactStyles";
import RootContext from "../context/context";


const Contact = () => {
    const context = useContext(RootContext);
    const { sent } = context;
    return (
        <>
            <StyledSectionContainer id="kontakt">
                <StyledHeaderWrapper>
                    <StyledHeader>Kontakt</StyledHeader>
                    <StyledUnderline/>
                </StyledHeaderWrapper>
                <StyledIntroContainer>
                    Masz pytania, chcesz rozpocząć współpracę? Czekam na Twój kontakt!
                    Skorzystaj z poniższego formularza, napisz maila lub zadzwoń.
                </StyledIntroContainer>
                {sent ? (
                    <StyledSendInformation>
                        <StyledCheckMarkDraw version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                            <StyledCircle  fill="none" stroke="#73AF55" stroke-width="6"
                                    stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                            <StyledPolyline  fill="none" stroke="#73AF55" stroke-width="6"
                                      stroke-linecap="round" stroke-miterlimit="10"
                                      points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                        </StyledCheckMarkDraw>
                        Wiadomość została wysłana.
                    </StyledSendInformation>
                ) : (
                    <StyledSendInformation/>
                )}
                <StyledContactInfoWrapper>
                    <StyledCompanyAddressWrapper>
                        <SideContact/>
                    </StyledCompanyAddressWrapper>
                    <StyledFormWrapper>
                        <ContactForm/>
                    </StyledFormWrapper>
                </StyledContactInfoWrapper>
            </StyledSectionContainer>
        </>
    );
};

export default Contact;
