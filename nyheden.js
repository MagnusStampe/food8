let urlParams = new URLSearchParams(window.location.search);

let urlid = urlParams.get("id");


document.addEventListener("DOMContentLoaded", start);

async function start() {
    let jsondata = await fetch("http://magnusstampe.dk/food8/wp/wp-json/wp/v2/nyheder");
    nyheden1 = await jsondata.json();
    vis();

}




function vis() {
    nyheden1.forEach(nyhed => {
        if (nyhed.id == urlid) {
            document.querySelector("[data-P2]").innerHTML = nyhed.content.rendered;
            document.querySelector("[data-ny-a]").href = "nyheden.html?id=" + nyhed.id;
            document.querySelector("[data-ny-img]").src = nyhed.acf.nyhed.url;
            document.querySelector("[data-ny-img]").alt = nyhed.acf.restaurant_navn;
            document.querySelector("[data-p]").textContent = nyhed.title.rendered;


        }

    })
}
