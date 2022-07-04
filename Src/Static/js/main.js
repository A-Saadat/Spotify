'use strict'

const $ = document;
function _id(id){
    return document.getElementById(id);
}

function openDropDown(dropdown, dropdownMenu){
    dropdown.addEventListener('click', e => {
        e.preventDefault();
        dropdownMenu.classList.toggle('show-dropdown');
    } )
}

openDropDown(_id('profile-dropdown'), _id('profile-dropdown-menu'));

