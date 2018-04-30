async function start() {
    let jsondata = await fetch("http://magnusstampe.dk/food8/wp/wp-json/wp/v2/butikker");

    let jsondata2 = await fetch("http://magnusstampe.dk/food8/wp/wp-json/wp/v2/restauranter");

    MinSlider2 = await jsondata2.json();
    MinSlider = await jsondata.json();
    console.log(MinSlider[0].acf.start_billedet_.url);
    vis();
    showDivs(1);


}


function vis() {
    let dest = document.querySelector("[data-buti-dest]");
    let temp = document.querySelector("[data-template]");

    MinSlider.forEach(billeder => {
        console.log(billeder.acf.start_billedet_.url);
        let klon = temp.cloneNode(true).content;

        //        //data i <div>
        klon.querySelector("[data-buti-img]").src = billeder.acf.billede1.url;
        klon.querySelector("[data-buti-img]").alt = billeder.acf.billede1.url;
        dest.appendChild(klon);
        //denne kode skal like til Re document.querySelector("[data-ny-a]").href = "nyheden.html?id=" + nyhed.id;
    });

    MinSlider2.forEach(billeder => {
        console.log(billeder.acf.baggrundsbillede.url);
        let klon = temp.cloneNode(true).content;

        //        //data i <div>
        klon.querySelector("[data-buti-img]").src = billeder.acf.baggrundsbillede.url;
        klon.querySelector("[data-buti-img]").alt = billeder.acf.baggrundsbillede.url;
        dest.appendChild(klon);
        //
    });
    //

}


//let MinSlider;
//
//document.addEventListener("DOMContentLoaded", start);
////henter json//
//async function start() {
//    let jsondata = await fetch("fil.json");
//    MinSlider = await jsondata.json();
//    vis();
//    showDivs(1);
//
//}
//
////kloner//
//function vis() {
//    let dest = document.querySelector("[data-menu]");
//    let temp = document.querySelector("[data-template]");
//
//    MinSlider.forEach(billeder => {
//        console.log("vis");
//        let klon = temp.cloneNode(true).content;
//        //data i <div>
//
//        klon.querySelector("[data-foto]").src = "sliders/" + billeder.file;
//        klon.querySelector("[data-foto]").alt = billeder.note;
//        dest.appendChild(klon);
//    });
//
//
//
//}




//start på slideren
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
