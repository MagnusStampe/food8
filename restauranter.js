document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentJson();
}


//JSON

async function hentJson() {
    let jsonData = await fetch("http://www.magnusstampe.dk/food8/wp/wp-json/acf/v3/restauranter");
    rest = await jsonData.json();

    console.log("Hent JSON")
    vis();



    function vis() {
        console.log("vis()")
        let dest = document.querySelector("[data-rest-dest]");
        let temp = document.querySelector("[data-rest-temp]");

        rest.forEach(restaurant => {

            let klon = temp.cloneNode(true).content;

            klon.querySelector("[data-rest-h2]").innerHTML = restaurant.acf.restaurant_navn;
            klon.querySelector("[data-rest-a]").href = restaurant.acf.Link + ".html";
            klon.querySelector("[data-rest-logo]").src = restaurant.acf.logo.url;
            klon.querySelector("[data-rest-logo]").alt = restaurant.acf.restaurant_navn;
            klon.querySelector("[data-rest-img]").src = restaurant.acf.baggrundsbillede.url;
            klon.querySelector("[data-rest-img]").alt = restaurant.acf.restaurant_navn;
            console.log(restaurant.acf.baggrundsbillede);
            dest.appendChild(klon);
        });

        visListe();
        document.querySelector(".buttonliste").addEventListener("click", visListe);


        function visListe() {
            document.querySelector("#liste").classList.remove("hide");
            document.querySelector("#kort").classList.add("hide");
            document.querySelector(".buttonliste").style.backgroundColor = "blue";
            document.querySelector(".buttonkort").style.backgroundColor = "beige";

        }

        document.querySelector(".buttonkort").addEventListener("click", visMap);


        function visMap() {
            document.querySelector("#kort").classList.remove("hide");
            document.querySelector("#liste").classList.add("hide");
            document.querySelector(".buttonliste").style.backgroundColor = "beige";
            document.querySelector(".buttonkort").style.backgroundColor = "blue";
        }
    }
}
