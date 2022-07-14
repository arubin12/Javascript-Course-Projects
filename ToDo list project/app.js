const form = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


const createListItem = input => `<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${input}</span>
<i class="far fa-trash-alt delete"></i>
</li>`;

form.addEventListener('submit', event =>{
    event.preventDefault();

    const input = form.add.value.trim();
    if(input.length > 0){
        list.innerHTML += createListItem(input);
    }  
    form.reset(); 
});

list.addEventListener('click', event => {
    if(event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
});

const filterList = filter => {
    
    Array.from(list.children)
    .filter(element =>  !element.textContent.toLowerCase().includes(filter))
    .forEach(item => item.classList.add('hide'));
    

    Array.from(list.children)
    .filter(element =>  element.textContent.toLowerCase().includes(filter))
    .forEach(item => item.classList.remove('hide'));
};

search.addEventListener('keyup', event => {
    const searchTerm = search.value.trim().toLowerCase();
    filterList(searchTerm);
});

