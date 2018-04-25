// Initial function

let rest;
let billede = 1;

let info;

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentRestaurant();
}

//insæt HTML i infobox
function navListener(data) {
    console.log("hej");
    document.querySelector("[data-info]").innerHTML = info.acf[data];
}

// Hent restaurant HTML

async function hentRestaurant() {
    let htmlData = await fetch("restaurant.html");
    let restaurantHtml = await htmlData.text();
    document.querySelector("main").innerHTML = restaurantHtml;

    hentJson();
    // Hent JSON

    async function hentJson() {
        let jsonData = await fetch("http://www.magnusstampe.dk/food8/wp/wp-json/acf/v3/restauranter");
        //let jsonData = await fetch("test.json");
        rest = await jsonData.json();

        jsonInput();

    }

    function jsonInput() {
        rest.forEach(restaurant => {
            let restaurantNavn = document.getElementById("slet").textContent;

            if (restaurantNavn == restaurant.acf.restaurant_navn) {
                console.log(restaurantNavn + " fundet");

                document.querySelector("[data-info]").innerHTML = restaurant.acf.om_restauranten;
                document.querySelector("[data-address]").innerHTML = restaurant.acf.adresse;
                document.querySelector("[data-nummer]").innerHTML = "Tlf: +45 " + restaurant.acf.nummer;

                //####
                //infobox
                //####

                //HTML
                let navHtml = "<button data-nav-om>Om</button>";

                //Om restaurant
                let om = restaurant.acf.om_restauranten;


                //Menukort
                let menuNr = "1";
                let menukort = "menukort" + menuNr;
                let menukortNavn = "navn_pa_menukort" + menuNr;

                let menu1 = restaurant.acf.menukort1;
                let menu2 = restaurant.acf.menukort2;
                let menu3 = restaurant.acf.menukort3;
                let menu4 = restaurant.acf.menukort4;
                let menu5 = restaurant.acf.menukort5;
                let menu6 = restaurant.acf.menukort6;
                let menu7 = restaurant.acf.menukort7;
                let menu8 = restaurant.acf.menukort8;
                let menu9 = restaurant.acf.menukort9;
                let menu10 = restaurant.acf.menukort10;

                console.log(menukort)

                indsaetMenukort(menukort, menukortNavn);

                function indsaetMenukort(nr1, nr2) {
                    console.log("indsæt");
                    let jsonLink = restaurant.acf[nr1];
                    info = restaurant;
                    console.log(info);

                    if (jsonLink != "") {

                        //Indsæt HTML i variabel
                        navHtml = navHtml + "<button onclick=\"navListener('" + nr1 + "')\" data-nav-" + menuNr + ">" + restaurant.acf[nr2] + "</button>";

                        function addListener() {
                            navListener(nr1);
                        }

                        console.log(navHtml);


                        //Gør klar til næste menukort
                        menuNr++;
                        let menukort = "menukort" + menuNr;
                        let menukortNavn = "navn_pa_menukort" + menuNr;
                        indsaetMenukort(menukort, menukortNavn);
                        console.log(menukort, menukortNavn);

                    } else {
                        console.log("navHTML is: " + navHtml);
                        document.querySelector("[data-nav]").innerHTML = navHtml;

                        document.querySelector("[data-nav-om]").addEventListener("click", omHtml);

                        function omHtml() {
                            console.log(restaurant.acf.om_restauranten);
                            document.querySelector("[data-info]").innerHTML = restaurant.acf.om_restauranten;
                        }
                    }
                }
                console.log(info);
                //Navigationsmenu

                //function navListener(data) {}

            } else {
                console.log(restaurantNavn + " & " + restaurant.acf.restaurant_navn);
            }
        });
    }

    //Galleri

}
