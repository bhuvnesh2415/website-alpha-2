function loginError()
{
    var mobile = document.querySelector("#inputMobile").value;
    var password = document.querySelector("#inputPassword").value;

    if(mobile === "")
    {
        document.querySelector(".mobileError").style.visibility = "visible";
        document.querySelector("#inputMobile").style.border = "1px solid red";
    }
    else if(mobile !=="" && mobile.length < 10)
    {
        document.querySelector(".mobileError").style.visibility = "hidden";
        document.querySelector(".mobileLengthError").style.visibility = "visible";
        document.querySelector("#inputMobile").style.border = "1px solid red";
    }

    else
    {
        document.querySelector(".mobileLengthError").style.visibility = "hidden";
        document.querySelector("#inputMobile").style.border = "1px solid limegreen"; 
    }

    if(password === "")
    {
        document.querySelector(".passwordError").style.visibility = "visible";
        document.querySelector("#inputPassword").style.border = "1px solid red";
    }
    else
    {
        document.querySelector(".passwordError").style.visibility = "hidden";
        document.querySelector("#inputPassword").style.border = "1px solid limegreen";
    }
}

function loginColor()
{
    var mobile = document.querySelector("#inputMobile").value;
    var password = document.querySelector("#inputPassword").value;

    if(mobile.length === 10 && password.length >= 8)
    {
        document.querySelector(".loginButton").style.opacity = 1;
    }

    else{
        document.querySelector(".loginButton").style.opacity = 0.5;
    }
}

function showPassword()
{
    var el = document.querySelector("#inputPassword");

    if(el.getAttribute("type") === "password")
    {
        el.setAttribute("type", "text");
        document.querySelector("#showPassword").style.display = "none";
        document.querySelector("#hidePassword").style.display = "flex";
    }
        
    else {
        el.setAttribute("type", "password");
        document.querySelector("#showPassword").style.display = "flex";
        document.querySelector("#hidePassword").style.display = "none";
    }
}
