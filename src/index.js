import './css/style.css';

import menuDOM from './menu';
import contactDOM from './contact';

'use strict';

// NAVIGATION *************************

//Create Navigation Bar
function navigationDOM() {
  const nav = document.createElement("div");
  nav.classList.add("tab-nav", "flex", "tab-nav--flex");

  const homeTab = document.createElement("div");
  homeTab.classList.add("tab__home");
  homeTab.innerText="HOME";
  homeTab.addEventListener('click',displayHomePage);

  const menuTab = document.createElement("div");
  menuTab.classList.add("tab__menu");
  menuTab.innerText="MENU";
  menuTab.addEventListener('click',displayMenuPage);

  const contactTab = document.createElement("div");
  contactTab.classList.add("tab__contact");
  contactTab.innerText="CONTACT";
  contactTab.addEventListener('click',displayContactPage);

  nav.appendChild(homeTab);
  nav.appendChild(menuTab);
  nav.appendChild(contactTab);

  return nav;
}

// PLACEHOLDER ***************************

function placeholder() {
  const ph = document.createElement('div');
  ph.setAttribute("id","placeholder");
  ph.appendChild(document.createElement("div"));
  return ph;
}

// FOOTER ***************************

function footerDOM() {
  const foot = document.createElement("div");
  foot.classList.add("footer");
  foot.innerHTML="<hr>- The Odin Project -";
  return foot;
}

// HOME PAGE *****************************

function homePageDOM() {
  
  function heroDOM() {
    const hero = document.createElement("div");
    hero.classList.add("hero");

    const heroTitle = document.createElement("div");
    heroTitle.classList.add("hero-title");
    heroTitle.innerText="The Coffee Cafe";

    hero.appendChild(heroTitle);
    return hero;
  }

  
  function contentDOM() {
    const heroContent = document.createElement("div");
    heroContent.classList.add("hero-content");

    const description = document.createElement("div");
    description.classList.add("description");
    const descriptionText = document.createElement("p");
    descriptionText.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae enim ac risus sollicitudin molestie. Aliquam sollicitudin lacinia sollicitudin. Cras consectetur pharetra odio, bibendum tincidunt metus lobortis eget. Nam sagittis, ante non sollicitudin ullamcorper, velit mi tincidunt leo, nec luctus quam justo consectetur nunc. Praesent laoreet, ante nec auctor aliquam, urna odio vehicula justo, dapibus malesuada nulla turpis vel urna. Nunc eu diam malesuada, iaculis turpis sed, laoreet quam. Nam sagittis ultricies condimentum.";

    description.appendChild(descriptionText);
    heroContent.appendChild(description);

    return heroContent;
  }

  //Assemble page
  const home = document.createElement("div");
  home.classList.add("home");
  home.appendChild(heroDOM());
  home.appendChild(contentDOM());

  return home;
}

// Page Logic / Event Functions **********

function displayHomePage() {
  main.replaceChild(homePageDOM(),main.firstChild);
}

function displayMenuPage() {
   main.replaceChild(menuDOM(),main.firstChild);
}

function displayContactPage() {
  main.replaceChild(contactDOM(),main.firstChild);
}


// INIT **********************************
const content=document.querySelector("#content");
const main = placeholder();

content.appendChild(navigationDOM());
content.append(main);
content.append(footerDOM());

displayHomePage();
