document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentJson();
}

let kate;

//JSON

async function hentJson() {
    let jsonData = await fetch("http://magnusstampe.dk/food8/wp/wp-json/wp/v2/nyheder");
    nyheden1 = await jsonData.json();

    console.log("Hent JSON")
    visAlle();

    function visAlle() {
        console.log("vis()")
        let dest = document.querySelector("[data-ny-dest]");
        let temp = document.querySelector("[data-ny-temp]");
        document.querySelector("[data-ny-dest]").innerHTML = "";

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

    document.querySelector(".nyhed_knap").addEventListener("click", () => {
        kate = "nyhed";
        visKategori();
        console.log("klik11");
    });


    document.querySelector(".guides_knap").addEventListener("click", () => {
        kate = "guide";
        visKategori();
        console.log("klik");
    });


    function visKategori() {
        console.log("vis1()")
        let dest = document.querySelector("[data-ny-dest]");
        let temp = document.querySelector("[data-ny-temp]");
        document.querySelector("[data-ny-dest]").innerHTML = "";
        console.log(kate);
        nyheden1.forEach(ny => {

            console.log(kate + ny.acf[kate] + ny.acf.guide);

            if (ny.acf.kategori == kate) {
                console.log("vis2()")
                let klon = temp.cloneNode(true).content;

                //klon.querySelector("[data-P2]").innerHTML = ny.content.rendered;
                klon.querySelector("[data-ny-a]").href = "nyheden.html?id=" + ny.id;
                klon.querySelector("[data-ny-img]").src = ny.acf.nyhed.url;
                klon.querySelector("[data-ny-img]").alt = ny.acf.restaurant_navn;
                klon.querySelector("[data-p]").textContent = ny.title.rendered;
                dest.appendChild(klon);
            }
        });
    }
}
