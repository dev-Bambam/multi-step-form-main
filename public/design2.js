const toggle = document.querySelector('.toggle');
const toggleButton = document.querySelector('.toggle-btn');
const submit = document.querySelector('#submit');
const mobileSubmit = document.querySelector('#mobile-submit');
const pro = document.querySelector('#pro-value');
const arcade = document.querySelector('#arcade-value');
const advanced = document.querySelector('#advanced-value');
const toggleText = document.querySelectorAll('.toggle-text');
const planCard1 = document.querySelector('#plan-card-1');
const planCard2 = document.querySelector('#plan-card-2');
const planCard3 = document.querySelector('#plan-card-3');
const cardWrapper = document.querySelector('#card-wrapper');
let userSelection;
let yearSelection = false;
let planPrice;

cardWrapper.addEventListener('click', (e) => {
    if (e.target.id == 'plan-card-1') {
        planCard1.style.backgroundColor = 'hsl(217, 100%, 97%)'
        planCard2.style.backgroundColor = 'white'
        planCard3.style.backgroundColor = 'white';

        planPrice = parseInt(arcade.innerHTML);

        if(yearSelection){
            userSelection = 'Arcade (Yearly)'
        }else{
            userSelection = 'Arcade (Monthly)'
        }
    } else if (e.target.id == 'plan-card-2') {
        planCard2.style.backgroundColor = 'hsl(217, 100%, 97%)'
        planCard1.style.backgroundColor = 'white'
        planCard3.style.backgroundColor = 'white'

        planPrice = parseInt(advanced.innerHTML);


        if(yearSelection){
            userSelection = 'Advanced (Yearly)'
        }else{
            userSelection = 'Advanced (Monthly)'
        }

    } else if (e.target.id == 'plan-card-3') {
        planCard3.style.backgroundColor = 'hsl(217, 100%, 97%)'
        planCard1.style.backgroundColor = 'white'
        planCard2.style.backgroundColor = 'white'

        planPrice = parseInt(pro.innerHTML);


        if(yearSelection){
            userSelection = 'Pro (Yearly)'
        }else{
            userSelection = 'Pro (Monthly)'
        }
    }

    const userPlan = {userSelection,planPrice}

    localStorage.setItem('userPlan', JSON.stringify(userPlan))

})


toggle.addEventListener('click', (e) => {
    toggleButton.classList.toggle('toggle-btn-active');

    if (toggleButton.classList.contains('toggle-btn-active')) {
        yearSelection = true
        // to display 2 months free

        toggleText.forEach(text => {
            text.style.display = 'block'
        });

        pro.innerHTML = 150;
        advanced.innerHTML = 120;
        arcade.innerHTML = 90;

        pro.nextElementSibling.innerHTML = 'yr'
        advanced.nextElementSibling.innerHTML = 'yr'
        arcade.nextElementSibling.innerHTML = 'yr'
    } else {

        yearSelection = false
        toggleText.forEach(text => {
            text.style.display = 'none'
        });

        pro.innerHTML = 15;
        advanced.innerHTML = 12;
        arcade.innerHTML = 9;

        pro.nextElementSibling.innerHTML = 'mo'
        advanced.nextElementSibling.innerHTML = 'mo'
        arcade.nextElementSibling.innerHTML = 'mo'
    }
});

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    window.location.href = 'design3.html'
})

mobileSubmit.addEventListener('click', (e) =>{
    e.preventDefault();
    window.location.href = 'design3.html'
})