
// Manupulatin the DOM(User Interface)

const ul = document.querySelector('.items');

// ul.remove(); Removes all the ul in DOM.

// ul.lastElementChild.remove(); Removes last item from the list.

ul.firstElementChild.textContent = 'isha';

ul.children[1].innerText = 'krupa';

ul.lastElementChild.innerHTML = '<h3>Naresh</h3>';

const btn = document.querySelector('.btn');

btn.style.background = 'red';

//When clicked on the form, addEventListner will run
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form')
        .style.background = '#ccc';
    // document.querySelector('body').classList.add('bg-dark');
});