import "./App.css";
import Nav_Bar from "./component/navBar/navBar";
import Pic from "./component/firstPic/Pic";
import A_Propos from "./component/APropos/APropos";
import Competences from "./component/Competences/Competences";
import Formation from "./component/Formation/Formation";
import Experiences from "./component/Experiences/Experiences";
import Projets from "./component/Projets/Projets";

function App() {
  return (
    <div>
      <Nav_Bar />
      <Pic />
      <A_Propos />
      <Competences/>
      <Formation/>
      <Experiences/>
      <Projets/>
    </div>
  );
}

export default App;
