function showInSignup() {
    var pwd = document.getElementById("s-pwd");
    var image = document.getElementById("s-eye");
    if (pwd.type === "password") {
        pwd.type = "text";
        image.setAttribute('src', '../../assets/Order_Login/visible.svg');
    }
    else {
        pwd.type = "password";
        image.setAttribute('src', '../../assets/Order_Login/hidden.svg');
    }
}

function validate_signup() {
    document.getElementById("s-form").addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("s-name");
        let email = document.getElementById("s-email");
        let pwd = document.getElementById("s-pwd");
        let mobile = document.getElementById("s-mobile");

        if (name.value.trim() === "") {
                onError(name, "Enter Name");
        } else {
            if (!validateName(name.value.trim())) {
                onError(name, "Please enter atleast 3 character with first letter capital");
            } else {
                onSuccess(name);
            }
        }

        if (mobile.value.trim() === "") {
            onError(mobile, "Enter Mobile number");
        } else {
            if (!validateMobile(mobile.value.trim())) {
                onError(mobile, "Please Enter 10 digit Mobile Number");
            } else {
                onSuccess(mobile);
            }
        }

        if (email.value.trim() === "") {
            onError(email, "Enter an email");
        } else {
            if (!validateEmail(email.value.trim())) {
                onError(email, "Enter valid email");
            } else {
                onSuccess(email);
            }
        }

        if (pwd.value.trim() === "") {
            onError(pwd, "Enter password");
        } else {
            if (!validatePwd(pwd.value.trim())) {
                onError(pwd, "Please Enter Atleast 8 character with Alteast one numeric,special character");
            } else {
                onSuccess(pwd);
            }
        }
    })
    
}