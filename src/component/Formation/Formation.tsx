import { useState } from "react";
import "./Formation.css";

function Formation() {
  const [curentOver, setCurentOver] = useState(-1);
  const FormationName = {
    Epitech: <strong>Epitech – Marseille</strong>,
    UniversiteLaw: <strong>Université Aix Marseille</strong>,
    LyceeMelizan: <strong>Lycée Mélizan - Marseille</strong>,
  };

  const FormationaType = {
    Epitech: "Master of Science Tech, Numérique & Innovation",
    UniversiteLaw: "Licence de droit obtenue – Option droit privé",
    LyceeMelizan: "Bac S - Reçu avec mention",
  };

  const FormationaDate = {
    Epitech: <i>2025 - 2028</i>,
    UniversiteLaw: <i>2020 - 2024</i>,
    LyceeMelizan: <i>2020</i>,
  };

  return (
    <>
      <div id="Formation">
        <div id="FORMATION">FORMATION</div>
        <div
          id="TimeLineFormationElement"
          onMouseOver={() => TimeLineEventListener(1)}
          onMouseLeave={() => TimeLineEventListener(2)}
        >
          {Object.entries(FormationName).map(([key, element], index) => (
            <div id="key">
              <div
                id={
                  index === Object.entries(FormationName).length - 1
                    ? "LastItemOfFormationName"
                    : ""
                }
                className="TimeLineElementFormation"
              >
                <div className="timeLineFormationName">{element}</div>
                <div className="timeLineFormationDate">
                  {FormationaDate[key]}
                </div>
                <div className="timeLineFormationType">
                  {FormationaType[key]}
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
      .getElementById("TimeLineFormationElement")
      ?.addEventListener("wheel", TimeLineEffect);
  }
  if (statut === 2) {
    document
      .getElementById("TimeLineFormationElement")
      ?.removeEventListener("wheel", TimeLineEffect);
  }
}

function TimeLineEffect(e) {
  const timeLineElement = document.getElementById("TimeLineFormationElement");
  const timeLineElementPos = timeLineElement.getBoundingClientRect();

  const timeLineLastElementPos = document
    .getElementById("LastItemOfFormationName")
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

export default Formation;
