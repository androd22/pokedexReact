import { useState, useEffect } from "react";
import PokemonCard from "../pokemonCard/PokemonCard";
import classes from "./PokemonList.module.css";

function PokemonList() {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch("https://pokebuildapi.fr/api/v1/pokemon");

        const data = await request.json();
        setApiData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <h2>Listes des autres pokémons</h2>
      <div className={classes.CentrerListePokemon}>
        {apiData
          ? apiData.map((pokemon) => {
              return (
                <>
                  <PokemonCard key={pokemon.id} pokemonCardDetails={pokemon} />
                </>
              );
            })
          : null}
      </div>
    </>
  );
}

export default PokemonList;
