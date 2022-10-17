import mapImage from './images/map.png';

'use strict'


export default function contactDOM() {

  function header() {
    const header = document.createElement("div");
    header.classList.add("contact-header");

    const title = document.createElement("div");
    title.classList.add("contact-title");
    title.innerText="Location & Hours";

    header.appendChild(title);
    return header;
  }

  function content() {

    const info = document.createElement("div");
    info.classList.add("contact-info", "flex", "contact-info--flex");

    function location() {
      const contactLoc = document.createElement("div");
      contactLoc.classList.add("contact-location");

      const locText = document.createElement("p");
      locText.innerText="Consectetur adipiscing elit. Vivamus vitae enim ac risus sollicitudin molestie. Aliquam sollicitudin lacinia sollicitudin. Cras consectetur pharetra odio, bibendum tincidunt metus lobortis eget. Nam sagittis, ante non sollicitudin ullamcorper, velit mi tincidunt leo, nec luctus quam justo consectetur nunc. Praesent laoreet, ante nec auctor aliquam, urna odio vehicula justo, dapibus malesuada nulla turpis vel urna. Nunc eu diam malesuada, iaculis turpis sed, laoreet quam. Nam sagittis ultricies condimentum.";
  
      contactLoc.appendChild(locText);
      return contactLoc;
    }

    function hours() {
      const contactHours = document.createElement("div");
      contactHours.classList.add("contact-hours");
      contactHours.innerHTML=`<ul>
                                <li>Sunday	10:30a.m.-11p.m.</li>
                                <li>Monday	10:30a.m.-11p.m.</li>
                                <li>Tuesday	10:30a.m.-11p.m.</li>
                                <li>Wednesday	10:30a.m.-11p.m.</li>
                                <li>Thursday 10:30a.m.-12a.m.</li>
                                <li>Friday 10:30a.m.-12a.m.</li>
                                <li>Saturday 10:30a.m.-12a.m.</li>
                              </ul>`;
      return contactHours;            
    }

    function map() {
      const contactMap = document.createElement("div");
      contactMap.classList.add("contact-map");

      //create image from imported resource
      const mapPic = new Image();
      mapPic.src=mapImage;
      contactMap.appendChild(mapPic);

      return contactMap;
    }

    info.appendChild(location());
    info.appendChild(hours());
    info.appendChild(map());

    return(info);
  }

  //Assemble Page
  const contact =  document.createElement("div");
  contact.classList.add("Contact");

  contact.appendChild(header());
  contact.appendChild(content());

  return contact;
}