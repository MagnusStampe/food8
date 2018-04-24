// Initial function

let restauranter = [];
let billede = 1;
let menukort = 1;

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentRestaurant();
};

// Hent restaurant HTML

async function hentRestaurant() {
    let restaurantData = await fetch("restaurant.html");
    console.log("Hent HTML");
    let restaurantHtml = await restaurantData.text();
    document.querySelector("main").innerHTML = restaurantHtml;

    hentJson();
    // Hent JSON

    async function hentJson() {
        console.log("restauranterJson");

        let jsonData = await fetch("http://www.magnusstampe.dk/food8/wp/wp-json/wp/v2/restauranter");

        let restaurantNavn = document.getElementById("slet");

        restauranter = await jsonData.json();

        restauranter.forEach(restaurant => {

            if (restaurantNavn == restauranter.acf.restaurant_navn) {
                alert("Det virker");
            } else {
                console.log(restaurantNavn + "&" + restauranter.restaurant_navn);
            }

        });

        //Galleri



    }

}
