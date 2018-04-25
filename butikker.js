//henter json//
async function start() {
    let jsondata = await fetch("http://www.magnusstampe.dk/food8/wp/wp-json/acf/v3/butikker");

    MinSlider = await jsondata.json();
    console.log(MinSlider[0].acf.start_billedet_.url);
    vis();


}

function vis() {
    let dest = document.querySelector("[data-buti-dest]");
    let temp = document.querySelector("[data-template]");

    MinSlider.forEach(billeder => {
        console.log(billeder.acf.start_billedet_.url);
        let klon = temp.cloneNode(true).content;

        //        //data i <div>
        klon.querySelector("[data-buti-img]").src = billeder.acf.start_billedet_.url;
        klon.querySelector("[data-buti-img]").alt = billeder.acf.start_billedet_.url;
        dest.appendChild(klon);


        //
    });
    //

}
