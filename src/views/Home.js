import React, { useContext } from "react";
import { Link } from "react-scroll";
import RootContext from "../context/context";
import {
  StyledHomeContainer,
  StyledSectionWrapper,
  StyledContainer,
  StyledCompanyName,
  StyledCompanySubName,
  StyledCompanySubInfo,
  StyledScrollDownButton,
} from "./styles/HomeStyles";

const Home = () => {
  const context = useContext(RootContext);
  const { isMenuOpen } = context;
  return (
    <StyledHomeContainer id="start">
      <StyledSectionWrapper>
        <StyledContainer>
          <StyledCompanyName>
            Active Mind Psychoterapia CBT Magdalena Musiał
            <StyledCompanySubName>
              terapeuta poznawczo-behawioralny
            </StyledCompanySubName>
          </StyledCompanyName>
          <StyledCompanySubInfo>
            "Wszystko rozpoczyna się od myśli. Myśli prowadzą do uczuć, uczucia
            prowadzą do działań, działania prowadzą do rezultatów." - J.Beck
          </StyledCompanySubInfo>
          <Link to="o-mnie" smooth offset={isMenuOpen ? -220 : -80}>
            <StyledScrollDownButton />
          </Link>
        </StyledContainer>
      </StyledSectionWrapper>
    </StyledHomeContainer>
  );
};

export default Home;
