document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = 'design5.html';
});

document.querySelector('#mobile-submit').addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = 'design5.html'
})

function getUserData() {

    const userData = localStorage.getItem('userData')

    return userData ? JSON.parse(userData) : null;
}

let userData = getUserData()

let planSelection = document.querySelector('#plan-selection');
let planSelectionPrice = document.querySelector('#price');
let period = document.querySelector('#period');
let online = document.querySelector('#online');
let onlinePrice = document.querySelector('#online-price');
let larger = document.querySelector('#larger');
let largerPrice = document.querySelector('#larger-price');
let profile = document.querySelector('#profile');
let profilePrice = document.querySelector('#profile-price');
let totalPeriod = document.querySelector('#total-period');
let totalValue = document.querySelector('#total-value');
let totalText = document.querySelector('#total-text');
let total = 0
let profile_yearly
let larger_yearly
let online_yearly

planSelection.innerHTML = userData.userSelection;
planSelectionPrice.innerHTML = userData.planPrice;
total += parseInt(userData.planPrice)

if (planSelection.textContent.includes('Yearly')) {
    period.textContent = 'yr'
    totalPeriod.textContent = 'yr'
    totalText.textContent = '(per year)'

    // multiply the add-ons price by 12months

    online_yearly = parseInt(userData.firstPrice * 12)
    larger_yearly = parseInt(userData.secondPrice * 12)
    profile_yearly = parseInt(userData.thirdPrice * 12)

    // will find a better comment later

}

online.innerHTML = userData.firstAddons
if (online.innerHTML !== 'undefined') {
    online.parentNode.classList.remove('hidden')
    onlinePrice.innerHTML = userData.firstPrice

    if (!planSelection.textContent.includes('Yearly')) {
        total += parseInt(userData.firstPrice)
    } else {
        total += parseInt(online_yearly)
    }
}

larger.innerHTML = userData.secondAddons
if (larger.innerHTML !== 'undefined') {
    larger.parentNode.classList.remove('hidden')
    largerPrice.innerHTML = userData.secondPrice

    if (!planSelection.textContent.includes('Yearly')) {
        total += parseInt(userData.secondPrice)
    } else {
        total += parseInt(larger_yearly)
    }
}
profile.innerHTML = userData.thirdAddons
if (profile.innerHTML !== 'undefined') {
    profile.parentNode.classList.remove('hidden')
    profilePrice.innerHTML = userData.thirdPrice

    if(!planSelection.textContent.includes('Yearly')){
        total += parseInt(userData.thirdPrice) 
    }else {
        total += parseInt(profile_yearly)
    }
}

// displaying total value

totalValue.innerHTML = total
// console.log(total)