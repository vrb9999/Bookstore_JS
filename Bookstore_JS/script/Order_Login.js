function signup_hide(){
    let signup_form = document.getElementById("signup");
    let login_form = document.getElementById("login");

    let login_link = document.getElementById('a1');
    let signup_link = document.getElementById('a2');

    let indicator = document.getElementById("hr");
    indicator.style.marginLeft = "85px";
    indicator.style.visibility="visible";

    signup_form.style.display = "none";
    login_form.style.display = "block";
    
    login_link.style.opacity="1";
    signup_link.style.opacity="0.5";
}

function login_hide(){
    let signup_form = document.getElementById("signup");
    let login_form = document.getElementById("login");

    let login_link = document.getElementById('a1');
    let signup_link = document.getElementById('a2');

    let indicator = document.getElementById("hr");
    indicator.style.marginLeft = "295px";
    indicator.style.visibility="visible";

    signup_form.style.display = "flex";
    login_form.style.display = "none";

    login_link.style.opacity="0.5";
    signup_link.style.opacity="1";
}

function showInLogin() {
    var pwd = document.getElementById("pwd");
    if (pwd.type === "password") {
        pwd.type = "text";
    }
    else {
        pwd.type = "password";
    }
}
function showInSignup() {
    var pwd = document.getElementById("s-pwd");
    if (pwd.type === "password") {
        pwd.type = "text";
    }
    else {
        pwd.type = "password";
    }
}