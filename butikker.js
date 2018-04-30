document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentJson();
}

//JSON

async function hentJson() {
    let jsonData = await fetch("http://www.magnusstampe.dk/food8/wp/wp-json/acf/v3/butikker");
    butikker = await jsonData.json();

    console.log("Hent JSON")
    vis();

    function vis() {
        console.log("vis()")
        let dest = document.querySelector("[data-buti-dest]");
        let temp = document.querySelector("[data-buti-temp]");

        butikker.forEach(butik => {

            let klon = temp.cloneNode(true).content;

            klon.querySelector("[data-buti-h2]").innerHTML = butik.acf.butikkens_navn;


            klon.querySelector("[data-buti-a]").href = "butikken.html?id=" + butik.id;
            klon.querySelector("[data-buti-img]").src = butik.acf.start_billedet_.url;
            klon.querySelector("[data-buti-img]").alt = butik.acf.start_billedet_.url;
            dest.appendChild(klon);
        });
    }
}
