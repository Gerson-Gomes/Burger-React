import React from "react";
import Header from "../molecule/Header.jsx";
import LoginMainContent from "../molecule/LoginMainContent.jsx";
import Footer from "../molecule/Footer.jsx";
import HeaderLogged from "../molecule/HeaderLogged.jsx";
import {useAuth} from "../AuthContext.jsx";

function Login() {
    const {isLogged} = useAuth();
    return (
        <>
            {isLogged ? <HeaderLogged/> : <Header/>}
            <LoginMainContent/>
            <Footer/>
        </>
    )
}

export default Login