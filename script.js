let passIcon = document.getElementsByClassName("passIcon")[0];
let passInput = document.getElementsByClassName("passInput")[0];


passIcon.addEventListener("click", () => {
    if (passIcon.src.includes("show")) {
        passIcon.src = passIcon.src.replace("show", "hide"); 
        passInput.type = "text" 
    } else {
        passIcon.src = passIcon.src.replace("hide", "show");  
        passInput.type = "password" 
    }

    console.log(passIcon.src);
});
