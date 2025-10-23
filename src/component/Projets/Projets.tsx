import "./Projets.css";
import JobBoardDemo from "../fichier/vidéo/JobBoard demo.gif";
import PortfolioFormaCVDemo from "../fichier/vidéo/PortfolioFormaCV demo.gif";
import HangmanDemo from "../fichier/vidéo/Hangman demo.gif";
import EbaucheJeu3DDemo from "../fichier/vidéo/Ebauche-jeu-3D demo.gif";
import JobBoardPNG from "../fichier/image/JobBoard demo.png";
import PortfolioFormaCVPNG from "../fichier/image/PortfolioFormaCV demo.png";
import HangmanPNG from "../fichier/image/Hangman demo.png";
import EbaucheJeu3DPNG from "../fichier/image/Ebauche-jeu-3D demo.png";
import { useState } from "react";

const projetsName = {
  JobBoard: <strong>JobBoard</strong>,
  PortfolioFormatCV: <strong>Portfolio Format CV</strong>,
  Hangman: <strong>Hangman</strong>,
  EbaucheJeu3D: <strong>Ebauche jeu 3D</strong>,
};

function Projets() {
  const [curentOver, setCurentOver] = useState(-1);
  let left = false;

  const projetsDescription:Record<string, string> = {
    JobBoard:
      "Travail de groupe pour la création d’un site d’annonces pour l’emploi avec la possibilité de s’inscrire, de se connecter, de postuler et de créer des annonces. L'annonceur peut ensuite voir quelle personne a postulé avec les éléments du formulaire pour le recontacter.",
    PortfolioFormatCV:
      "Réalisation de mon portfolio en format CV. Cela a été réalisé sur une seule page où les éléments s'affichent en fonction de la catégorie choisie.",
    Hangman:
      "Réalisation d’un jeu du pendu en python avec un choix de mots aléatoires sélectionnés dans une liste personnalisée tout en enregistrant le meilleur score pour chacun des mots. Il est possible d'ajouter des éléments dans la liste afin que le programme essaie de les faire découvir au joueur.",
    EbaucheJeu3D:
      "Elaboration d’un système de déplacement, de mouvement de caméra, de raycast et de gravité sur Unity. Ce projet personnel utilise uniquement des scripts destinés à être importés par la suite sur tout élément permettant de faire une action.",
  };
  const projetsVideo : Record<string, JSX.Element>= {
    JobBoard: <img src={JobBoardDemo} className="GIFDemo" />,
    PortfolioFormatCV: <img src={PortfolioFormaCVDemo} className="GIFDemo" />,
    Hangman: <img src={HangmanDemo} className="GIFDemo" />,
    EbaucheJeu3D: <img src={EbaucheJeu3DDemo} className="GIFDemo" />,
  };
  const projetsPng : Record<string, JSX.Element>= {
    JobBoard: <img src={JobBoardPNG} className="PNGDemo" />,
    PortfolioFormatCV: <img src={PortfolioFormaCVPNG} className="PNGDemo" />,
    Hangman: <img src={HangmanPNG} className="PNGDemo" />,
    EbaucheJeu3D: <img src={EbaucheJeu3DPNG} className="PNGDemo" />,
  };

  const projetsLanguage:Record<string, JSX.Element> = {
    JobBoard: <i>HTML / CSS / JavaScript / Bootstrap / PHP / MySQL</i>,
    PortfolioFormatCV: <i>HTML / CSS / JavaScript / Bootstrap</i>,
    Hangman: <i>Python</i>,
    EbaucheJeu3D: <i>C#</i>,
  };

  return (
    <>
      <div id="Projets">
        <div id="PROJETS">PROJETS</div>
        <div id="TimeLineProjetsElement">
          <div id="TheTimeLine">
            {Object.entries(projetsName).map(([key, element], index) => {
              left = !left;
              return (
                <div
                  id={key}
                  className={
                    left
                      ? "ElementOnLeft arrowLeft pointLeft"
                      : "ElementOnRight arrowRight pointRight"
                  }
                  onMouseOver={() => {
                    setCurentOver(index);
                  }}
                  onMouseLeave={() => {
                    setCurentOver(-1);
                  }}
                >
                  <div className="projetsVideo">{curentOver==index ? projetsVideo[key]:projetsPng[key]}
                  </div>
                  

                  <div></div>
                  <div className="projetsName">{element}</div>
                  <div className="projetsDescription">
                    {projetsDescription[key]}
                  </div>
                  <div className="projetsLanguage">{projetsLanguage[key]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projets;
