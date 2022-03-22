import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import MainTemplate from "./templates/MainTemplate";
import RootContext from "./context/context";
import {useCookies} from "react-cookie";

const App = () => {
    const setCookieToLocalStorage = () => {
        localStorage.setItem("cookieAccepted", JSON.stringify(cookieAccepted));
    };
    const getCookieFromLocalStorage = () => {
        let localStorageCookie;
        if (localStorage.getItem("cookieAccepted")) {
            localStorageCookie = JSON.parse(localStorage.getItem("cookieAccepted"));
        } else {
            localStorageCookie = false;
        }
        return localStorageCookie;
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [displayButton, setDisplayButton] = useState(false);
    const [navbarColor, setNavbarColor] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalValue, setModalValue] = useState('');
    const [cookies, setCookie] = useCookies(["user"]);
    const [cookieAccepted, setCookieAccepted] = useState(
        getCookieFromLocalStorage
    );
    useEffect(() => {
        setCookieToLocalStorage();
    }, [cookieAccepted]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const checkScrollTop = () => {
            if (!displayButton && window.pageYOffset > 600) {
                setDisplayButton(true);
            } else if (window.pageYOffset > 100) {
                setNavbarColor(true);
            } else {
                setNavbarColor(false);
                setDisplayButton(false);
            }
        };
        window.addEventListener("scroll", checkScrollTop);
    }, []);

    const handleCookie = () => {
        setCookie("user", "gowtham", {
            path: "/",
        });
        setCookieAccepted(true);
    };
    const openModal = (value) => {
        setModalOpen(true);
        setModalValue(value);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <BrowserRouter>
            <RootContext.Provider
                value={{
                    isMenuOpen,
                    toggleMenu,
                    navbarColor,
                    displayButton,
                    handleCookie,
                    cookieAccepted,
                    openModal,
                    modalOpen,
                    setModalOpen,
                    closeModal,
                    modalValue,
                    setModalValue,
                }}
            >
                <MainTemplate/>
            </RootContext.Provider>
        </BrowserRouter>
    );
};

export default App;
