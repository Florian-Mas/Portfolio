import "./App.css";
import Nav_Bar from "./component/navBar/navBar";
import Pic from "./component/firstPic/Pic";
import A_Propos from "./component/APropos/APropos";
import Competences from "./component/Competences/Competences";

function App() {
  return (
    <div>
      <Nav_Bar />
      <Pic />
      <A_Propos />
      <Competences/>
    </div>
  );
}

export default App;
