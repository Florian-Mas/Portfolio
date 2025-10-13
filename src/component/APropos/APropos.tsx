import "./APropos.css";
import Photo_Profil from "../image/Flo_Photo_CV.jpg";
import { useState } from "react";

function A_Propos() {
  const buttonName = ["Présentation", "Langues", "Passions", "Soft Skills"];
  const Presentation = "Bonjour";
  const Language = "Français";
  const Passion = "jeux";
  const Soft = "boom";
  let textElement = [Presentation, Language, Passion, Soft];

  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedTextElement, setSelectedTextElement] = useState(0);
  return (
    <>
      <div id="A_Propos">
        <div id="APropos">A Propos</div>
        <img id="PhotoProfil" src={Photo_Profil} />
        <div className="aProposflex">
          <br />
          {buttonName.map((element, index) => (
            <button
              key={element}
              type="button"
              className={
                selectedButton === index
                  ? "btn btn-theme-whiteBG active"
                  : "btn btn-theme-whiteBG"
              }
              onClick={() => {
                setSelectedButton(index);
                setSelectedTextElement(index);
              }}
            >
              {element}
            </button>
          ))}
        </div>
        <div className="elementText">
          {textElement.map((element, index) => (
            <div
              key={element}
              className={
                selectedButton === index ? "isActivate" : "isDeactivate"
              }
            >
              {element}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default A_Propos;
