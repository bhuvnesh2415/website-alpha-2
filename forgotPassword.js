function OTPsent()
{
    var userMobile = document.querySelector("#inputMobile").value;

    if(userMobile.length === 10)
    {
        window.location.assign("forgotPasswordVerifyOTP.html");
    }
    else
    {
        document.querySelector(".mobileError").style.visibility = "visible";
        document.querySelector("#inputMobile").style.border = "1px solid red";
    }
}
function sendOTPColor()
{
    var userMobile = document.querySelector("#inputMobile").value;

    if(userMobile>0 && userMobile.length === 10)
    {
        localStorage.setItem('userMobile',userMobile);
        document.querySelector(".sendOTPButton").style.opacity = 1;
    }

    else{
        document.querySelector(".sendOTPButton").style.opacity = 0.5;
    }
}