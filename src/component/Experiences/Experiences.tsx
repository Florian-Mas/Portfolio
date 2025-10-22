import { useState } from "react";
import "./Experiences.css";

function Experiences() {
  const [curentOver, setCurentOver] = useState(-1);
  const ExperiencesName = {
    AED: <strong>Assistant d’éducation - Collège Le Ruissatel - Marseille</strong>,
    VCC: <strong>Volontaire Service Civique - Pôle Emploi - Marseille</strong>,
    coursSoutien: <strong>Cours particuliers/soutien scolaire</strong>,
  };

  const ExperiencesaType = {
    AED: "Participation à la vie scolaire, veille au respect du règlement intérieur, collaboration à l’amélioration des conditions d’accueil du public.",
    VCC: "Accompagnement des usagers dans l’utilisation des outils numériques, facilitateur d’inclusion numérique.",
    coursSoutien: "Aide aux devoirs et cours de soutien.",
  };

  const ExperiencesaDate = {
    AED: <i>2024-2025 (1 an)</i>,
    VCC: <i>2022 (8mois)</i>,
    coursSoutien: <i>2019 (1 an)</i>,
  };

  return (
    <>
      <div id="Experiences">
        <div id="EXPERIENCES">EXPERIENCES</div>
        <div
          id="TimeLineExperiencesElement"
          onMouseOver={() => TimeLineEventListener(1)}
          onMouseLeave={() => TimeLineEventListener(2)}
        >
          {Object.entries(ExperiencesName).map(([key, element], index) => (
            <div id="key">
              <div
                id={
                  index === Object.entries(ExperiencesName).length - 1
                    ? "LastItemOfExperiencesName"
                    : ""
                }
                className="TimeLineElementExperiences"
              >
                <div className="timeLineExperiencesName">{element}</div>
                <div className="timeLineExperiencesDate">
                  {ExperiencesaDate[key]}
                </div>
                <div className="timeLineExperiencesType">
                  {ExperiencesaType[key]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
let curentDTL = 0;


function TimeLineEventListener(statut) {
  if (statut === 1) {
    document
      .getElementById("TimeLineExperiencesElement")
      ?.addEventListener("wheel", TimeLineEffect);
  }
  if (statut === 2) {
    document
      .getElementById("TimeLineExperiencesElement")
      ?.removeEventListener("wheel", TimeLineEffect);
  }
}

function TimeLineEffect(e) {
  const timeLineElement = document.getElementById("TimeLineExperiencesElement");
  const timeLineElementPos = timeLineElement.getBoundingClientRect();

  const timeLineLastElementPos = document
    .getElementById("LastItemOfExperiencesName")
    ?.getBoundingClientRect();
  

  e.preventDefault();
  //console.log(e);
  //console.log("pose time line",timeLineElementPos.left)
  //console.log("pose window",(window.innerWidth/4))
  let deplacementTimeLine = e.deltaY;
  //console.log("pose delta",deplacementTimeLine)
  

  if (10 < deplacementTimeLine) {
    if (timeLineElementPos.left > window.innerWidth / 4) {
      curentDTL = curentDTL;
    } else {
      curentDTL += 20;
    }
  }
  if (-10 > deplacementTimeLine) {
    if (timeLineLastElementPos.left < window.innerWidth / 4) {
      curentDTL = curentDTL;
    } else {
      curentDTL -= 20;
    }
  }
  
  //console.log(curentDTL)
  timeLineElement.style.transform = `translateX(${curentDTL}px)`;
}

export default Experiences;
