import styles from "./PokemonCard.module.css";
import classes from "./PokemonCard.module.css";

function PokemonCard({ pokemonCardDetails }) {
  return (
    <>
      <div className={classes.card}>
        <img
          className={classes.imgPokemon}
          src={pokemonCardDetails.image}
          alt=""
        />
        <h3>{pokemonCardDetails.name}</h3>
        <h4>Stats</h4>
        <div className={classes.flexStats}>
          <div>
            HP : <span>{pokemonCardDetails.stats.HP}</span>
          </div>
          <div>
            Attack : <span>{pokemonCardDetails.stats.attack}</span>
          </div>
          <div>
            Defense : <span>{pokemonCardDetails.stats.defense}</span>
          </div>
          <div>
            Special_attack :
            <span>{pokemonCardDetails.stats.special_attack}</span>
          </div>
          <div>
            Special_defense :
            <span>{pokemonCardDetails.stats.special_defense}</span>
          </div>
          <div>
            Speed : <span>{pokemonCardDetails.stats.speed}</span>
          </div>
        </div>
        <h4>Types</h4>
        <div className={classes.imgTypes}>
          {pokemonCardDetails.apiTypes.map((pokemonGenerationTypes) => {
            return (
              <>
                <img
                  key={pokemonGenerationTypes.name}
                  src={pokemonGenerationTypes.image}
                  alt=""
                />
              </>
            );
          })}
        </div>
        <div className={classes.buttonCard}>
          <button>Ajouer à l'équipe</button>
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
