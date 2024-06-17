document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();

    localStorage.setItem('userData', JSON.stringify(userData))

    window.location.href = 'design4.html';
});

document.querySelector('#mobile-submit').addEventListener('click', (e) => {
    e.preventDefault();


    localStorage.setItem('userData', JSON.stringify(userData))

    window.location.href = 'design4.html'
});

document.querySelectorAll('.custom-checkbox').forEach(checkbox => {
    let wrapper = checkbox.parentNode.parentNode.parentNode;
    let AddOns = checkbox.parentNode.nextElementSibling.firstElementChild;
    let userAddOns = checkbox.parentNode.nextElementSibling.firstElementChild.innerHTML;
    let price = AddOns.parentNode.parentNode.nextElementSibling.firstElementChild.innerHTML;
    checkbox.addEventListener('change', (e) => {
        if (checkbox.checked && checkbox.id === 'adds-on-1') {
            wrapper.classList.add('bg-magnolia');
            
            userData.firstAddons = userAddOns
            userData.firstPrice = price

        } else if(checkbox.id === 'adds-on-1') {
            wrapper.classList.remove('bg-magnolia');
            
            delete userData.firstAddons
            delete userData.firstPrice

        }

        if (checkbox.checked && checkbox.id === 'adds-on-2') {
            wrapper.classList.add('bg-magnolia');
            
            userData.secondAddons = userAddOns
            userData.secondPrice = price

        } else if(checkbox.id === 'adds-on-2') {
            wrapper.classList.remove('bg-magnolia');
            
            delete userData.secondAddons
            delete userData.secondPrice

        }

        if (checkbox.checked && checkbox.id === 'adds-on-3') {
            wrapper.classList.add('bg-magnolia');
            
            userData.thirdAddons = userAddOns
            userData.thirdPrice = price

        } else if(checkbox.id === 'adds-on-3') {
            wrapper.classList.remove('bg-magnolia');

            delete userData.thirdAddons
            delete userData.thirdPrice
            
        }
    });
});

function getUserData() {
    let userData = localStorage.getItem('userPlan');

    return userData ? JSON.parse(userData) : null
}

let userData = getUserData();
