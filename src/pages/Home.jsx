import React from "react";
import Header from "../molecule/Header.jsx";
import HomeMainContent from "../molecule/HomeMainContent.jsx";
import Footer from "../molecule/Footer.jsx";
import {useEffect} from "react";

function Home() {
    useEffect(() => {
        document.body.style.backgroundImage = 'radial-gradient(var(--laranja), var(--vermelho))'

        return () => {
            document.body.style.backgroundImage = '';
        }
    })

    return (
        <>
            <Header/>
            <HomeMainContent/>
            <Footer/>
        </>
    )
}

export default Home