var bg_color_base_button = "#FFFFFF"
var bg_color_selected_button = "#551C55"
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

function Button_to_move_not_selected(ID,BoxID){
    document.getElementById(ID).style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById(ID).style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById(ID).style.transform="translateX(0vw)"},1000);
    document.getElementById(BoxID).style.display="none";
    document.getElementById(ID).style.background = bg_color_base_button
    document.getElementById(ID).addEventListener("mouseover",()=>{
        document.getElementById(ID).style.background = bg_color_over_button;
        document.getElementById(ID).style.boxShadow = sb_color_over_button;
        });
    document.getElementById(ID).addEventListener("mouseleave",()=>{
        document.getElementById(ID).style.background = bg_color_base_button;
        document.getElementById(ID).style.boxShadow = sb_color_base_button;
        });
    document.getElementById(ID).style.borderColor = "#8A7070";
    document.getElementById(ID).style.color = "black";

}

function Button_to_move_selected(ID,BoxID){
    document.getElementById(ID).style.transform="translateX(-40vw)";
    setTimeout(()=>{document.getElementById(ID).style.margin="10vh 0 0"},1000);
    setTimeout(()=>{document.getElementById(ID).style.transform="translateX(0vw)"},1000);
    document.getElementById(BoxID).style.display="inline";
    document.getElementById("Form_contact").style.display = "none";
    document.getElementById(ID).style.background = bg_color_selected_button;
    document.getElementById(ID).addEventListener("mouseover",()=>{document.getElementById(ID).style.background = bg_color_selected_button;});
    document.getElementById(ID).addEventListener("mouseleave",()=>{document.getElementById(ID).style.background = bg_color_selected_button;})
    document.getElementById(ID).style.borderColor = "pink";
    document.getElementById(ID).style.color = bg_color_base_button;

}

function Button_Profile(){
    
    Button_to_move_not_selected("Project","little_box_Project")
    Button_to_move_not_selected("Education","little_box_Education")
    Button_to_move_not_selected("Work_experience","little_box_Work_experience")
    Button_to_move_not_selected("Activity","little_box_Activity")
    Button_to_move_selected("Profile","little_box_Profile")
}

function Button_Project(){
    
    Button_to_move_not_selected("Profile","little_box_Profile")
    Button_to_move_not_selected("Education","little_box_Education")
    Button_to_move_not_selected("Work_experience","little_box_Work_experience")
    Button_to_move_not_selected("Activity","little_box_Activity")
    Button_to_move_selected("Project","little_box_Project")
}

function Button_Education(){
    
    Button_to_move_not_selected("Profile","little_box_Profile")
    Button_to_move_not_selected("Project","little_box_Project")
    Button_to_move_not_selected("Work_experience","little_box_Work_experience")
    Button_to_move_not_selected("Activity","little_box_Activity")
    Button_to_move_selected("Education","little_box_Education")
}

function Button_Work_experience(){
    
    Button_to_move_not_selected("Profile","little_box_Profile")
    Button_to_move_not_selected("Project","little_box_Project")
    Button_to_move_not_selected("Education","little_box_Education")
    Button_to_move_not_selected("Activity","little_box_Activity")
    Button_to_move_selected("Work_experience","little_box_Work_experience")
}

function Button_Activity(){
    
    Button_to_move_not_selected("Profile","little_box_Profile")
    Button_to_move_not_selected("Project","little_box_Project")
    Button_to_move_not_selected("Education","little_box_Education")
    Button_to_move_not_selected("Work_experience","little_box_Work_experience")
    Button_to_move_selected("Activity","little_box_Activity")
}

function Button_Contact_Form(){
    if (document.getElementById("Form_contact").style.display == "flex"){
        document.getElementById("Form_contact").style.display = "none";
        }
    else{document.getElementById("Form_contact").style.display = "flex";}

}



function Send_Contact_Form(){
    event.preventDefault()
    alert("Ce bouton ne sert que de décoration. Rien n'a été envoyé");
    
}