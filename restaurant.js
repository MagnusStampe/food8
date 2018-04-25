// Initial function

let rest;
let billede = 1;

let info;
let highlightNew = "om";
let highlightOld;

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentRestaurant();
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

    function highlightNav(high) {
        highlightOld = highlightNew;
        highlightNew = high;

        console.log("[data-nav-" + highlightNew + "]");

        document.querySelector("[data-nav-" + highlightNew + "]").classList.add("highlight");
        document.querySelector("[data-nav-" + highlightOld + "]").classList.remove("highlight");
    }


    function jsonInput() {
        rest.forEach(restaurant => {
            let restaurantNavn = document.getElementById("header").textContent;

            if (restaurantNavn == restaurant.acf.restaurant_navn) {
                console.log("Match: " + restaurantNavn + " fundet");

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

                indsaetMenukort(menukort, menukortNavn);

                function indsaetMenukort(nr1, nr2) {
                    let jsonLink = restaurant.acf[nr1];
                    info = restaurant;

                    if (jsonLink != "") {

                        //Indsæt HTML i variabel
                        navHtml = navHtml + "<button data-nav-" + menuNr + ">" + restaurant.acf[nr2] + "</button>";

                        function addListener() {
                            navListener(nr1);
                        }

                        //Gør klar til næste menukort
                        menuNr++;
                        let menukort = "menukort" + menuNr;
                        let menukortNavn = "navn_pa_menukort" + menuNr;
                        indsaetMenukort(menukort, menukortNavn);

                    } else {
                        document.querySelector("[data-nav]").innerHTML = navHtml;
                        document.querySelector("[data-nav-om]").style.color = "#111";

                        document.querySelector("[data-nav-om]").addEventListener("click", () => {


                            let knapNr = 1;

                            while (knapNr < menuNr) {
                                document.querySelector("[data-nav-" + knapNr + "]").style.color = "#555";
                                console.log(knapNr)
                                knapNr++
                            }
                            document.querySelector("[data-nav-om]").style.color = "#111";
                            document.querySelector("[data-info]").innerHTML = restaurant.acf.om_restauranten;
                        });
                        document.querySelector("[data-nav-1]").addEventListener("click", () => {
                            highlightBut("1");
                        });
                        document.querySelector("[data-nav-2]").addEventListener("click", () => {
                            highlightBut("2");
                        });
                        document.querySelector("[data-nav-3]").addEventListener("click", () => {
                            highlightBut("3");
                        });
                        document.querySelector("[data-nav-4]").addEventListener("click", () => {
                            highlightBut("4");
                        });
                        document.querySelector("[data-nav-5]").addEventListener("click", () => {
                            highlightBut("5");
                        });
                        document.querySelector("[data-nav-6]").addEventListener("click", () => {
                            highlightBut("6");
                        });
                        document.querySelector("[data-nav-7]").addEventListener("click", () => {
                            highlightBut("7");
                        });
                        document.querySelector("[data-nav-8]").addEventListener("click", () => {
                            highlightBut("8");
                        });
                        document.querySelector("[data-nav-9]").addEventListener("click", () => {
                            highlightBut("9");
                        });
                        document.querySelector("[data-nav-10]").addEventListener("click", () => {
                            highlightBut("10");
                        });

                        function highlightBut(knap) {

                            let knapNr = 1;

                            document.querySelector("[data-nav-om]").style.color = "#555";
                            while (knapNr < menuNr) {
                                document.querySelector("[data-nav-" + knapNr + "]").style.color = "#555";
                                console.log(knapNr)
                                knapNr++
                            }
                            document.querySelector("[data-nav-" + knap + "]").style.color = "#111";

                            document.querySelector("[data-info]").innerHTML = restaurant.acf["menukort" + knap];
                        }
                    }
                }

            } else {
                console.log("Intet match: " + restaurantNavn + " & " + restaurant.acf.restaurant_navn);
            }
        });
    }

}
