import { generateLibraryPreview, listInfo } from './generate.js'

const $ = document;
function _id(id){
    return document.getElementById(id);
}

const libraryPreview = _id('libraryPreview')
const goodTitle = _id('goodTitle');
const date = new Date();

function openDropDown(dropdown, dropdownMenu){
    dropdown.addEventListener('click', e => {
        e.preventDefault();
        dropdownMenu.classList.toggle('show-dropdown');
    } )
}

if(date.getHours() <= 12)
    goodTitle.innerHTML += " morning";
else if(date.getHours() >= 12 && date.getHours() <= 20)
    goodTitle.innerHTML += " evening";
else
    goodTitle.innerHTML += " night";



generateLibraryPreview(listInfo, libraryPreview);
openDropDown(_id('profile-dropdown'), _id('profile-dropdown-menu'));