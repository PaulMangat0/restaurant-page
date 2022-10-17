import menuData from './data/menuData.json';


// MENU *******************************

export default function menuDOM() {

  function menuHeader() {
    const menuHead = document.createElement("div");
    menuHead.classList.add("menu-header");

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    menuTitle.innerText="Menu Items";

    menuHead.appendChild(menuTitle);
    return menuHead;
  }

  function menuList() {
    const listings = document.createElement("div");
    listings.classList.add("menu-listings", "flex");

    //Generate Each Menu Section w/items from JSON Data
    menuData['menu-sections'].forEach((item)=> {
    
      //Wrapper
      const section = document.createElement("div");
      section.classList.add("menu-list-section");

      //Menu Title
      const menuSections = Object.keys(item);
      const sectionTitle = document.createElement("div");
      sectionTitle.classList.add("menu-list-section-title");
      sectionTitle.innerText=menuSections[0];
      section.appendChild(sectionTitle);

      //Menu Items
      Object.values(item).forEach((sectionArray)=>{

      //append all menu items to section
      for(let i=0;i<sectionArray.length;i++) {
        const sectionItem = document.createElement("div");
        sectionItem.classList.add("menu-list-item");
        sectionItem.innerText=sectionArray[i].name+" "+sectionArray[i].cost;
        section.appendChild(sectionItem);
        }
      });
    
      listings.appendChild(section);
    
    });
  return listings;
  }

  //Assemble page
  const menu = document.createElement("div");
  menu.classList.add("Menu");
  menu.appendChild(menuHeader());
  menu.appendChild(menuList());

  return menu;
}



