function validate() {
    document.getElementById("form").addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email");

        if (email.value.trim() === "") {
            onError(email, "Enter an email");
        } else {
            if (!validateEmail(email.value.trim())) {
                onError(email, "Enter valid email");
            } else {
                onSuccess(email);
            }
        }
    })
    
}

function onSuccess(input) {
    let parent = input.parentElement;
    let msgEle = parent.querySelector("small");
    msgEle.style.visibility = "hidden";
    msgEle.innerText = "";
    parent.classList.remove("error")
}

function onError(input, message) {
    let parent = input.parentElement;
    let msgEle = parent.querySelector("small");
    msgEle.style.visibility = "visible";
    msgEle.innerText = message;
    parent.classList.add("error");
}

function validateEmail(email) {
    return /^([A-Za-z0-9]{3,20})([.][A-Za-z0-9]{1,10})*([@][A-Za-z]{2,5})+[.][A-Za-z]{2,3}([.][A-Za-z]{2,3})?$/.test(email);
}

function forgot_password(){
    var email = document.getElementById("email");
    let data = {
        email:email.value
    }
    console.log(data);

    $.ajax({
        url:`https://localhost:44327/api/User/ForgotPasswordUser/${email}`,
        type:'POST',
        data:JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        },
        success: function(result){
            console.log(result);
            //localStorage.setItem('token', result.data);
            //window.location.href='../note/dashboard.html';
        },
        error: function(error){
            console.log(error);
        }
    })
}