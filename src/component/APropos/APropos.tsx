import "./APropos.css";
import Photo_Profil from "../image/Flo_Photo_CV.jpg";
import { useState } from "react";
("use strict");

function A_Propos() {
  const buttonName = ["Présentation", "Langues", "Passions", "Soft Skills"];
  const Presentation = presentation();
  const Language = language();
  const Passion = "jeux";
  const Soft = "boom";
  let textElement = {
    Presentation: Presentation,
    Language: Language,
    Passion: Passion,
    Soft: Soft,
  };

  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <>
      <div id="A_Propos">
        <div id="APropos">A Propos</div>
        <div id="AProposElement">
          <img id="PhotoProfil" src={Photo_Profil} />
          <div className="centerScreen">
            <div className="aProposButton">
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
                  }}
                >
                  {element}
                </button>
              ))}
            </div>
            <div className="elementText">
              {Object.entries(textElement).map(([key, element], index) => (
                <div
                  key={key}
                  className={
                    selectedButton === index ? "isActivate" : "isDeactivate"
                  }
                >
                  {element}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function presentation() {
  return (
    <>
      <div id="elementPresentation">
        <p>👋 Bonjour, moi c’est Florian MASSART</p>
        <p>💻 Futur expert en Développement & en Cybersécurité. </p>
        <p>
          🔍 Passionné par la tech, curieux de nature et toujours prêt à relever
          de nouveaux défis.
        </p>
        <p>
          🚀 En quête d’une alternance pour mon pré-master en informatique puis
          Master à compter de janvier 2026: une opportunité précieuse pour moi
          d'apprendre et de grandir professionnellement, tout en apportant ma
          perspective unique et mon enthousiasme à l'entreprise.
        </p>
      </div>
    </>
  );
}

function language() {
  return (
    <>
      <div id="elementLanguage">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </>
  );
}

export default A_Propos;
