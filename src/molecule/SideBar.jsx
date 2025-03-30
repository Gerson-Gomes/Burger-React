import {React, useRef} from "react";
import '../stylesheet/SideBar.css'



function SideBar () {
    const targetCarnes = useRef(null);
    const targetFrangos = useRef(null);
    const targetPeixes = useRef(null);
    const targetVegans = useRef(null);
    const targetSobremesas = useRef(null);
    return (
       <>
           <section className={'menuLateral'}>
                <div className={'sideBar-nav'}>
                    <a onClick={()=>{window.scrollTo({top:targetCarnes.current.offsetTop,behavior:"smooth"})}}>Carnes</a>
                    <a onClick={()=>{window.scrollTo({top:targetFrangos.current.offsetTop,behavior:"smooth"})}}>Frangos</a>
                    <a onClick={()=>{window.scrollTo({top:targetPeixes.current.offsetTop,behavior:"smooth"})}}>Peixes</a>
                    <a onClick={()=>{window.scrollTo({top:targetVegans.current.offsetTop,behavior:"smooth"})}}>Veganos</a>
                    <a onClick={()=>{window.scrollTo({top:targetSobremesas.current.offsetTop,behavior:"smooth"})}}>Sobremesas</a>
                </div>
           </section>

       </>
    )
}

export default SideBar;