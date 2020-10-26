const bg = (arg) => {
  const back = document.getElementById("cover");
  if (arg === 0) {
    back.style.backgroundImage = "url('./assets/0.jpg')";
    back.style.opacity = "1";
  }
  if (arg === 1) {
    back.style.backgroundImage = "url('./assets/1.jpg')";
    back.style.opacity = "1";
  }
  if (arg === 2) {
    back.style.backgroundImage = "url('./assets/7.jpg')";
    back.style.opacity = "1";
  }
  if (arg === 3) {
    back.style.backgroundImage = "url('./assets/8.jpg')";
    back.style.opacity = "1";
  }
  if (arg === 4) {
    back.style.backgroundImage = "url('./assets/2.jpg')";
    back.style.opacity = "1";
  }
  if (arg === 5) {
    back.style.backgroundImage = "url('./assets/9.jpg')";
    back.style.opacity = "1";
  }
  if (arg === 6) {
    back.style.backgroundImage = "url('./assets/3.jpg')";
    back.style.opacity = "1";
  }
  if (arg === 7) {
    back.style.backgroundImage = "url('./assets/10.jpg')";
    back.style.opacity = "1";
  }
  if (arg === 8) {
    back.style.backgroundImage = "url('./assets/4.jpg')";
    back.style.opacity = "1";
  }
  if (arg === 9) {
    back.style.backgroundImage = "url('./assets/11.jpg')";
    back.style.opacity = "1";
  }
  if (arg === 10) {
    back.style.backgroundImage = "url('./assets/5.jpg')";
    back.style.opacity = "1";
  }
  if (arg === 11) {
    back.style.backgroundImage = "url('./assets/6.jpg')";
    back.style.opacity = "1";
  }
  if (arg === 12) {
    back.style.opacity = "0";
  }
};
// arrow animation
let arrTurn: boolean = false;
const photo = () => {
  const arrow: HTMLImageElement = document.getElementById(
    "arrow"
  )! as HTMLImageElement;
  const menu: HTMLUListElement = document.getElementById(
    "sublist"
  )! as HTMLUListElement;
  if (arrTurn === false) {
    arrow.style.transform = "rotate(270deg) scaleX(-1) translate(-50%, -50%)";
    menu.style.marginTop = "0";
    arrTurn = true;
  } else {
    arrow.style.transform = "rotate(270deg) scaleX(1) translate(50%, -50%)";
    menu.style.marginTop = "-28vh";
    arrTurn = false;
  }
};
//contact box
let boxTurn = false;
const about = () => {
  const abox: HTMLDivElement = document.getElementById(
    "aboutBox"
  )! as HTMLDivElement;
  if (boxTurn === false) {
    abox.style.zIndex= "999";
    boxTurn = true;
  } else {
    abox.style.zIndex= "-999";
    boxTurn = false;
  }
};

//
//render
//
const App: HTMLDivElement = document.getElementById("app")! as HTMLDivElement;

//nav
const nav: HTMLElement = document.createElement("nav")! as HTMLElement;
nav.className = "nav__bar";
App.appendChild(nav);
//navElements
const navElements: String[] = ["Main Page", "About us", "Photo", "Contact"];
const content: string[] = [
  '<img id="home" src="./assets/home.png" />',
  '<img id="about" src="./assets/about.png" />',
  '<img id="arrow" src="./assets/arrow.png" />',
  '<img id="phone" src="./assets/phone.png" />',
];
const clickers: string[] = ["", "", 'onclick="photo()"', 'onclick="about()"'];
const list: HTMLUListElement = document.createElement(
  "ul"
)! as HTMLUListElement;
let i = 0;
navElements.forEach((Element) => {
  list.innerHTML += `<li ${clickers[i]}><span>${Element}</span>${content[i]}</li>`;
  i += 1;
});
nav.appendChild(list);
//logo
const logo: HTMLDivElement = document.createElement("div")! as HTMLDivElement;
logo.className = "logo";
logo.innerHTML =
  '<img class="lBee" src="./assets/bee.png"/><div class="lSpan">Honey</div><button onclick="upScroll()" id="upScroll" title="Go to top">^</button>';
nav.appendChild(logo);
//sub menu
const submenu: HTMLUListElement = document.createElement(
  "ul"
)! as HTMLUListElement;
submenu.id = "sublist";
submenu.innerHTML="<div>There's nothing here.....</div>"
App.appendChild(submenu);
//about
const aboutBox: HTMLDivElement = document.createElement(
  "div"
) as HTMLDivElement;
aboutBox.id = "aboutBox";
aboutBox.innerHTML = `
<div class="bar"><button onclick="about()">x</button></div>
<div class="from">  
    <form>
        <label> 
            From: <input class="i_email" type="email" placeholder="your e-mail" />
            <button type="button">Send</button>
        </label> 
    </form>
</div>
<div class="conc">
    <textarea class="i_text" placeholder="..."></textarea>
</div>
`;
App.appendChild(aboutBox);
// 1 section
const header: HTMLDivElement = document.createElement("div")! as HTMLDivElement;
header.id = "header";
App.appendChild(header);
//title
const titleContent: string = "Welcome to Honey";
const title: HTMLElement = document.createElement("h1")! as HTMLElement;
title.innerHTML = `${titleContent}`;
header.appendChild(title);
const downContent: string = "Website only about honey!";
const subtitle: HTMLElement = document.createElement("h4")! as HTMLElement;
subtitle.innerHTML = `${downContent}`;
header.appendChild(subtitle);
//2 section
const conc: string =
  "Honey is a sweet, viscous food substance made by honey bees and some related insects. Bees produce honey from the sugary secretions of plants or from secretions of other insects, by regurgitation, enzymatic activity, and water evaporation. Bees store honey in wax structures called honeycombs.";
const honeyy: HTMLDivElement = document.createElement("div")! as HTMLDivElement;
honeyy.className = "honeyy";
honeyy.innerHTML = `<img src="./assets/hive.jpg" data-aos="fade-up" /><div data-aos="fade-up" >${conc}</div>`;
App.appendChild(honeyy);
// 3 section
let fdata: any = [];
let honyee__types: string[] = [];
fetch("./assets/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    fdata = data;
    honyee__types = data.honyee__types;
    const types: HTMLDivElement = document.createElement(
      "div"
    )! as HTMLDivElement;
    types.innerHTML += '<div id="cover"><div>';
    let j = 0;
    honyee__types.forEach((Element) => {
      types.innerHTML += `<div data-aos="zoom-in" class="hType" onmouseover="bg(${j})" onmouseout="bg(12)">${Element}<div>`;
      j += 1;
    });
    types.className = "hTypes";
    types.id = "hTypes";
    App.appendChild(types);
    //4 section
    const beeSection: HTMLDivElement = document.createElement(
      "div"
    )! as HTMLDivElement;
    beeSection.className = "bees";
    beeSection.innerHTML = `<div data-aos="zoom-in">${fdata.bees}</div>`;
    App.appendChild(beeSection);
    //footer
    const footer:HTMLDivElement = document.createElement('footer')!as HTMLDivElement;
    footer.innerHTML = `
    <div><img class="social" src="./assets/yt.png" /><div class="text">www.youtube/honey.com</div></div>
    <div><img class="social" src="./assets/fb.png" /><div class="text">www.facebook/honey.com</div></div>
    <div><img class="social" src="./assets/tw.png" /><div class="text">www.twitter/honey.com</div></div>
    `;
    App.appendChild(footer);
  });
  
//
// scroll
//
const scrollB = document.getElementById("upScroll");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollB.style.opacity = "1";
  } else {
    scrollB.style.opacity = "0";
  }
}
function upScroll() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
