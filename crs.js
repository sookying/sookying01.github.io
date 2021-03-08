function showPwd() {
    var p = document.getElementById("pwd");
    if (p.type === "password") {
        p.type = "text";
    } else {
        p.type = "password";
    }
}

function submitButtonVol() {
    if (document.forms['signupForm'].Vusername.value === "") {
        alert("Please enter username");
      return false;
    }
    else if (document.forms['signupForm'].Vpwd.value === "") {
        alert("Please enter password");
        return false;
    }
    else if (document.forms['signupForm'].Vname.value === "") {
        alert("Please enter your name");
        return false;
    }
    else if (document.forms['signupForm'].Vphone.value === "") {
        alert("Please enter your phone number");
        return false;
    }
    else{
        alert("Thank you for your partcipate ! You are now one of our CRS member.")
    }
}

function managerLogin(){
    if (document.forms['managerLoginForm'].Musername.value === "") {
        alert("Please enter your username");
      return false;
    }
    else if (document.forms['managerLoginForm'].Mpwd.value === "") {
        alert("Please enter your password");
        return false;
    }
    else{
        window.location.href = "staffRegistration.html";
    }
}

function staffLogin(){
    if (document.forms['staffLoginForm'].Susername.value === "") {
        alert("Please enter your username");
      return false;
    }
    else if (document.forms['staffLoginForm'].Spwd.value === "") {
        alert("Please enter your password");
        return false;
    }
    else{
        window.location.href = "organizeTrip.html";
    }
}

function volLogin(){
    if (document.forms['volLoginForm'].Vusername.value === "") {
        alert("Please enter your username");
      return false;
    }
    else if (document.forms['volLoginForm'].Vpwd.value === "") {
        alert("Please enter your password");
        return false;
    }
    else{
        window.location.href = "applyTrip.html";
    }
}

function manageProfile(){
        window.location.href = "manageProfile.html";
}

function viewStatus(){
    window.location.href = "viewStatus.html";
}

function viewApp(){
    window.location.href = "manageApp.html";
}

function backToManagerLogin(){
    window.location='managerLogin.html';
}

function backToStaffLogin() {
    window.location='staffLogin.html';
}

function backToApplyTrip(){
    window.location='applyTrip.html';
}

function backToOrganizeTrip(){
    window.location='organizeTrip.html';
}

var date = new Date();
var appDate = date. getDate();
var appYear = date.getFullYear();
var appMonth = date.getMonth()+1;
var appStatus = 'NEW';
var appID = Math.floor(Math.random() * 9999);
function showApp(){
    alert("Your application ID is " + appID + "\r\n" + "Your status is " + appStatus + "\r\n" + "Your application date is " + appDate + "-" + appMonth + "-" + appYear);
}

var tripID = Math.floor(Math.random() * 9999);
function tripCreated(){
    if (document.forms['tripForm'].date.value === "") {
        alert("Please enter the trip date");
        return false;
    }
    else if (document.forms['tripForm'].dest.value === "") {
        alert("Please enter the trip destination");
        return false;
    }
    else if (document.forms['tripForm'].desc.value === "") {
        alert("Please enter the trip description");
        return false;
    }
    else if (document.forms['tripForm'].options.value === "") {
        alert("Please select one option");
        return false;
    }
    else if (document.forms['tripForm'].numbervol.value === "") {
        alert("Please enter the number of volunteers");
        return false;
    }
    else{
        alert("Trip ID is " + tripID + "\r\n" + "You have successfully organized a trip");
    }
}



