import "./APropos.css";
import Photo_Profil from "../image/Flo_Photo_CV.jpg";
import { useState } from "react";
("use strict");
import itFlag from "../image/Image_Language/italy-flag.gif";
import frFlag from "../image/Image_Language/france-flag.gif";
import ukFlag from "../image/Image_Language/uk-flag.gif";

function A_Propos() {
  const buttonName = {Présentation:"Présentation", Langues:"Langues", Passions:"Passions", SoftSkills:"Soft Skills"};
  const Presentation = presentation();
  const Language = language();
  const Passion = passion();
  const Soft = soft();
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
              {Object.entries(buttonName).map(([key,element], index) => (
                <button
                  key={element}
                  id={"btn"+key}
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
        {/* <p>👋 Bonjour, moi c’est Florian MASSART</p> */}
        <p>
          Après une licence obtenue en Droit, j’ai choisi de me reconvertir vers
          ce qui me passionne vraiment : l'informatique. Aujourd’hui, j'ai
          intégré l’Epitech en pré-master pour poursuivre ensuite en Master of
          Science Tech, Numérique & Innovation. J'ai un attrait particulier pour
          le développement et cybersécurité.
        </p>
        <p>
          🔐 J’aime comprendre comment les systèmes fonctionnent — pour mieux
          les concevoir, les sécuriser et les améliorer.
        </p>
        <p>
          🔑 Ma licence m'a permis d'acquérir des compétences analytiques et une
          rigueur qui me font aborder les problématiques sous un angle
          différent.
        </p>
        <p>
          🔑 Mon cursus à l’Epitech me permet d'acquérir des connaissances
          solides en développement, en gestion de projets et en systèmes
          d'information.
        </p>
        <p>
          🧩 Curieux, autonome et déterminé, je recherche une alternance qui me
          permettra de renforcer mes compétences tout en contribuant à des
          projets innovants et sécurisés.
        </p>
        <p>
          🎯 Mon objectif : évoluer dans un environnement stimulant, apprendre
          chaque jour et devenir un professionnel complet dans le monde de la
          tech.
        </p>
      </div>
    </>
  );
}

function language() {
  return (
    <>
      <div id="elementLanguage">
        <div className="packLanguage">
          <img className="picFlag"src={frFlag} alt="frFlag" />
          <div className="typeLanguage"><strong>Français</strong></div>
          <div className="typeLanguage"><i>Langue Maternelle</i></div>

        </div>
        <div className="packLanguage">
          <img className="picFlag"src={ukFlag} alt="ukFlag" />
          <div className="typeLanguage"><strong>Anglais</strong></div>
          <div className="typeLanguage"><i>B2</i></div>

        </div>
        <div className="packLanguage">
          <img className="picFlag"src={itFlag} alt="itFlag" />
          <div className="typeLanguage"><strong>Italien</strong></div>
          <div className="typeLanguage"><i>A2</i></div>

        </div>
      </div>
    </>
  );
}

function passion(){
  return(<>
    <div id="elementPassion">
      <p>🥋 Judo : Détenteur d'une ceinture Bleue ayant participé à des compétitions</p>
      <p>📖 Animé : Passionné d'isekai (le héro est envoyé dans un autre monde et nous suivons ses péripéties)</p>
      <p>🎮 Jeux Vidéo : Je suis attiré par les jeux de type FPS/TPS, looter shooter</p>
      <p>🏆 Sport : j'ai pu pratiquer différents sports en plus du judo tel que l'escalade, le tennis, l'escrime et le ski alpin</p>

    </div>
  </>)
}

function soft() {
  return (
    <>
      <div id="elementSoft">
        
        <div><strong>Adaptabilité :</strong> je m'efforce de m'adapter à mes interlocuteurs ainsi qu'à leurs attentes dans le but de les satisfaire</div>
        <div><strong>Persévérance :</strong> je cherche toujours les solutions me permettant d'atteindre les objectifs fixés</div>
        <div><strong>Solidarité :</strong> Je suis apprécié pour mon esprit d'équipe et les réussites collectives me tiennent à cœur</div>
        <div><strong>Raisonnement logique :</strong> je sais structurer ma réflexion pour résoudre efficacement des problèmes complexes et prendre des décisions argumentées pour avoir un résultat optimisé</div>
        <div><strong>Sens de la communication :</strong> je démontre des capacités à adapter mon discours à différents interlocuteurs pour permettre la bonne compréhension, favoriser les échanges entre différents intervenants et contribuer à une collaboration efficace</div>
        <div><strong>Discrétion et maîtrise de soi :</strong> je sais gérer mes émotions et ne réagis jamais de façon impulsive</div>
        <div><strong>Gestion du stress :</strong> je suis capable de travailler dans un environnement technique exigeant, avec une approche méthodique me permettant de gérer efficacement les priorités pour résoudre les problèmes sans précipitation </div>
      </div>
    </>
  );
}


export default A_Propos;
