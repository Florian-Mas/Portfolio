import { useState } from "react";
import "./Competences.css";
import imgCsharp from "../image/Image_Programming_Language/Csharp-logo.png";
import imgCSS from "../image/Image_Programming_Language/css-logo.png";
import imgHTML from "../image/Image_Programming_Language/html-logo.png";
import imgJS from "../image/Image_Programming_Language/JavaScript-logo.png";
import imgPHP from "../image/Image_Programming_Language/PHP-logo.png";
import imgPy from "../image/Image_Programming_Language/Python-logo.png";
import imgReact from "../image/Image_Programming_Language/React-logo.png";
import imgBootStrap from "../image/Image_Programming_Language/Bootstrap-logo.png";


function Competences() {
  const programmingLanguage = {
    Csharp: "C#",
    CSS: "CSS",
    HTML: "HTML",
    JavaScript: "JavaScript",
    PHP: "PHP",
    Python: "Python",
  };

  const programmingLanguageExplain = {
    ECsharp:
      "Utilisé lors de projets personnels pour faire des jeux ou des éléments dans des jeux",
    ECSS: "Utilisé avec le HTML pour configurer l'aspect de la page",
    EHTML: "Utilisé pour faire des pages web comme cette page",
    EJavaScript:
      "Utilisé pour faire des effets et des fonctions (cet effet est fait grâce au JavaScript)",
    EPHP: "Utilisé pour faire communiquer ce que l'utilisateur voit avec les données, sans y avoir l'accès",
    EPython:
      "Utilisé pour faire des programmes où le language se rapproche de l'anglais parlé",
  };

  const [curentOver, setCurentOver] = useState(-1);
  const [curentCategory, setCurentCategory] = useState(0);
  const programmingTool = { React: "React", Bootstrap: "Bootstrap" };
  const programmingToolExplain = {
    EReact:
      "Est une librairie JavaScript afin de faire du JavaScript et du HTML mélangé (cette page est en React)",
    EBootstrap:
      "Est un framework permettant de simplifier le CSS (les boutons sont créés avec Bootstrap)",
  };

  const programmingLanguageImg = {
    Csharp: imgCsharp,
    CSS: imgCSS,
    HTML: imgHTML,
    JavaScript: imgJS,
    PHP: imgPHP,
    Python: imgPy,
    React: imgReact,
    Bootstrap: imgBootStrap,
  };

  return (
    <>
      <div id="Competences">
        <div id="cp">COMPETENCES</div>
        <div id="ProgrammingLanguage">
          {Object.entries(programmingLanguage).map(([key, element], index) => (
            <div
              id={key}
              className="PLPosition"
              onMouseOver={() => {
                setCurentOver(index);
                setCurentCategory(1);
                PositionProgrammingLanguageOn(key);
              }}
              onMouseLeave={() => {
                PositionProgrammingLanguageOff(key);
                setCurentOver(-1);
              }}
            >
              <img
                className="ProgrammingLanguageImg"
                src={programmingLanguageImg[key]}
              />
              <div className="ProgrammingLanguageName">{element}</div>
            </div>
          ))}
          {Object.entries(programmingLanguageExplain).map(
            ([key, element], index) => (
              <div
                id={key}
                className={curentOver === index && curentCategory === 1? "overlay" : "overlayNone"}
              >
                {element}
              </div>
            )
          )}
        </div>
        <div id="ProgrammingTool">
          {Object.entries(programmingTool).map(([key, element], index) => (
            <div
              id={key}
              className="PLPosition"
              onMouseOver={() => {
                console.log(index)
                setCurentOver(index);
                setCurentCategory(2);
                PositionProgrammingLanguageOn(key);
              }}
              onMouseLeave={() => {
                PositionProgrammingLanguageOff(key);
                setCurentOver(-1);
              }}
            >
              <img
                className="ProgrammingLanguageImg"
                src={programmingLanguageImg[key]}
              />
              <div className="ProgrammingLanguageName">{element}</div>
            </div>
          ))}
          {Object.entries(programmingToolExplain).map(
            ([key, element], index) => (
              <div
                id={key}
                className={curentOver === index && curentCategory === 2? "overlay" : "overlayNone"}
              >
                {element}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

function PositionProgrammingLanguageOn(name) {
  let ElementGlobal = document.getElementById(name);
  let ElementPagePositionSize = ElementGlobal.getBoundingClientRect();
  console.log(ElementPagePositionSize.top + window.scrollY);
  let ElementText = document.getElementById("E" + name);
  console.log(ElementPagePositionSize.left + window.scrollX);
  ElementText.style.top = ElementPagePositionSize.top + window.scrollY +(ElementPagePositionSize.height/2)+ "px";
  ElementText.style.left = ElementPagePositionSize.left + window.scrollX +(ElementPagePositionSize.width/2)+"px";
  ElementText.style.height = ElementPagePositionSize.height + "px";
  ElementText.style.width = ElementPagePositionSize.width + "px";
  ElementText.style.transform = `translate(-${ElementPagePositionSize.height/2}px,-${ElementPagePositionSize.width/2}px)`
  ElementGlobal.style.opacity = 0;
  
}

function PositionProgrammingLanguageOff(name) {
  let ElementGlobal = document.getElementById(name);
  let ElementPagePositionSize = ElementGlobal.getBoundingClientRect();
  console.log(ElementPagePositionSize.top + window.scrollY);
  let ElementText = document.getElementById("E" + name);
  console.log(ElementPagePositionSize.left + window.scrollX);
  ElementText.style.top = ElementPagePositionSize.top + window.scrollY +(ElementPagePositionSize.height/2)+ "px";
  ElementText.style.left = ElementPagePositionSize.left + window.scrollX +(ElementPagePositionSize.width/2)+ "px";
  console.log(ElementPagePositionSize.height, ElementPagePositionSize.width);
  ElementText.style.height = 10 + "px";
  ElementText.style.width = 10 + "px";
  ElementText.style.transform = `initial`
  ElementGlobal.style.opacity = 1;

}

export default Competences;
