document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentJson();
}

//JSON

async function hentJson() {
    let jsonData = await fetch("http://magnusstampe.dk/food8/wp/wp-json/wp/v2/nyheder");
    nyheden1 = await jsonData.json();

    console.log("Hent JSON")
    vis();

    function vis() {
        console.log("vis()")
        let dest = document.querySelector("[data-ny-dest]");
        let temp = document.querySelector("[data-ny-temp]");

        nyheden1.forEach(ny => {

            let klon = temp.cloneNode(true).content;

            //klon.querySelector("[data-P2]").innerHTML = ny.content.rendered;
            klon.querySelector("[data-ny-a]").href = "nyheden.html?id=" + ny.id;
            klon.querySelector("[data-ny-img]").src = ny.acf.nyhed.url;
            klon.querySelector("[data-ny-img]").alt = ny.acf.restaurant_navn;
            klon.querySelector("[data-p]").textContent = ny.title.rendered;
            dest.appendChild(klon);
        });
    }
}
