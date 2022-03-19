import React, {useContext} from "react";
import Modal from "../components/Modal";
import {
    StyledSectionContainer,
    StyledSectionWrapper,
    StyledAboutUs,
    StyledHeaderWrapper,
    StyledLink,
    StyledAboutMeContent, StyledImg
} from "./styles/AboutStyles";
import {StyledHeader} from "./styles/CommonStyles";
import RootContext from "../context/context";
import photo from '../assets/images/MMfoto.png'
import Certificates from "../components/Certificates";


const About = () => {
    const context = useContext(RootContext);
    const {openModal} = context;
    return (
        <StyledSectionWrapper>
            <StyledSectionContainer id="o-mnie">
                <StyledHeaderWrapper>
                    <StyledHeader>O mnie</StyledHeader>
                </StyledHeaderWrapper>
                <StyledAboutMeContent>
                    <StyledImg src={photo} alt="Magdalena Musiał foto"/>
                    <StyledAboutUs>
                        Jestem dyplomowanym pedagogiem specjalnym, nauczycielem edukacji
                        wczesnoszkolnej i przedszkolnej oraz psychoterapeutą specjalizującym
                        się w &nbsp;
                        <StyledLink onClick={() => openModal('1')}>
                            nurcie poznawczo - behawioralnym (CBT)
                        </StyledLink>
                        . Obecnie w procesie certyfikacji na Uniwersytecie SWPS pod
                        kierownictwem dr hab. Agnieszki Popiel i dr Ewy Pragłowskiej. W ramach
                        swojej praktyki prowadzę terapię indywidualną dla dzieci, młodzieży,
                        par i osób dorosłych. Nurt, w którym pracuję ma potwierdzoną badaniami
                        skuteczność w leczeniu większości zaburzeń. Nieustannie podnoszę swoje &nbsp;
                        <StyledLink onClick={() => openModal('2')}>kwalifikacje </StyledLink> poprzez uczestnictwo w
                        szkoleniach, konferencjach naukowych i kursach dotyczących psychoterapii. Swoją pracę
                        terapeutyczną poddaję regularnej superrewizji pod kierunkiem certyfikowanego superwizora CBT
                        . Doświadczenie z zakresu diagnostyki psychologicznej, poradnictwa i
                        psychoterapii zdobywałam w Szpitalu Neuropsychiatrycznym im. Prof.
                        Mieczysława Kaczyńskiego przy ulicy Abramowickiej w Lublinie, zarówno
                        na oddziale dziennym jak i oddziale całodobowym. Posiadam kwalifikacje
                        z zakresu pedagogiki uprawniające do pracy z osobami ze spektrum
                        autyzmu w tym z Zespołem Aspergera. Współpracuję z zespołem
                        doświadczonych lekarzy psychiatrów, seksuologów, psychologów i
                        psychoterapeutów. Prowadzę praktykę własną – Gabinet REH4U w Trzebnicy
                        oraz we Wrocławiu Active Mind Psychoterapia CBT Magdalena Musiał. Jestem członkiem
                        Polskiego Towarzystwa Terapii Poznawczo-Behawioralnej."
                    </StyledAboutUs>
                </StyledAboutMeContent>
                <Modal/>
            </StyledSectionContainer>
        </StyledSectionWrapper>
    );
};

export default About;
