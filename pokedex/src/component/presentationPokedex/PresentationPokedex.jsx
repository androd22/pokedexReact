import ParagraphPresentationPokedex from "../paragraphPresentationPokedex/ParagraphPresentationPokedex";
import SectionPresentationPokedex from "../sectionPresentationPokedex/SectionPresentationPokedex";
import FormulairePresentationPokedex from "../formulairePresentationPokedex/FormulairePresentationPokedex";
import styles from "./PresentationPokedex.module.css";
function PresentationPokedex() {
  return (
    <>
      <h1>POKEDEX</h1>

      <ParagraphPresentationPokedex />
      <SectionPresentationPokedex />
      <FormulairePresentationPokedex />
    </>
  );
}

export default PresentationPokedex;
