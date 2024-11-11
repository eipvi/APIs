//usestate para os estados dos filmes
//useeffect para chamar api quando  apagina carregar

import { useState,useEffect } from "react"

// import { useState, useEffect } from "react";

const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
     const [topMovies, setTopMovies] = useState([])
    //imprimir
    //fetch(url) faz uma requiseção a rede
     const getTopRatedMovies = async (url) => {
        //const é usada para declarar uma constante chamada res 
        // fetch, ele retorna uma Promise que resolve com um objeto de resposta 
        const res = await fetch(url)
        //onst data: Declara uma constante chamada data que armazenará o objeto JavaScript resultante da conversão dos dados JSON.
        const data = await res.json()

        setTopMovies(data.results);
     }

    useEffect(() => {
        const topRatedUrl = `${movieURL}top_rated?${apiKey}`;
        
        getTopRatedMovies(topRatedUrl);
    }, [])

    return(
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
            {topMovies.length === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 && topMovies.map((movie) => ( <p key={movie.id}>{movie.title}</p>))} 
            </div>
        </div>
    )
}

export default Home;