
function OTPsent()
{
    document.querySelector("#OTPtext2").style.visibility = "visible";
    var mobileNumber = localStorage.getItem('userMobile');
    document.querySelector("#OTPtext2").innerHTML = "We have sent an OTP to " + mobileNumber;
}

function OTPerror()
{
    var otp1 = document.querySelector("#inputOTP1").value;
    var otp2 = document.querySelector("#inputOTP2").value;
    var otp3 = document.querySelector("#inputOTP3").value;
    var otp4 = document.querySelector("#inputOTP4").value;

    if(otp1 !== "" && otp2 !== "" && otp3 !== "" && otp4 !== "")
    {
        if(otp1 == "5" && otp2 == "6" && otp3 == "7" && otp4 == "8")
        {
            document.querySelector(".wrongOTPerror").style.visibility = "hidden";
            document.querySelector("#OTPverified").style.visibility = "visible";
            document.querySelector("#inputOTP1").style.color = " limegreen";
            document.querySelector("#inputOTP2").style.color = " limegreen";
            document.querySelector("#inputOTP3").style.color = " limegreen";
            document.querySelector("#inputOTP4").style.color = " limegreen";
            window.location.assign("LoginHomePage.html");
            
        }
        else
        {
            document.querySelector(".wrongOTPerror").style.visibility = "visible";
            document.querySelector("#OTPverified").style.visibility = "hidden";
            document.querySelector("#inputOTP1").style.color = " red";
            document.querySelector("#inputOTP2").style.color = " red";
            document.querySelector("#inputOTP3").style.color = " red";
            document.querySelector("#inputOTP4").style.color = " red";
        }
    }
}

function OTPnextFocus()
{
    var otpInputs = document.querySelector(".inputOTP").children;

    for(let i=0; i < otpInputs.length; i++) {
        otpInputs[i].addEventListener("keyup", function()
        {
            if(this.value.length === 1)
            {
            this.nextElementSibling.focus();
            }
            else if(i==0){
                this.focus();
            }
            else{
                this.previousElementSibling.focus();
            }
        })
    }   
}

function OTPresent()
{
    document.querySelector("#OTPtext2").style.display = "none";
    document.querySelector(".wrongOTPerror").style.visibility = "hidden";
    document.querySelector("#OTPverified").style.visibility = "hidden";

    var mobileNumber = localStorage.getItem('userMobile');
    document.querySelector("#OTPtext3").innerHTML = "OTP resent on " + mobileNumber;
    document.querySelector("#OTPtext3").style.display = "block";
    document.querySelector("#inputOTP1").focus();

    document.querySelector("#inputOTP1").value = "";
    document.querySelector("#inputOTP2").value = "";
    document.querySelector("#inputOTP3").value = "";
    document.querySelector("#inputOTP4").value = "";

    document.querySelector("#inputOTP1").style.color = "blue";
    document.querySelector("#inputOTP2").style.color = "blue";
    document.querySelector("#inputOTP3").style.color = "blue";
    document.querySelector("#inputOTP4").style.color = "blue";
}