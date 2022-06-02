import React from "react";

const Pokemon = (props) => {
    const {pokemon} = props;

    return (
      
    <div className="container p-0 border">
      <div className="row">
        <table>
        <tbody>
          <tr>
            <td className="img"><img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image m-1" /></td>
            <td className="id"><div className="">#{pokemon.id}</div></td>
            <td className="nome"><a href="" className="link"><h5 className="nome color-gradient">{pokemon.name}</h5></a></td>
            <td className="poder">{pokemon.types.map((type, index) => {
              return(
                <div key={index} className="">
                  {type.type.name}
                </div>
              )
              })}</td>
          </tr>
        </tbody>
        </table>

        <div className="card-bottom">
        <div className="card-type">
          {pokemon.types.map((type, index) => {
            return (
              <div key={index} className="pokemon-type-text">{type.name}</div>
            )
          })}
        </div>
        </div>
        </div>
      </div>
    )
}

export default Pokemon;