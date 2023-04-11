const navLinks = document.querySelector('.dropdown-menu');
const dropdown = document.querySelector('.dropdown');

navLinks.addEventListener('mouseover', displayDropdown);
navLinks.addEventListener('mouseout', hideDropdown);

function displayDropdown(e){
    dropdown.style.display = 'block';
}
function hideDropdown(e){
    dropdown.style.display = 'none';
}
