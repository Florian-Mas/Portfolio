var bg_color_base_button = "#FFFFFF"
var bg_color_selected_button = "#9C8787"
var bg_color_over_button = "#8A7070";

var sb_color_base_button = "#8A7070 1px 5px 16px;";
var sb_color_selected_button = "#8A7070 0px 0px 0px;";
var sb_color_over_button = "#8A7070 1px 1px 16px";

function Button_Disapear_And_Load(button){
    button.style.display = "none";
    document.getElementById("Loading_screen").style.display = "none";
    document.getElementById("Main_menu").style.display = "flex";
    document.getElementById("Body").style.backgroundColor = "transparent"
    document.getElementById("Body").style.backgroundSize = "100vw 100vh"
    document.getElementById("Body").style.backgroundImage = "url(Complet_fond_lissé_avec_effet.png)"
    
}
//
function Button_Profil() {
    
    
    document.getElementById("Profil").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Profil").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Profil").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Profil").style.display="inline";
    document.getElementById("Form_contact").style.display = "none";
    


    document.getElementById("Projet").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Projet").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Projet").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Projet").style.display="none";
    document.getElementById("Projet").addEventListener("mouseover",()=>{
        document.getElementById("Projet").style.background = bg_color_over_button;
        document.getElementById("Projet").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Projet").addEventListener("mouseleave",()=>{
        document.getElementById("Projet").style.background = bg_color_base_button;
        document.getElementById("Projet").style.boxShadow = sb_color_base_button;
        });
    

    document.getElementById("Formation").style.transform="translateX(-38vw)";
    setTimeout(()=>{document.getElementById("Formation").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Formation").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Formation").style.display="none";
    document.getElementById("Formation").addEventListener("mouseover",()=>{
        document.getElementById("Formation").style.background = bg_color_over_button;
        document.getElementById("Formation").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Formation").addEventListener("mouseleave",()=>{
        document.getElementById("Formation").style.background = bg_color_base_button;
        document.getElementById("Formation").style.boxShadow = sb_color_base_button;
        });


    document.getElementById("Expériences").style.transform="translateX(-35vw)";
    setTimeout(()=>{document.getElementById("Expériences").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Expériences").style.transform="translateX(0vw)"},1000);    
    document.getElementById("little_box_Expériences").style.display="none";
    document.getElementById("Expériences").addEventListener("mouseover",()=>{
        document.getElementById("Expériences").style.background = bg_color_over_button;
        document.getElementById("Expériences").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Expériences").addEventListener("mouseleave",()=>{
        document.getElementById("Expériences").style.background = bg_color_base_button;
        document.getElementById("Expériences").style.boxShadow = sb_color_base_button;
        });


    document.getElementById("Activité").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Activité").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Activité").style.transform="translateX(0vw)"},1000); 
    document.getElementById("little_box_Activité").style.display="none";
    document.getElementById("Activité").addEventListener("mouseover",()=>{
        document.getElementById("Activité").style.background = bg_color_over_button;
        document.getElementById("Activité").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Activité").addEventListener("mouseleave",()=>{
        document.getElementById("Activité").style.background = bg_color_base_button;
        document.getElementById("Activité").style.boxShadow = sb_color_base_button;
        });
}
//
function Button_Projets() {
    document.getElementById("Profil").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Profil").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Profil").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Profil").style.display="none";
    document.getElementById("Profil").addEventListener("mouseover",()=>{
        document.getElementById("Profil").style.background = bg_color_over_button;
        document.getElementById("Profil").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Profil").addEventListener("mouseleave",()=>{
        document.getElementById("Profil").style.background = bg_color_base_button;
        document.getElementById("Profil").style.boxShadow = sb_color_base_button;
        });

    document.getElementById("Projet").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Projet").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Projet").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Projet").style.display="inline";

    

    document.getElementById("Formation").style.transform="translateX(-38vw)";
    setTimeout(()=>{document.getElementById("Formation").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Formation").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Formation").style.display="none";
    document.getElementById("Formation").addEventListener("mouseover",()=>{
        document.getElementById("Formation").style.background = bg_color_over_button;
        document.getElementById("Formation").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Formation").addEventListener("mouseleave",()=>{
        document.getElementById("Formation").style.background = bg_color_base_button;
        document.getElementById("Formation").style.boxShadow = sb_color_base_button;
        });


    document.getElementById("Expériences").style.transform="translateX(-35vw)";
    setTimeout(()=>{document.getElementById("Expériences").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Expériences").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Expériences").style.display="none";
    document.getElementById("Expériences").addEventListener("mouseover",()=>{
        document.getElementById("Expériences").style.background = bg_color_over_button;
        document.getElementById("Expériences").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Expériences").addEventListener("mouseleave",()=>{
        document.getElementById("Expériences").style.background = bg_color_base_button;
        document.getElementById("Expériences").style.boxShadow = sb_color_base_button;
        });


    document.getElementById("Activité").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Activité").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Activité").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Activité").style.display="none";
    document.getElementById("Activité").addEventListener("mouseover",()=>{
        document.getElementById("Activité").style.background = bg_color_over_button;
        document.getElementById("Activité").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Activité").addEventListener("mouseleave",()=>{
        document.getElementById("Activité").style.background = bg_color_base_button;
        document.getElementById("Activité").style.boxShadow = sb_color_base_button;
        });
}
//
function Button_Formation() {
    document.getElementById("Profil").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Profil").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Profil").style.transform="translateX(0vw)"},1000);;
    document.getElementById("little_box_Profil").style.display="none";
    document.getElementById("Profil").addEventListener("mouseover",()=>{
        document.getElementById("Profil").style.background = bg_color_over_button;
        document.getElementById("Profil").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Profil").addEventListener("mouseleave",()=>{
        document.getElementById("Profil").style.background = bg_color_base_button;
        document.getElementById("Profil").style.boxShadow = sb_color_base_button;
        });

    document.getElementById("Projet").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Projet").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Projet").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Projet").style.display="none";
    document.getElementById("Projet").addEventListener("mouseover",()=>{
        document.getElementById("Projet").style.background = bg_color_over_button;
        document.getElementById("Projet").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Projet").addEventListener("mouseleave",()=>{
        document.getElementById("Projet").style.background = bg_color_base_button;
        document.getElementById("Projet").style.boxShadow = sb_color_base_button;
        });
    

    document.getElementById("Formation").style.transform="translateX(-38vw)";
    setTimeout(()=>{document.getElementById("Formation").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Formation").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Formation").style.display="inline";
    


    document.getElementById("Expériences").style.transform="translateX(-35vw)";
    setTimeout(()=>{document.getElementById("Expériences").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Expériences").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Expériences").style.display="none";
    document.getElementById("Expériences").addEventListener("mouseover",()=>{
        document.getElementById("Expériences").style.background = bg_color_over_button;
        document.getElementById("Expériences").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Expériences").addEventListener("mouseleave",()=>{
        document.getElementById("Expériences").style.background = bg_color_base_button;
        document.getElementById("Expériences").style.boxShadow = sb_color_base_button;
        });


    document.getElementById("Activité").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Activité").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Activité").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Activité").style.display="none";
    document.getElementById("Activité").addEventListener("mouseover",()=>{
        document.getElementById("Activité").style.background = bg_color_over_button;
        document.getElementById("Activité").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Activité").addEventListener("mouseleave",()=>{
        document.getElementById("Activité").style.background = bg_color_base_button;
        document.getElementById("Activité").style.boxShadow = sb_color_base_button;
        });
}
//
function Button_Expériences() {

    document.getElementById("Profil").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Profil").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Profil").style.transform="translateX(0vw)"},1000);;
    document.getElementById("little_box_Profil").style.display="none";
    document.getElementById("Profil").addEventListener("mouseover",()=>{
        document.getElementById("Profil").style.background = bg_color_over_button;
        document.getElementById("Profil").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Profil").addEventListener("mouseleave",()=>{
        document.getElementById("Profil").style.background = bg_color_base_button;
        document.getElementById("Profil").style.boxShadow = sb_color_base_button;
        });

    document.getElementById("Projet").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Projet").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Projet").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Projet").style.display="none";
    document.getElementById("Projet").addEventListener("mouseover",()=>{
        document.getElementById("Projet").style.background = bg_color_over_button;
        document.getElementById("Projet").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Projet").addEventListener("mouseleave",()=>{
        document.getElementById("Projet").style.background = bg_color_base_button;
        document.getElementById("Projet").style.boxShadow = sb_color_base_button;
        });
    

    document.getElementById("Formation").style.transform="translateX(-38vw)";
    setTimeout(()=>{document.getElementById("Formation").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Formation").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Formation").style.display="none";
    document.getElementById("Formation").addEventListener("mouseover",()=>{
        document.getElementById("Formation").style.background = bg_color_over_button;
        document.getElementById("Formation").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Formation").addEventListener("mouseleave",()=>{
        document.getElementById("Formation").style.background = bg_color_base_button;
        document.getElementById("Formation").style.boxShadow = sb_color_base_button;
        });


    document.getElementById("Expériences").style.transform="translateX(-35vw)";
    setTimeout(()=>{document.getElementById("Expériences").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Expériences").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Expériences").style.display="inline";
    


    document.getElementById("Activité").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Activité").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Activité").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Activité").style.display="none";
    document.getElementById("Activité").addEventListener("mouseover",()=>{
        document.getElementById("Activité").style.background = bg_color_over_button;
        document.getElementById("Activité").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Activité").addEventListener("mouseleave",()=>{
        document.getElementById("Activité").style.background = bg_color_base_button;
        document.getElementById("Activité").style.boxShadow = sb_color_base_button;
        });
}
//
function Button_Activité() {
    document.getElementById("Profil").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Profil").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Profil").style.transform="translateX(0vw)"},1000);;
    document.getElementById("little_box_Profil").style.display="none";
    document.getElementById("Profil").addEventListener("mouseover",()=>{
        document.getElementById("Profil").style.background = bg_color_over_button;
        document.getElementById("Profil").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Profil").addEventListener("mouseleave",()=>{
        document.getElementById("Profil").style.background = bg_color_base_button;
        document.getElementById("Profil").style.boxShadow = sb_color_base_button;
        });

    document.getElementById("Projet").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Projet").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Projet").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Projet").style.display="none";
    document.getElementById("Projet").addEventListener("mouseover",()=>{
        document.getElementById("Projet").style.background = bg_color_over_button;
        document.getElementById("Projet").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Projet").addEventListener("mouseleave",()=>{
        document.getElementById("Projet").style.background = bg_color_base_button;
        document.getElementById("Projet").style.boxShadow = sb_color_base_button;
        });
    

    document.getElementById("Formation").style.transform="translateX(-38vw)";
    setTimeout(()=>{document.getElementById("Formation").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Formation").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Formation").style.display="none";
    document.getElementById("Formation").addEventListener("mouseover",()=>{
        document.getElementById("Formation").style.background = bg_color_over_button;
        document.getElementById("Formation").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Formation").addEventListener("mouseleave",()=>{
        document.getElementById("Formation").style.background = bg_color_base_button;
        document.getElementById("Formation").style.boxShadow = sb_color_base_button;
        });


    document.getElementById("Expériences").style.transform="translateX(-35vw)";
    setTimeout(()=>{document.getElementById("Expériences").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Expériences").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Expériences").style.display="none";
    document.getElementById("Expériences").addEventListener("mouseover",()=>{
        document.getElementById("Expériences").style.background = bg_color_over_button;
        document.getElementById("Expériences").style.boxShadow = sb_color_over_button;
        });
    document.getElementById("Expériences").addEventListener("mouseleave",()=>{
        document.getElementById("Expériences").style.background = bg_color_base_button;
        document.getElementById("Expériences").style.boxShadow = sb_color_base_button;
        });


    document.getElementById("Activité").style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById("Activité").style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById("Activité").style.transform="translateX(0vw)"},1000);
    document.getElementById("little_box_Activité").style.display="inline";
    
    
}
//
function Button_Contact_Form(){
    if (document.getElementById("Form_contact").style.display == "none"){
        document.getElementById("Form_contact").style.display = "flex";
        }
    else{document.getElementById("Form_contact").style.display = "none";}

}



function azerty(){
    event.preventDefault()
    alert("Ce bouton sert que de décoration. Rien n'a été envoyé");
    
}