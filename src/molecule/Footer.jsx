import React from "react";
import "../stylesheet/footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp, faThreads, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="footer">

            <div>
                <h2>Promoções exclusivas no Whatsapp</h2>
                <div className={'footer-socials'}>
                    <a href="https://web.whatsapp.com/">
                        <FontAwesomeIcon icon={faWhatsapp}/>
                    </a>
                </div>
            </div>
            <div>
                <h2>Nos siga em outras redes sociais para receber atualizações do menu</h2>
                <div className='footer-socials'>
                    <a href="https://www.threads.net/?hl=pt-br"><FontAwesomeIcon icon={faThreads}/></a>
                    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}/></a>
                </div>

            </div>

        </footer>
    )
}

export default Footer;