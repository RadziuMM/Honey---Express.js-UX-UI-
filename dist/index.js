var bg = function (arg) {
    var back = document.getElementById("cover");
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
var arrTurn = false;
var photo = function () {
    var arrow = document.getElementById("arrow");
    var menu = document.getElementById("sublist");
    if (arrTurn === false) {
        arrow.style.transform = "rotate(270deg) scaleX(-1) translate(-50%, -50%)";
        menu.style.marginTop = "0";
        arrTurn = true;
    }
    else {
        arrow.style.transform = "rotate(270deg) scaleX(1) translate(50%, -50%)";
        menu.style.marginTop = "-28vh";
        arrTurn = false;
    }
};
//contact box
var boxTurn = false;
var about = function () {
    var abox = document.getElementById("aboutBox");
    if (boxTurn === false) {
        abox.style.zIndex = "999";
        boxTurn = true;
    }
    else {
        abox.style.zIndex = "-999";
        boxTurn = false;
    }
};
//
//render
//
var App = document.getElementById("app");
//nav
var nav = document.createElement("nav");
nav.className = "nav__bar";
App.appendChild(nav);
//navElements
var navElements = ["Main Page", "About us", "Photo", "Contact"];
var content = [
    '<img id="home" src="./assets/home.png" />',
    '<img id="about" src="./assets/about.png" />',
    '<img id="arrow" src="./assets/arrow.png" />',
    '<img id="phone" src="./assets/phone.png" />',
];
var clickers = ["", "", 'onclick="photo()"', 'onclick="about()"'];
var list = document.createElement("ul");
var i = 0;
navElements.forEach(function (Element) {
    list.innerHTML += "<li " + clickers[i] + "><span>" + Element + "</span>" + content[i] + "</li>";
    i += 1;
});
nav.appendChild(list);
//logo
var logo = document.createElement("div");
logo.className = "logo";
logo.innerHTML =
    '<img class="lBee" src="./assets/bee.png"/><div class="lSpan">Honey</div><button onclick="upScroll()" id="upScroll" title="Go to top">^</button>';
nav.appendChild(logo);
//sub menu
var submenu = document.createElement("ul");
submenu.id = "sublist";
submenu.innerHTML = "<div>There's nothing here.....</div>";
App.appendChild(submenu);
//about
var aboutBox = document.createElement("div");
aboutBox.id = "aboutBox";
aboutBox.innerHTML = "\n<div class=\"bar\"><button onclick=\"about()\">x</button></div>\n<div class=\"from\">  \n    <form>\n        <label> \n            From: <input class=\"i_email\" type=\"email\" placeholder=\"your e-mail\" />\n            <button type=\"button\">Send</button>\n        </label> \n    </form>\n</div>\n<div class=\"conc\">\n    <textarea class=\"i_text\" placeholder=\"...\"></textarea>\n</div>\n";
App.appendChild(aboutBox);
// 1 section
var header = document.createElement("div");
header.id = "header";
App.appendChild(header);
//title
var titleContent = "Welcome to Honey";
var title = document.createElement("h1");
title.innerHTML = "" + titleContent;
header.appendChild(title);
var downContent = "Website only about honey!";
var subtitle = document.createElement("h4");
subtitle.innerHTML = "" + downContent;
header.appendChild(subtitle);
//2 section
var conc = "Honey is a sweet, viscous food substance made by honey bees and some related insects. Bees produce honey from the sugary secretions of plants or from secretions of other insects, by regurgitation, enzymatic activity, and water evaporation. Bees store honey in wax structures called honeycombs.";
var honeyy = document.createElement("div");
honeyy.className = "honeyy";
honeyy.innerHTML = "<img src=\"./assets/hive.jpg\" data-aos=\"fade-up\" /><div data-aos=\"fade-up\" >" + conc + "</div>";
App.appendChild(honeyy);
// 3 section
var fdata = [];
var honyee__types = [];
fetch("./assets/data.json")
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    fdata = data;
    honyee__types = data.honyee__types;
    var types = document.createElement("div");
    types.innerHTML += '<div id="cover"><div>';
    var j = 0;
    honyee__types.forEach(function (Element) {
        types.innerHTML += "<div data-aos=\"zoom-in\" class=\"hType\" onmouseover=\"bg(" + j + ")\" onmouseout=\"bg(12)\">" + Element + "<div>";
        j += 1;
    });
    types.className = "hTypes";
    types.id = "hTypes";
    App.appendChild(types);
    //4 section
    var beeSection = document.createElement("div");
    beeSection.className = "bees";
    beeSection.innerHTML = "<div data-aos=\"zoom-in\">" + fdata.bees + "</div>";
    App.appendChild(beeSection);
    //footer
    var footer = document.createElement('footer');
    footer.innerHTML = "\n    <div><img class=\"social\" src=\"./assets/yt.png\" /><div class=\"text\">www.youtube/honey.com</div></div>\n    <div><img class=\"social\" src=\"./assets/fb.png\" /><div class=\"text\">www.facebook/honey.com</div></div>\n    <div><img class=\"social\" src=\"./assets/tw.png\" /><div class=\"text\">www.twitter/honey.com</div></div>\n    ";
    App.appendChild(footer);
});
//
// scroll
//
var scrollB = document.getElementById("upScroll");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollB.style.opacity = "1";
    }
    else {
        scrollB.style.opacity = "0";
    }
}
function upScroll() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
