/*=====================
    Search Open Loader Js
==========================*/
const div = document.getElementById('search-box');
const addBtn = document.getElementById('search-btn');
const removeBtn = document.getElementById('close-search');

addBtn.addEventListener('click', () => {
    div.classList.add('show');
})

removeBtn.addEventListener('click', () => {
    div.classList.remove('show');
})