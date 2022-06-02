import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
    const { pokemons, loading, page, totalPages, setPage } = props;
    const onLeftClickHandler = () => {
        if(page > 0 ) {
            setPage(page-1)
        }
    }
    const onRightClickHandler = () => {
        if(page+1 !== totalPages) {
            setPage(page+1)
        }
    }
    return (
        <div>
            <div className="tb border">
                <table>
                    <thead>
                        <tr className="iD">ID</tr>
                        <tr className="Nome">Name</tr>

                    </thead>
                </table>
                <Pagination 
                 page={page+1}
                 totalPages={totalPages}
                 onLeftClick={onLeftClickHandler}
                 onRightClick={onRightClickHandler}
                />
            </div>
            {loading ? (<div>Carregando, segura fera...</div>) : ( <div className="">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon}/>
                        )
                    })}
                </div>
                )}
        </div>
    );
}

export default Pokedex;