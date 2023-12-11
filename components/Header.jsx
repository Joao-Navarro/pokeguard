"use client"

import Link from "next/link"

import Image from 'next/image';


function Header() {


    const menuShow = () => {

        let menuMobile = document.querySelector('.mobile-menu')

        if (menuMobile.classList.contains('open')) {

            menuMobile.classList.remove('open')

            document.querySelector('.icon').src = "/menuIcon.png"

        }

        else {

            menuMobile.classList.add('open')

            document.querySelector('.icon').src = "/menu-icon-close.jpg"


        }

    }


    return (

        <>


                <div className="headerBox">

                    <nav>

                        <div className="header">

                            <Link href="./"><Image
                            
                            
                            src={"/logoPokeguard.png"}

                            alt="Logo Pokeguard"

                            width={380}

                            height={150}

                            
                            />
                                
                                

                            </Link>

                           

                        </div>

                        <div className="nav-header">

                            <ul>
                                <li>

                                    <Link href="/pokemon" ><p>Ache seu Pokémon</p> </Link>

                                </li>

                                <li>

                                    <Link href="/tipos" ><p>Tipos </p> </Link>

                                </li>

                                <li>

                                    <Link href="/geracao" ><p>Geração</p></Link>

                                </li>

                                <li>

                                    <Link href="/sobrenos" > <p>Sobre Nós</p> </Link>

                                </li>


                            </ul>

                        </div>


                        <div className="mobile-menu-icon">

                            <button onClick={menuShow} className="btn-icon"><Image className="icon" src="/menuIcon.png" alt="Menu Icon" width={20} height={20} /></button>

                        </div>
                    </nav>

                </div>

                <div className="mobile-menu">

                    <ul>
                        <li>

                            <Link href="/romantismo" >Romantismo </Link>

                        </li>

                        <li>

                            <Link href="/abstracionismo" > Abstracionismo </Link>

                        </li>

                        <li>

                            <Link href="/renascimento" >Renascimento</Link>

                        </li>

                        <li>

                            <Link href="/barroco" > Barroco </Link>

                        </li>

                        <li>

                            <Link href="/impressionismo" >Impressionismo </Link>

                        </li>

                        <li>

                            <Link href="/neoclassicismo" > Neoclassicismo</Link>

                        </li>

                        <li>

                            <Link href="/rococo" >Rococó</Link>

                        </li>

                        <li>

                            <Link href="/realismo" > Realismo </Link>

                        </li>

                        <li>

                            <Link href="/sobrenos" > Sobre Nós </Link>

                        </li>
                        
                    </ul>

                </div>


        </>

    )

}

export default Header