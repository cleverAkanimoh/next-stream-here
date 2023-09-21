'use client';

import React, { SetStateAction } from "react";

type ContextProps = {
    isMenuClicked: boolean,
    setIsMenuClicked: React.Dispatch<SetStateAction<boolean>>
    featuresClick: boolean,
    setFeaturesClick: React.Dispatch<SetStateAction<boolean>>
    scrolled: boolean,
    setScrolled: React.Dispatch<SetStateAction<boolean>>
    authClick: boolean,
    setAuthClick: React.Dispatch<SetStateAction<boolean>>
    loginBtn: boolean,
    setLoginBtn: React.Dispatch<SetStateAction<boolean>>
}

const GlobalContext = React.createContext<ContextProps>({
    isMenuClicked: false,
    setIsMenuClicked: () => { },
    featuresClick: false,
    setFeaturesClick: () => { },
    scrolled: false,
    setScrolled: () => { },
    authClick: false,
    setAuthClick: () => { },
    loginBtn: false,
    setLoginBtn: () => { }
})

export const GlobalContextProvider = ({ children }: any) => {

    const [isMenuClicked, setIsMenuClicked] = React.useState(false);
    const [featuresClick, setFeaturesClick] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [authClick, setAuthClick] = React.useState(false);
    const [loginBtn, setLoginBtn] = React.useState(true)


    return (
        <GlobalContext.Provider value={{ isMenuClicked, setIsMenuClicked, featuresClick, setFeaturesClick, scrolled, setScrolled, authClick, setAuthClick, loginBtn, setLoginBtn }}>
            {children}
        </GlobalContext.Provider>
    )
};

export default GlobalContextProvider;

export const useGlobalContext = () => React.useContext(GlobalContext);