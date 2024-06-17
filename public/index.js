// functions

function validate(input) {
    if(input.value !== ""){
        return true
    } else return error(input)
}

function error(input){
    
    const errorMessage = document.getElementById(input.id + '-errorMessage');

    input.style.border = '1px solid hsl(354, 84%, 57%)';
    errorMessage.style.display = 'block'
}


// datas

const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userTel = document.querySelector('#tel');
const submitButton = document.querySelector('#submit');

// function calls

document.querySelector('#form').addEventListener('submit', (e)=>{
    e.preventDefault();

    let valid = true

    valid &= validate(userName)
    valid &= validate(userEmail)
    valid &= validate(userTel)

    if(valid){
        window.location.href = 'design2.html'
    }
})

// mobile form 
document.querySelector('#mobile-form').addEventListener('submit', (e)=>{
    e.preventDefault();

    let valid = true

    valid &= validate(userName)
    valid &= validate(userEmail)
    valid &= validate(userTel)

    if(valid){
        window.location.href = 'design2.html'
    }
})