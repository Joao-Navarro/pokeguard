"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

import CPokemon from "@/components/PokemonType"

import style from "./page.module.css"

import { useState } from "react";

function Pokemon() {


    const [pokemonName, setPokemonId] = useState("");

    const [pokemon, setPokemon] = useState(null);

    const [error, setError] = useState(null);


    const getPokemon = async () => {

        try {

            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);


            const data = await resposta.json();

            setPokemon(data);

            setError(null)

        }

        catch (error) {

            console.error("Erro ao buscar o Pokémon:", error);


            setError("Falha na busca do Pokemon. Tente Novamente")

        }

    };

    return (
        <>

            <Header />



            <div className={style.Pokemon}>

                <h1 className={style.h1pokemon}>Types</h1>


                <div className={style.caixinha}>

                    <input type="text"

                        placeholder="N° Pokedex or Name"

                        value={pokemonName}

                        onChange={(event) => setPokemonId(event.target.value)}

                    />
                </div>


                <div >

                    <button className={style.botao} onClick={getPokemon}>Pegue o Pokémon</button>

                    {error && <p style={{ color: "red" }}>{error}</p>}

                </div>



                <div className={style.poke}>

                    {pokemon && <CPokemon pokemon={pokemon} />}

                </div>


            </div>

            <br></br>
            <br></br>

            <Footer />

        </>
    )

}
export default Pokemon