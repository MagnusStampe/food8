// Initial function

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentHeader()
    hentFooter()
};

//Header

async function hentHeader() {
    let headerData = await fetch("header.html");
    let header = await headerData.text();
    document.querySelector("header").innerHTML = await header;
};

//Footer

async function hentFooter() {
    let footerData = await fetch("footer.html");
    let footer = await footerData.text();
    document.querySelector("footer").innerHTML = footer;
};
