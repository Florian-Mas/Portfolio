import "./navBar.css";

function Nav_Bar() {
  return (
    <>
      <nav id="navBar">
        <div id="listNavBar">
          <a href="#A_Propos" id="navAP" className="navFixed" role="button">
            A PROPOS
          </a>

          <a href="#Competences" id="navCP" className="navFixed">
            COMPETENCES
          </a>

          <a href="#Formation" id="navFM" className="navFixed">
            FORMATION
          </a>

          <a href="#Experiences" id="navEX" className="navFixed">
            EXPERIENCES
          </a>

          <a href="#Projets" id="navPJ" className="navFixed">
            PROJETS
          </a>

          <a href="#Contact" id="navC" className="navFixed">
            CONTACT
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav_Bar;
