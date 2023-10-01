'use client';

import React, { SetStateAction } from "react";

type ContextProps = {
    isMenuClicked: boolean,
    setIsMenuClicked: React.Dispatch<SetStateAction<boolean>>
    isChatMenuClicked: boolean,
    setIsChatMenuClicked: React.Dispatch<SetStateAction<boolean>>
    scrolled: boolean,
    setScrolled: React.Dispatch<SetStateAction<boolean>>
    isAuthClicked: boolean,
    setIsAuthClicked: React.Dispatch<SetStateAction<boolean>>
    loginBtn: boolean,
    setLoginBtn: React.Dispatch<SetStateAction<boolean>>
}

const GlobalContext = React.createContext<ContextProps>({
    isMenuClicked: false,
    setIsMenuClicked: () => { },
    isChatMenuClicked: false,
    setIsChatMenuClicked: () => { },
    scrolled: false,
    setScrolled: () => { },
    isAuthClicked: false,
    setIsAuthClicked: () => { },
    loginBtn: false,
    setLoginBtn: () => { }
})

export const GlobalContextProvider = ({ children }: any) => {

    const [isMenuClicked, setIsMenuClicked] = React.useState(false);
    const [isChatMenuClicked, setIsChatMenuClicked] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [isAuthClicked, setIsAuthClicked] = React.useState(false);
    const [loginBtn, setLoginBtn] = React.useState(true)


    return (
        <GlobalContext.Provider value={{ isMenuClicked, setIsMenuClicked, isChatMenuClicked, setIsChatMenuClicked, scrolled, setScrolled, isAuthClicked, setIsAuthClicked, loginBtn, setLoginBtn }}>
            {children}
        </GlobalContext.Provider>
    )
};

export default GlobalContextProvider;

export const useGlobalContext = () => React.useContext(GlobalContext);