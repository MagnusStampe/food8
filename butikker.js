document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentJson();
}
let kate;
//JSON

async function hentJson() {
    let jsonData = await fetch("http://www.magnusstampe.dk/food8/wp/wp-json/acf/v3/butikker");
    butikker = await jsonData.json();

    console.log("Hent JSON")
    vis();


}

function visz() {
    console.log("vis()")
    let dest = document.querySelector("[data-buti-dest]");
    let temp = document.querySelector("[data-buti-temp]");
    document.querySelector("[data-buti-dest]").innerHTML = "";
    butikker.forEach(butik => {
        if (butik.acf.vin == kate) {
            console.log("vis2()")

            let klon = temp.cloneNode(true).content;

            klon.querySelector("[data-buti-h2]").innerHTML = butik.acf.butikkens_navn;


            klon.querySelector("[data-buti-a]").href = "butikken.html?id=" + butik.id;
            klon.querySelector("[data-buti-img]").src = butik.acf.start_billedet_.url;
            klon.querySelector("[data-buti-img]").alt = butik.acf.start_billedet_.url;
            dest.appendChild(klon);
        }
    });
}

visListe();
document.querySelector(".buttonliste").addEventListener("click", visListe);


function visListe() {
    document.querySelector("#liste").classList.remove("hide");
    document.querySelector("#map").classList.add("hide");
}

document.querySelector(".buttonkort").addEventListener("click", visMap);


function visMap() {
    document.querySelector("#map").classList.remove("hide");
    document.querySelector("#liste").classList.add("hide");
}

document.querySelector(".vin_knap").addEventListener("click", () => {
    kate = "vin";
    visz();
    console.log("klik11");
});


document.querySelector(".slagter_knap").addEventListener("click", () => {
    kate = "kød";
    visz();
    console.log("klik");
});

function vis() {
    console.log("vis()")
    let dest = document.querySelector("[data-buti-dest]");
    let temp = document.querySelector("[data-buti-temp]");
    document.querySelector("[data-buti-dest]").innerHTML = "";
    butikker.forEach(butik => {


        let klon = temp.cloneNode(true).content;

        klon.querySelector("[data-buti-h2]").innerHTML = butik.acf.butikkens_navn;


        klon.querySelector("[data-buti-a]").href = "butikken.html?id=" + butik.id;
        klon.querySelector("[data-buti-img]").src = butik.acf.start_billedet_.url;
        klon.querySelector("[data-buti-img]").alt = butik.acf.start_billedet_.url;
        dest.appendChild(klon);


    });
};
