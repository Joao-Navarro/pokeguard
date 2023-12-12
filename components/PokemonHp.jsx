import Image from "next/image"

import style from "@/app/geracao/page.module.css"

const CPokemon = ({ pokemon }) => {

    return (

        <>

            <div className={style.box}>

                <h2>{pokemon.name}</h2>

                <div className={style.info}>

                    <div className={style.imagenspokemon}>

                        <Image

                            className={style.image}

                            src={pokemon.sprites.other.dream_world.front_default}

                            alt={pokemon.name}

                            // fill sizes="50%,50%"

                            width={200}

                            height={200}

                        />

                    </div>



                    <div className={style.tamanho}>

                        <p>HP: {pokemon.stats[0].base_stat}</p> 

                        <p>Attack: {pokemon.stats[1].base_stat}</p>

                        <p>Defense: {pokemon.stats[2].base_stat}</p>

                        <p>Special-Attack: {pokemon.stats[3].base_stat}</p>

                        <p>Special-Defense: {pokemon.stats[4].base_stat}</p>

                        <p>Speed: {pokemon.stats[5].base_stat}</p>




                    </div>

                </div>


            </div>







        </>

    )

}

export default CPokemon