'use client'

import Header from '@/components/Header'
import styles from './page.module.css'

import Integrante from '@/components/Intregrantes'
import Footer from '@/components/Footer'

const ImageUrls = [

    { img: "/joao.png", nome: "João Navarro", idade: "16", posicao: "Tech Lid" },

    { img: "/davi.png", nome: "Davi Marcelino", idade: "16", posicao: "Auxiliar" },

    { img: "/beatriz.png", nome: "Beatriz Berganton", idade: "17", posicao: "Integrante" },

    { img: "/donizete.png", nome: "Gustavo Donizete", idade: "16", posicao: "Integrante" },

    { img: "/pietra.png", nome: "Pietra Helena", idade: "17", posicao: "Integrante" },
]

function SobreNos() {

    return (

        <>

        <Header/>

        <div className={styles.title}>

        <h1>Vanguard</h1>

        <p>Grupo 4 do Curso de Desenvolvimento de Sistemas</p>

        </div>

            <div className={styles.container}>

                <Integrante ImageUrls={ImageUrls} />

            </div>

        <Footer/>

        </>


    )

}

export default SobreNos