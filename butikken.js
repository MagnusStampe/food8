let urlParams = new URLSearchParams(window.location.search);

let urlid = urlParams.get("id");


document.addEventListener("DOMContentLoaded", start);

async function start() {
    let jsondata = await fetch("http://magnusstampe.dk/food8/wp/wp-json/wp/v2/butikker");
    nyheden1 = await jsondata.json();
    vis();
    console.log("kk")
}




function vis() {
    console.log("kk")
    nyheden1.forEach(nyhed => {
        if (nyhed.id == urlid) {
            console.log(nyhed.acf.om)
            document.querySelector("[data-P2]").innerHTML = nyhed.acf.om;



            document.querySelector("[data-ny-a]").href = "nyheden.html?id=" + nyhed.id;
            document.querySelector("[data-ny-img]").src = nyhed.acf.start_billedet_.url;
            document.querySelector("[data-ny-img]").alt = nyhed.acf.start_billedet_;
            document.querySelector("[data-p]").textContent = nyhed.title.rendered;



            //Indsæt tekst til "om" i "data-info"
            document.querySelector("[data-adresse]").innerHTML = nyhed.acf.adresse;
            //Indsæt restaurantens adresse
            document.querySelector("[data-email]").innerHTML = nyhed.acf.email;
            //Indsæt telefonnummer hvis der er et
            if (nyhed.acf.telefon != "") {
                document.querySelector("[data-telefon]").innerHTML = "Tlf: +45 " + nyhed.acf.telefon;
            }
            //Indsæt åbningstider
            document.querySelector("[data-abningstider]").innerHTML = nyhed.acf.open;
        }

    })
}
