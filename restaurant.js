//###########################################
//SETUP - Setup af variabler og startfunktion
//###########################################

//Database restauranter
let rest;
//Database enkelte restaurant
let restaurant;

// Initial function
document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentRestaurant();
}

//#################################
//HTML - Indsæt HTML til restaurant
//#################################
async function hentRestaurant() {
    let htmlData = await fetch("restaurant.html");
    let restaurantHtml = await htmlData.text();
    document.querySelector("main").innerHTML = restaurantHtml;

    hentJson();

    //###############################
    //JSON - Hent JSON til restaurant
    //###############################
    async function hentJson() {
        let jsonData = await fetch("http://www.magnusstampe.dk/food8/wp/wp-json/acf/v3/restauranter");
        //let jsonData = await fetch("test.json");
        rest = await jsonData.json();

        jsonInput();

    }

    //###############################
    //JSON - Indsæt JSONs HTML i HTML
    //###############################
    function jsonInput() {
        rest.forEach(restaurant => {

            //Find restaurantens navn fra <h1 id="header">NAVN PÅ RESTAURANT</h1>
            restaurantNavn = document.getElementById("header").textContent;

            //Sammenligner restaurantnavn fra databasen med navn fra #header, tjek console.log fra efter "else" hvis der er problemer
            if (restaurantNavn == restaurant.acf.restaurant_navn) {
                console.log("Match: " + restaurantNavn + " fundet");

                //Indsæt tekst til "om" i "data-info"
                document.querySelector("[data-info]").innerHTML = restaurant.acf.om_restauranten;
                //Indsæt restaurantens adresse
                document.querySelector("[data-address]").innerHTML = restaurant.acf.adresse;
                //Indsæt telefonnummer hvis der er et
                if (restaurant.acf.nummer != "") {
                    document.querySelector("[data-nummer]").innerHTML = "Tlf: +45 " + restaurant.acf.nummer;
                }
                //Indsæt åbningstider
                document.querySelector("[data-abningstider]").innerHTML = restaurant.acf.åbningstider;


                //##################################
                //NAV HTML - Samling af HTML til NAV
                //##################################
                let menuNr = "1";
                let menukort = "menukort" + menuNr;
                let menukortNavn = "navn_pa_menukort" + menuNr;
                let navHtml = "<button data-nav-om>Om</button>";

                //Ret logo i header til restaurantens logo
                document.querySelector("#header_bar img").src = restaurant.acf.logo.url;
                document.querySelector("#header_bar img").alt = restaurant.acf.restaurantens_navn;
                //Ret headerens farve til restaurantens farve
                document.querySelector("#header_bar").style.backgroundColor = restaurant.acf.farve;
                document.querySelector("header nav").style.backgroundColor = restaurant.acf.farve;

                indsaetMenukort(menukort, menukortNavn);

                function indsaetMenukort(nr1, nr2) {
                    //JSON stig til menukortet
                    let jsonLink = restaurant.acf[nr1];

                    //Indsæt menupunkter indtil der ikke er flere
                    if (jsonLink != "") {

                        //Indsæt HTML i variabel
                        navHtml = navHtml + "<button data-nav-" + menuNr + ">" + restaurant.acf[nr2] + "</button>";

                        //Gør klar til næste menukort
                        menuNr++;
                        let menukort = "menukort" + menuNr;
                        let menukortNavn = "navn_pa_menukort" + menuNr;
                        //Start "indseatMenukort()" forfra
                        indsaetMenukort(menukort, menukortNavn);

                    } else {
                        //#################################################
                        //NAV HTML - Indsæt HTML i NAV og highlight knapper
                        //#################################################
                        document.querySelector("[data-nav]").innerHTML = navHtml + "<button data-nav-kontrol>Kontrolrapport</button>";

                        let selectedColor = "#111";
                        let notSelectedColor = "555"

                        //Highlight "om"
                        document.querySelector("[data-nav-om]").style.color = selectedColor;

                        //EventListener til "Om"
                        document.querySelector("[data-nav-om]").addEventListener("click", () => {
                            let knapNr = 1;

                            while (knapNr < menuNr) {
                                document.querySelector("[data-nav-" + knapNr + "]").style.color = notSelectedColor;
                                knapNr++
                            }
                            document.querySelector("[data-nav-kontrol]").style.color = notSelectedColor;
                            document.querySelector("[data-nav-om]").style.color = selectedColor;
                            document.querySelector("[data-info]").innerHTML = restaurant.acf.om_restauranten;
                        });
                        //EventListener til "Kontrolrapport"
                        document.querySelector("[data-nav-kontrol]").addEventListener("click", () => {

                            let knapNr = 1;

                            while (knapNr < menuNr) {
                                document.querySelector("[data-nav-" + knapNr + "]").style.color = notSelectedColor;
                                knapNr++
                            }
                            document.querySelector("[data-nav-om]").style.color = notSelectedColor;
                            document.querySelector("[data-nav-kontrol]").style.color = selectedColor;
                            document.querySelector("[data-info]").innerHTML = "<a href='" + restaurant.acf.kontrolrapport + "' target='_blank'>" + restaurant.acf.kontrolrapport + "</a>";
                        });
                        //EventListeners til menupunkter
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

                        //function() til at highlighte menupunktsknapper
                        function highlightBut(knap) {

                            let knapNr = 1;

                            document.querySelector("[data-nav-om]").style.color = "#555";
                            document.querySelector("[data-nav-kontrol]").style.color = "#555";
                            while (knapNr < menuNr) {
                                document.querySelector("[data-nav-" + knapNr + "]").style.color = "#555";
                                knapNr++
                            }
                            document.querySelector("[data-nav-" + knap + "]").style.color = "#111";

                            document.querySelector("[data-info]").innerHTML = restaurant.acf["menukort" + knap];
                        }
                    }
                }

            } else {
                //###########################################
                //INTET MATCH - console.log til at finde fejl
                //###########################################
                console.log("Intet match: " + restaurantNavn + " & " + restaurant.acf.restaurant_navn);
            }
        });
    }

}
