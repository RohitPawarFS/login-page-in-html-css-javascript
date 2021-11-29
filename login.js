var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var emailerror = document.getElementById('emailerror');
var passworderror = document.getElementById('passworderror');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', password_Verify);

function validated() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        emailerror.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 9) {
        password.style.border = "1px solid red";
        passworderror.style.display = "block";
        password.focus();
        return false;
    }
}
function email_Verify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid #550ab1c2";
        email.style.background = "#7113e6";
        emailerror.style.display = "none";
        return true;
    }
}

function password_Verify() {
    if (password.value.length >= 8) {
        password.style.border = "1px solid #550ab1c2";
        password.style.background = "#7113e6";
        passworderror.style.display = "none";
        return true;
    }
}