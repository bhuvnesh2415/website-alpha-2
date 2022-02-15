function setPassword()
{
    var userPassword = document.querySelector("#inputPassword").value;

    if(userPassword.length >= 8)
    {
        document.querySelector(".passwordError").style.visibility = "hidden";
        document.querySelector(".setPasswordSuccess").style.visibility = "visible";
        setTimeout(function(){
            window.location.assign("login.html");
        }, 1700); 
    }
    else
    {
        document.querySelector(".passwordError").style.visibility = "visible";
        document.querySelector("#inputPassword").style.border = "1px solid red";
    }
}
function setPasswordColor()
{
    var userPassword = document.querySelector("#inputPassword").value;

    if(userPassword.length >= 8)
    {
        document.querySelector(".setPasswordButton").style.opacity = 1;
    }

    else{
        document.querySelector(".setPasswordButton").style.opacity = 0.5;
    }
}