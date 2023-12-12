import Footer from "@/components/Footer"

import Header from "@/components/Header"
import Image from "next/image"
import style from "@/app/page.module.css"



function Home() {

    return (

        <>

            <Header />

<div className={style.banner}>

<Image src="/Banner.png" width={1520} height={520}/>

</div>

<div className={style.texto}>

<div className={style.titulo}>
<h1> O que somos?</h1>
</div>

<p>Somos um site que te ajudará a descobrir mais coisas sobre seus Pokémon favoritos</p>

<br/>

<br/>

<div className={style.titulo}>
    <h2>Como fazemos isso?</h2>
</div>

    <p>Este site fornece uma interface API RESTful para objetos altamente detalhados construídos a partir de milhares de linhas de dados relacionados a Pokémon. Cobrimos especificamente a franquia de videogame. Usando este site, você pode consumir informações sobre Pokémon, seus movimentos, habilidades, tipos, grupos de ovos e muito, muito mais.</p>

    <br/>

    <br/>

  <div className={style.titulo}>
    <h3>O que é uma API?</h3>
  </div>

    <p>Uma API (Interface de Programação de Aplicações) é um contrato que possibilita aos desenvolvedores interagir com um aplicativo. No contexto de um banco de dados de Pokémon, as interfaces são representadas por URLs específicos, chamados de endpoints, que permitem operações como recuperar, adicionar ou atualizar dados relacionados a Pokémon. Em resumo, a API define como os desenvolvedores podem acessar e manipular informações no aplicativo por meio desses links.</p>

    </div>


            <Footer />

        </>
    )



}

export default Home
