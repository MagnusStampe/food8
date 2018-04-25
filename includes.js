// Initial function

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentHeader();
    hentFooter();
    start();
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
    let jsondata = await fetch("http://www.magnusstampe.dk/food8/wp/wp-json/acf/v3/butikker");

    MinSlider = await jsondata.json();
    console.log(MinSlider[0].acf.start_billedet_.url);
    vis();


}

function vis() {
    let dest = document.querySelector("[data-buti-dest]");
    let temp = document.querySelector("[data-template]");

    MinSlider.forEach(billeder => {
        console.log(billeder.acf.start_billedet_.url);
        let klon = temp.cloneNode(true).content;

        //        //data i <div>
        klon.querySelector("[data-buti-img]").src = billeder.acf.start_billedet_.url;
        klon.querySelector("[data-buti-img]").alt = billeder.acf.start_billedet_.url;
        dest.appendChild(klon);


        //
    });
    //

}
