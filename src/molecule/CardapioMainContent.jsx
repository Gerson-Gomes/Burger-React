import "../stylesheet/CardapioMainContent.css"
import {React, useEffect, useRef, useState} from "react";
import api from "../services/api.js";
import {createPortal} from "react-dom";
import ProductInfoModal from "./ProductInfoModal.jsx";
import ProductCartModal from "./ProductCartModal.jsx";

function CardapioMainContent() {
    const targetCarne = useRef(null);
    const targetFrango = useRef(null);
    const targetPeixe = useRef(null);
    const targetVegano = useRef(null);
    const targetSobremesa = useRef(null);

    const [product, setProduct] = useState([]);
    const [targetProduct, setTargetProduct] = useState(null);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);

    const categoriesSideBar = [
        {key: "Carne", refName: targetCarne},
        {key: "Frango", refName: targetFrango},
        {key: "Peixe", refName: targetPeixe},
        {key: "Vegano", refName: targetVegano},
        {key: "Sobremesa e Bebidas", refName: targetSobremesa},
    ];

    useEffect(() => {
        api.get('/products')
            .then((res) => {
                // interpretar res.data de forma defensiva
                let data = res.data;
                if (!Array.isArray(data)) {
                    // algumas APIs retornam { products: [...] } ou { items: [...] }
                    data = res.data?.products ?? res.data?.items ?? [];
                }
                setProduct(data);
                console.log("loaded products:", data);
            })
            .catch((err) => console.error('Erro ao carregar', err));
    }, []);

    const renderItems = (category) => {

        const items = product.filter((p) => p.productCategory === category);

        if (items.length === 0) {
            return (
                <li className="item-placeholder">
                    <p>Vazio</p>
                </li>
            )
        } else {
            
            
            return items.map((prod) => (
            
                <li className="item-placeholder" key={prod.productId}>
                    <div className="item">
                        <img src={prod.productImageURL} alt={prod.productName}/>
                        <p id={"product-name"}>{prod.productName}</p>
                        <p id={"product-price"}>
                            {prod.productPrice.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </p>
                    </div>
                    <div className="shopping-button-container">
                        <button className="btn btn-success" onClick={() => {
                            setShowCartModal(true);
                            setTargetProduct(prod);
                        }}>Comprar
                        </button>
                        <button className="btn btn-info" onClick={() => {
                            setShowInfoModal(true);
                            setTargetProduct(prod)
                        }}>Info
                        </button>

                    </div>

                </li>
                
                
            ));
        }
    };

    return (
        <>
            <div className="cardapioMainContent">
                <div className={'sideBar-container'}>
                    <section className={'menuLateral'}>
                        <div className={'sideBar-nav'}>
                            {categoriesSideBar.map(({key, refName}) => (
                                <a key={key} onClick={() => window.scrollTo({
                                    top: refName.current.offsetTop,
                                    behavior: "smooth"
                                })}>
                                    {key}
                                </a>
                            ))}
                        </div>
                    </section>
                </div>

                <section className="cardapio">
                    <div className={'cardapio-container'}>
                        <h1 ref={targetCarne} className="sectionTitle">Carnes</h1>
                        <hr className="sectionLine"/>
                        <ul className={'item-container'}>
                            {renderItems('Carne')}
                        </ul>
                    </div>

                    <div className={'cardapio-container'}>
                        <h1 ref={targetFrango} className="sectionTitle">Frangos</h1>
                        <hr className="sectionLine"/>
                        <ul className="item-container">
                            {renderItems('Frango')}
                        </ul>
                    </div>

                    <div className={'cardapio-container'}>
                        <h1 ref={targetPeixe} className="sectionTitle">Peixes</h1>
                        <hr className="sectionLine"/>
                        <ul className="item-container">
                            {renderItems('Peixe')}
                        </ul>
                    </div>


                    <div className={'cardapio-container'}>
                        <h1 ref={targetVegano} className="sectionTitle">Vegetariano</h1>
                        <hr className="sectionLine"/>
                        <ul className="item-container">
                            {renderItems('Vegan')}
                        </ul>
                    </div>

                    <div className={'cardapio-container'}>
                        <h1 ref={targetSobremesa} className="sectionTitle">Sobremesas e Outros</h1>
                        <hr className="sectionLine"/>
                        <ul className="item-container">
                            {renderItems('Misc')}
                        </ul>
                    </div>

                </section>
                {showInfoModal && createPortal(
                    <ProductInfoModal onClose={() => setShowInfoModal(false)} product={targetProduct}/>, document.body
                )}
                {showCartModal && createPortal(
                    <ProductCartModal onClose={() => setShowCartModal(false)} product={targetProduct}/>, document.body
                )}
            </div>
        </>
    )
}

export default CardapioMainContent;


