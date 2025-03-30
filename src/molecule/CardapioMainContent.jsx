import "../stylesheet/CardapioMainContent.css"
import BomCheaddar from '../assets/BomCheaddar.jpg'
import BigBom from '../assets/bigBom.jpg'
import BomFish from '../assets/BomFish.jpg'
import SaladaBom from '../assets/SaladaBom.jpg'
import MilkShake from '../assets/milkshake.jpg'
import {React, useRef} from "react";

function CardapioMainContent() {
    const targetCarnes = useRef(null);
    const targetFrangos = useRef(null);
    const targetPeixes = useRef(null);
    const targetVegans = useRef(null);
    const targetSobremesas = useRef(null);
    return (
        <>
            <div className="cardapioMainContent">
                <div className={'sideBar-container'}>
                    <section className={'menuLateral'}>
                        <div className={'sideBar-nav'}>
                            <a onClick={() => {
                                window.scrollTo({top: targetCarnes.current.offsetTop, behavior: "smooth"})
                            }}>Carnes</a>
                            <a onClick={() => {
                                window.scrollTo({top: targetFrangos.current.offsetTop, behavior: "smooth"})
                            }}>Frangos</a>
                            <a onClick={() => {
                                window.scrollTo({top: targetPeixes.current.offsetTop, behavior: "smooth"})
                            }}>Peixes</a>
                            <a onClick={() => {
                                window.scrollTo({top: targetVegans.current.offsetTop, behavior: "smooth"})
                            }}>Veganos</a>
                            <a onClick={() => {
                                window.scrollTo({top: targetSobremesas.current.offsetTop, behavior: "smooth"})
                            }}>Sobremesas</a>
                        </div>
                    </section>
                </div>

                <section className="cardapio">
                    <div className={'cardapio-container'}>
                        <h1 ref={targetCarnes} className="sectionTitle">Carnes</h1>
                        <hr className="sectionLine"/>
                        <div className={'item-container'}>
                            <div className='item-placeholder'>
                                <div className='item'>
                                    <img src={BomCheaddar}/>
                                    <p>BomCheaddar</p>
                                    <p>25R$</p>
                                </div>
                                <div className={'shopping-button-container'}>
                                    <button className={"btn btn-success"}>Compra</button>
                                    <button className={"btn btn-info"}>info</button>
                                </div>
                            </div>
                            <div className={'item-placeholder'}></div>
                            <div className={'item-placeholder'}></div>
                            <div className={'item-placeholder'}></div>


                        </div>

                    </div>
                    <div className={'cardapio-container'}>
                        <h1 ref={targetFrangos} className="sectionTitle">Frangos</h1>
                        <hr className="sectionLine"/>
                        <div className={'item-container'}>
                            <div className='item-placeholder'>
                                <div className='item'>
                                    <img src={BigBom}/>
                                    <p>BigBom</p>
                                    <p>25R$</p>
                                </div>
                                <div className={'shopping-button-container'}>
                                    <button className={"btn btn-success"}>Compra</button>
                                    <button className={"btn btn-info"}>info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'cardapio-container'}>
                        <h1 ref={targetPeixes} className="sectionTitle">Peixes</h1>
                        <hr className="sectionLine"/>
                        <div className={'item-container'}>
                            <div className='item-placeholder'>
                                <div className='item'>
                                    <img src={BomFish}/>
                                    <p>BomFish</p>
                                    <p>25R$</p>
                                </div>
                                <div className={'shopping-button-container'}>
                                    <button className={"btn btn-success"}>Compra</button>
                                    <button className={"btn btn-info"}>info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'cardapio-container'}>
                        <h1 ref={targetVegans} className="sectionTitle">Veganos</h1>
                        <hr className="sectionLine"/>
                        <div className={'item-container'}>
                            <div className='item-placeholder'>
                                <div className='item'>
                                    <img src={SaladaBom}/>
                                    <p>Salada</p>
                                    <p>25R$</p>
                                </div>
                                <div className={'shopping-button-container'}>
                                    <button className={"btn btn-success"}>Compra</button>
                                    <button className={"btn btn-info"}>info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'cardapio-container'}>
                        <h1 ref={targetSobremesas} className="sectionTitle">Sobremesas</h1>
                        <hr className="sectionLine"/>
                        <div className={'item-container'}>
                            <div className='item-placeholder'>
                                <div className='item'>
                                    <img src={MilkShake}/>
                                    <p>MilkShake</p>
                                    <p>25R$</p>
                                </div>
                                <div className={'shopping-button-container'}>
                                    <button className={"btn btn-success"}>Compra</button>
                                    <button className={"btn btn-info"}>info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CardapioMainContent;