import React from "react";
import "../stylesheet/footer.css"

function Footer() {
    return (
        <footer className="footer">

            <div>
                <h2>Promoções exclusivas no Whatsapp</h2>
                <a href="https://web.whatsapp.com/"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
            <div>
                <h2>Nos siga em outras redes sociais para receber atualizações do menu</h2>
                <div>
                    <a href="https://www.threads.net/?hl=pt-br"><i className="fa-brands fa-threads"></i></a>
                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                </div>

            </div>

        </footer>
    )
}

export default Footer;