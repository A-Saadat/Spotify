import { generateLibraryPreview , generateRecommendation } from './generate.js'
import { LibraryPreviewList, mixList } from './DataBase.js'

const $ = document;
function _id(id){
    return document.getElementById(id);
}

const libraryPreviewContainer = _id('libraryPreview')
const mixRecommendationContainer = _id('mixRecommendation')

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



generateLibraryPreview(LibraryPreviewList, libraryPreviewContainer);
generateRecommendation(mixList, mixRecommendationContainer)


openDropDown(_id('profile-dropdown'), _id('profile-dropdown-menu'));