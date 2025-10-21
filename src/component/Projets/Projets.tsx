import "./Projets.css";

const projetsName = {
  JobBoard: "JobBoard",
  PortfolioFormatCV: " Portfolio Forma CV",
  Hangman: "Hangman",
  EbaucheJeu3D: "Ebauche jeu 3D",
};

function Projets() {
  let left = false;

  const projetsDescription = {
    JobBoard:
      "Travail de Groupe pour la création d’un site d’annonce pour l’emploi avec la possibilité de s’inscrire, de se connecter, de postuler et de créer des annonces. Celui qui a posté l'annonce peut ensuite voir quel personne à effectivement postulé avec les éléments pour le recontacter",
    PortfolioFormatCV:
      "Réalisation de mon portfolio en format CV, cela a été fait sur une seul page ou les éléments s'affiche en fonction de la catégorie choisi",
    Hangman:
      "Réalisation d’un jeu du pendu en python avec un choix de mot aléatoire choisi dans une liste personnalisée et enregistrant le meilleur score pour chacun des mots. il est possible de'ajouter des éléments dans la liste afin que le programme essaye de nous les faire découvir",
    EbaucheJeu3D:
      "Elaboration d’un système de déplacement, de mouvement de caméra, de raycast et de gravité sur Unity lors d’un projet personnel en utilisant uniquement des scripts permettant par la suite d'importer ces scripts sur tout objets permettant de faire l'action",
  };
  const projetsVideo = {
    JobBoard: "aaaaa",
    PortfolioFormatCV: "aaaaa",
    Hangman: "aaaaa",
    EbaucheJeu3D: "aaaaa",
  };

  const projetsLanguage = {
    JobBoard: "HTML / CSS / JavaScript / Bootstrap / PHP / MySQL",
    PortfolioFormatCV: "HTML / CSS / JavaScript / Bootstrap",
    Hangman: "Python",
    EbaucheJeu3D: "C#",
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
