/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const divs = document.querySelectorAll('div');
const myul = document.getElementById('navbar__list');

const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

divs.forEach((div, i) => {
  const newli = document.createElement('li');
  const newa = document.createElement('a');
  var id = 'section' + (i + 1);
  const section = document.getElementById(id);
  newa.textContent = section.getAttribute('data-nav');

  newli.appendChild(newa);
  myul.appendChild(newli);

});

  //add links
const mylinks = document.querySelectorAll('a');
mylinks.forEach((link, i) => {
  var att = document.createAttribute("href");
  var id = '#section' + (i + 1);
  att.value = id;
  link.setAttributeNode(att);
});

//__________________________________________________________________________________________________







// Add class 'active' to section when near top of viewport
function sectInViewPort(element){
  let sectPosition = element.getBoundingClientRect();
  return (sectPosition.top >= 0);
}


function toggleActiveClass(){
  for (section of sections){
    if (sectInViewPort(section)){
      if (!section.classList.contains('your-active-class')){
        section.classList.add('your-active-class');
      }
    }else {
      section.classList.remove('your-active-class');
    }
  }
}

document.addEventListener('scroll', toggleActiveClass);






// Scroll to anchor ID using scrollTO event
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;


function scrollToTop() {
  rootElement.scrollTo({
    top: 0
  })
}

scrollToTopBtn.addEventListener("click", scrollToTop);



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
