// Initial function

let rest;
let billede = 1;
let menukort = 1;

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentRestaurant();
}

// Hent restaurant HTML

async function hentRestaurant() {
    let htmlData = await fetch("restaurant.html");
    console.log("Hent HTML");
    let restaurantHtml = await htmlData.text();
    document.querySelector("main").innerHTML = restaurantHtml;

    hentJson();
    // Hent JSON

    async function hentJson() {
        console.log("hent JSON");

        //let jsonData = await fetch("http://www.magnusstampe.dk/food8/wp/wp-json/acf/v3/restauranter");
        let jsonData = await fetch("test.json");
        rest = await jsonData.json();

        console.log(rest);

        jsonInput();

    }

    function jsonInput() {
        restauranter.forEach(restaurant => {
            let restaurantNavn = document.getElementById("slet").textContent;
            console.log(restaurantNavn);

            if (restaurantNavn == restauranter.restaurant_navn) {} else {
                console.log(restaurantNavn + " & " + restauranter.restaurant_navn);
            }

        });
    }

    //Galleri



}
