// Initial function

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentHeader()
    hentFooter()
}

//Header

async function hentHeader() {
    let headerData = await fetch("header.html");
    let header = await headerData.text();
    document.querySelector("header").innerHTML = header;
}

function toggleMenu() {
    document.querySelector("#burger").classList.toggle("animate");
    document.querySelector("header nav").classList.toggle("show");

    console.log("toggleMenu()")
}

document.querySelector("#burger").addEventListener("click", toggleMenu);


//Footer

async function hentFooter() {
    let footerData = await fetch("footer.html");
    let footer = await footerData.text();
    document.querySelector("footer").innerHTML = footer;
}
