import Image from "next/image"

import style from "@/app/tipos/page.module.css"

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

                        <p>Type: {pokemon.types[0].type.name}</p>

                        <p>Habilidades: {pokemon.abilities[0].ability.name}</p>


                    </div>

                </div>


            </div>







        </>

    )

}

export default CPokemon