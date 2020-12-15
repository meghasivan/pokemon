import React from 'react'

const PokeCard = ({pokemon}) => {
    return (
        <div className="card text-center mx-auto" style={{"maxWidth" : "18rem"}} key={pokemon.id}>
        <div className="card-header"><b>{pokemon.name}</b></div>
        <div className="card-body">          
          <p className="card-subtitle mb-2 text-muted">Id: {pokemon.id}</p>  
          <img src={pokemon.sprites['front_default']} />
                              
        </div>
      </div>
    )
};

export default PokeCard