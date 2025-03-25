import "../stylesheet/CardapioMainContent.css"
import BomCheaddar from '../assets/BomCheaddar.jpg'
import SideBar from '../molecule/SideBar.jsx'

function CardapioMainContent() {

    return (
        <>
            <div className="cardapioMainContent">
                <SideBar/>

                <section className="cardapio">
                    <div className={'cardapioCarnes'}>
                        <h1 className="sectionTitle">Carnes</h1>
                        <hr className="sectionLine"/>
                        <div className='item-placeholder'>
                            <div className='item'>
                                <img src={BomCheaddar}/>
                                <p>BomCheaddar</p>
                                <p>25R$</p>
                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CardapioMainContent;