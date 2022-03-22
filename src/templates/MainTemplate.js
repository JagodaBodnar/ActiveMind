import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "../components/Navigation";
import { mainGlobalStyles } from "../globalStyles/mainGlobalStyles";
import About from "../views/About";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Help from "../views/Help";
import GlobalStyle from "../globalStyles/GlobalStyle";
import Reviews from "../views/Reviews";
import styled from "styled-components";
import CookiesInformation from "../components/CookiesInformation";
import RootContext from "../context/context";
import PriceList from "../views/PriceList";
import Footer from "../views/Footer";

const StyledContentContainer = styled.div`
  overflow: hidden;
`;

const MainTemplate = () => {
  const context = useContext(RootContext);
  const { cookieAccepted } = context;
  return (
    <>
      <ThemeProvider theme={mainGlobalStyles}>
        <GlobalStyle />
        <StyledContentContainer>
          <Navigation />
          <Home />
          <Help />
          <About />
          <PriceList />
          <Reviews />
          <Contact />
          <Footer />
          {cookieAccepted ? "" : <CookiesInformation />}
        </StyledContentContainer>
      </ThemeProvider>
    </>
  );
};
export default MainTemplate;
