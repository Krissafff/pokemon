import React, {useEffect, useState} from 'react';
import { getPokemons, getPokemonData } from './api';
import Navbar from './Components/Navbar';
import Pokedex from './Components/Pokedex';
import 'bootstrap/dist/css/bootstrap.min.css';
import pikachu from './assets/pikachu.gif';
import 'aos/dist/aos.css'; 



export default function App(){

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 5
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false)

      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });

      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [page]);


  
  return(

    
    <div className='container p-0 mt-5'>
      <div className='row'>
      <div className='tabela'>
      <img src={pikachu} alt="" className='gif' />
    <Navbar />

    <Pokedex 
    pokemons={pokemons} 
    loading={loading} 
    page={page} 
    setPage={setPage}
    totalPages={totalPages}
    />
    
    </div>
    </div>
    </div>

  );
}