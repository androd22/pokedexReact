import styles from "./FormulairePresentationPokedex.module.css";
import classes from "./FormulairePresentationPokedex.module.css";

function FormulairePresentationPokedex() {
  return (
    <>
      <div className={classes.container}>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <input type="submit" name="submit" value="S'inscrire" />
        </form>
      </div>
    </>
  );
}

export default FormulairePresentationPokedex;
