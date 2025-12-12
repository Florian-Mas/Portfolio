import "./Contact.css";
import GitHubPic from "../image/Image_Social/GitHub-logo.png";
import LinkedInPic from "../image/Image_Social/LinkedIn-logo.png";
import mailPic from "../image/Image_Social/mail-logo.png";
import DLPic from "../image/Image_Social/DL-logo.png";
import CV from "../fichier/CV Florian MASSART.pdf";
declare const emailjs: any;

function Contact() {
  return (
    <>
      <div id="Contact">
        <div id="CONTACT">CONTACT</div>
        <div id="MySocial">
          <a
            href="https://github.com/Florian-Mas?tab=repositories"
            target="_blank"
          >
            <img src={GitHubPic} alt="Aller sur mon GitHub" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/florian-massart-b886b3377/"
            target="_blank"
          >
            <img src={LinkedInPic} alt="Aller sur mon LinkedIn" />
            LinkedIn
          </a>
          <a href="mailto:fmassart2002@gmail.com">
            <img src={mailPic} alt="M'envoyer un mail" id="TheMail" />
            Mail
          </a>
        </div>
        <form id="Form_contact" onSubmit={Send_Contact_Form}>
          <label htmlFor="who">Qui êtes vous :</label>
          <input type="text" id="who" name="who" />
          <label htmlFor="question">Que voulez vous me demander :</label>
          <input type="text" id="question" name="question" />
          <label htmlFor="come_back">Comment vous recontacter :</label>
          <input type="text" id="come_back" name="come_back" />
          <input
            type="submit"
            value="Envoyer"
            id="send"
            className="btn btn-light"
            
          />
        </form>
        <div id="CVLinkDiv">
          <a href={CV} download="CV Florian MASSART.pdf">
            <button id="buttonCV" className="btn btn-light">
              <img src={DLPic} alt="DLPic" />
              Télécharger mon CV
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

function Send_Contact_Form(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
 const who = (document.getElementById("who") as HTMLInputElement)?.value;
  const question = (document.getElementById("question") as HTMLInputElement)?.value;
  const come_back = (document.getElementById("come_back") as HTMLInputElement)?.value;
  var params = {
    name: who,
    message: question,
    reply: come_back,
  };

  const serviceID = "service_contactPortfolio";
  const templateID = "template_e976uzg";
  emailjs
    .send(serviceID, templateID, params)
    .then(() => {
      (document.getElementById("who") as HTMLInputElement).value = "";
      (document.getElementById("question") as HTMLInputElement).value = "";
      (document.getElementById("come_back") as HTMLInputElement).value = "";
      alert("Le message a bien été envoyé");
    })
    .catch(() =>
      alert("Une erreur est survenue, Le message n'a pas été envoyé")
    );
}

export default Contact;
