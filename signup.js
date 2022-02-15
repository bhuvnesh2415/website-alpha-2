
function signupColor()
{
    var firstName = document.querySelector("#firstName").value;
    var mobile = document.querySelector("#inputMobile").value;
    var password = document.querySelector("#inputPassword").value;

    if(firstName.length>=2 && mobile.length === 10 && password.length >= 8)
    {
        document.querySelector(".signupButton").style.opacity = 1;
    }

    else{
        document.querySelector(".signupButton").style.opacity = 0.5;
    }
}

function signupError()
{
    var firstName = document.querySelector("#firstName").value;
    var mobile = document.querySelector("#inputMobile").value;
    var password = document.querySelector("#inputPassword").value;
    var lastName = document.querySelector("#lastName").value;

    if(lastName !== "")
    {
        document.querySelector("#lastName").style.border = "1px solid rgb(50,205,50)";   
    }

    if(firstName === "" || firstName.length < 2)
    {
        document.querySelector(".firstNameError").style.visibility = "visible";
        document.querySelector("#firstName").style.border = "1px solid rgb(255,0,0)";
    }

    else
    {
        document.querySelector(".firstNameError").style.visibility = "hidden";
        document.querySelector("#firstName").style.border = "1px solid rgb(50,205,50)";
    }

    if(mobile === "" || mobile.length < 10)
    {
        document.querySelector(".mobileError").style.visibility = "visible";
        document.querySelector("#inputMobile").style.border = "1px solid rgb(255,0,0)";
    }

    else
    {
        document.querySelector(".mobileError").style.visibility = "hidden";
        document.querySelector("#inputMobile").style.border = "1px solid rgb(50,205,50)";
    }

    if(password === "" || password.length < 8)
    {
        document.querySelector(".passwordError").style.visibility = "visible";
        document.querySelector("#inputPassword").style.border = "1px solid rgb(255,0,0)";
    }

    else
    {
        document.querySelector(".passwordError").style.visibility = "hidden";
        document.querySelector("#inputPassword").style.border = "1px solid rgb(50,205,50)";
    }
}
function signupSuccess()
{
    var firstName = document.querySelector("#firstName").value;
    var mobile = document.querySelector("#inputMobile").value;
    var password = document.querySelector("#inputPassword").value;
    
    if(firstName.length>=2 && mobile.length === 10 && password.length >= 8)
    {
        localStorage.setItem('userMobile',mobile);
        window.location.assign("signupVerifyOTP.html");
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