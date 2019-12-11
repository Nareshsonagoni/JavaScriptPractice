// Adding the users into the page

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error'); // => Adding error msg on screen, error class already definged in html
        msg.innerHTML = 'Please complete all the fields'; // adding text to the msg

        setTimeout(() => msg.remove(), 4000); // To remove the message from the screen, in 4 secs
    }
    else {
        const li = document.createElement('li');// we can create elements from createElement method
        //to add elements in li 
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        userList.appendChild(li);

        //Clear the fields

        nameInput.value = '';
        emailInput.value = '';
    }
}