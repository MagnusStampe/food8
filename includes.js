// Initial function

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentHeader()
    hentFooter()
    start()
};

//Header

async function hentHeader() {
    let headerData = await fetch("header.html");
    let header = await headerData.text();
    document.querySelector("header").innerHTML = header;
    document.querySelector("header").parentNode.appendChild(document.querySelector("header"));

    function toggleMenu() {
        document.querySelector("header nav").classList.toggle("open");
        //document.querySelector("header nav").classList.toggle("show");

        console.log("toggleMenu()");
    };

    document.querySelector("#burger").addEventListener("click", toggleMenu);
};


//Footer

async function hentFooter() {
    let footerData = await fetch("footer.html");
    let footer = await footerData.text();
    document.querySelector("footer").innerHTML = footer;
};


//henter json//


//kloner//


//henter json//
async function start() {
    let jsondata = await fetch("http://magnusstampe.dk/food8/wp/wp-json/wp/v2/butikker");
    MinSlider = await jsondata.json();
    vis();

}

function vis() {
    let dest = document.querySelector("[data-buti-dest]");
    let temp = document.querySelector("[data-template]");

    MinSlider.forEach(billeder => {
        console.log(billeder);
        let klon = temp.cloneNode(true).content;
        //        //data i <div>
        klon.querySelector("[data-buti-h2").textContent = billeder.date;
        dest.appendChild(klon);
        //
    });
    //

}
