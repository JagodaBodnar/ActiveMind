import React from "react";
import {
    StyledSideContactContainer,
    StyledSideContactHeader,
    StyledSideContactAddress,
    StyledBottomContactAddress,
    StyledMailPhone,
    StyledSideContactCompanyName,
    StyledFacebookLogo,
    StyledLocationLogo
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
                    <a href="https://www.google.pl/maps/place/Active+Mind+Psychoterapia+CBT+poznawczo-behawioralna+Magdalena+Musia%C5%82/@51.097441,16.9335343,17z/data=!3m1!4b1!4m5!3m4!1s0x470fc18a8e0da5e9:0xee3ab47f425a6d20!8m2!3d51.0974664!4d16.9354942" rel="noopener noreferrer" target="_blank"><StyledLocationLogo/></a>
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
                    <a href="https://www.facebook.com/Active-Mind-Psychoterapia-CBT-Magdalena-Musia%C5%82-703300393425454" rel="noopener noreferrer"  target="_blank"><StyledFacebookLogo/></a>
                </StyledSideContactAddress>
            </StyledSideContactContainer>
        </>
    );
};

export default SideContact;
