document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentHeader()
    hentFooter()
}

async function hentHeader() {
    let headerData = await fetch("header.html");
    let header = await headerData.text();
    document.querySelector("header").innerHTML = header;
}

async function hentFooter() {
    let footerData = await fetch("footer.html");
    let footer = await footerData.text();
    document.querySelector("footer").innerHTML = footer;
}
