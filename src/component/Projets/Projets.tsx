import "./Projets.css";

const projetsName = {
  JobBoard: <strong>JobBoard</strong>,
  PortfolioFormatCV: <strong>Portfolio Format CV</strong>,
  Hangman: <strong>Hangman</strong>,
  EbaucheJeu3D: <strong>Ebauche jeu 3D</strong>,
};

function Projets() {
  let left = false;

  const projetsDescription = {
    JobBoard:
      "Travail de groupe pour la création d’un site d’annonces pour l’emploi avec la possibilité de s’inscrire, de se connecter, de postuler et de créer des annonces. L'annonceur peut ensuite voir quelle personne a postulé avec les éléments du formulaire pour le recontacter.",
    PortfolioFormatCV:
      "Réalisation de mon portfolio en format CV. Cela a été réalisé sur une seule page où les éléments s'affichent en fonction de la catégorie choisie.",
    Hangman:
      "Réalisation d’un jeu du pendu en python avec un choix de mot aléatoire sélectionné dans une liste personnalisée tout en enregistrant le meilleur score pour chacun des mots. Il est possible d'ajouter des éléments dans la liste afin que le programme essaie de les faire découvir au joueur.",
    EbaucheJeu3D:
      "Elaboration d’un système de déplacement, de mouvement de caméra, de raycast et de gravité sur Unity. Ce projet personnel utilise uniquement des scripts permettant par la suite d'importer ces scripts sur tout élément permettant de faire une action.",
  };
  const projetsVideo = {
    JobBoard: "aaaaa",
    PortfolioFormatCV: "aaaaa",
    Hangman: "aaaaa",
    EbaucheJeu3D: "aaaaa",
  };

  const projetsLanguage = {
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
                >
                  <div className="projetsVideo">{projetsVideo[key]}</div>
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
