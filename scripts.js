const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', (e) => { 
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === '') {
        setErrorFor(username, 'O nome de usuário é obrigatório.');
    } else {
        setSuccessFor (username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'O e-mail é obrigatório.');
    } else {
        setSuccessFor (email);
    }
    if (passwordValue === '') {
        setErrorFor(password, 'A senha é obrigatória.');
    } else {
        setSuccessFor (password);
    }
    if (passwordConfirmationValue === '') {
        setErrorFor(passwordConfirmation, 'A confirmação de senha é obrigatória.');
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, 'As senhas não conferem.');
    } else {
        setSuccessFor (passwordConfirmation);
    }

    const formControls = form.querySelectorAll('.form-control')

    const formIsValid = [...formControls].every(formControl => {
        return formControl.className === 'form-control success';
    })

    if(formIsValid) {
        console.log('O formulário está 100% válido.')
    }

}

function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;
    formControl.className = 'form-control error'
}

function setSuccessFor (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}