const emailField = document.getElementById('emailField');
const btn = document.getElementById('btn1');
const iconError = document.getElementById('error-icon');


function validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const showErrors = () => {
    const error = document.getElementsByClassName('error');
    for (let i= 0; i < error.length; i++){
        error[i].classList.toggle('active');
        window.location.reload();
}
}

btn.addEventListener('click', function(){
  
    const email = emailField.value;
    if (validateEmail(email)){
        window.location.reload();
    } else {
showErrors();
    }}
)

