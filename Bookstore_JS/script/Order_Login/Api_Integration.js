function login(){
    let email = document.getElementById("email");
    let password = document.getElementById("pwd");
    let data = {
        email:email.value,
        password:password.value
    }
    console.log(data);

    $.ajax({
        url:'https://localhost:44327/api/User/Login',
        type:'POST',
        data:JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        },
        success: function(result){
            console.log(result);
            localStorage.setItem('token', result.data);
            window.location.href='../Dashboard/dashboard.html';
        },
        error: function(error){
            console.log(error);
        }
    })
}

function register(){
    let name = document.getElementById("s-name");
    let email = document.getElementById("s-email");
    let password = document.getElementById("s-pwd");
    let mobile = document.getElementById("s-mobile");
    let data = {
        fullName:name.value,
        email:email.value,
        password:password.value,
        mobile:mobile.value
    }
    console.log(data);

    $.ajax({
        url:'https://localhost:44327/api/User/Register',
        type:'POST',
        data:JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        },
        success: function(result){
            console.log(result);
        },
        error: function(error){
            console.log(error);
        }
    })
}