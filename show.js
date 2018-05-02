document.addEventListener("DOMContentLoaded", start);

async function start() {
    let jsondata = await fetch("http://magnusstampe.dk/food8/wp/wp-json/wp/v2/butikker");

    let jsondata2 = await fetch("http://magnusstampe.dk/food8/wp/wp-json/wp/v2/restauranter");

    MinSlider2 = await jsondata2.json();
    MinSlider = await jsondata.json();
    console.log(MinSlider[0].acf.start_billedet_.url);
    vis();
    showDivs();


}


function vis() {
    let dest = document.querySelector("[data-buti-dest]");
    let temp = document.querySelector("[data-template]");

    MinSlider.forEach(billeder => {
        console.log(billeder.acf.start_billedet_.url);
        let klon = temp.cloneNode(true).content;

        //        //data i <div>
        klon.querySelector("[data-ny-a]").href = "butikken.html?id=" + billeder.id;
        klon.querySelector("[data-buti-img]").src = billeder.acf.billede1.url;
        klon.querySelector("[data-buti-img]").alt = billeder.acf.billede1.url;
        dest.appendChild(klon);
        //denne kode skal link til Re document.querySelector("[data-ny-a]").href = "nyheden.html?id=" + nyhed.id;
    });

    MinSlider2.forEach(billeder => {
        console.log(billeder.acf.baggrundsbillede.url);
        let klon = temp.cloneNode(true).content;

        //        //data i <div>
        klon.querySelector("[data-ny-a]").href = billeder.acf.Link + ".html";
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

var myIndex = 0;
showDivs();

function showDivs() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(showDivs, 2000); // Change image every 2 seconds
}


////start på slideren
//var slideIndex = 1;
//showDivs(slideIndex);
//
//function plusDivs(n) {
//    showDivs(slideIndex += n);
//}
//
//function showDivs(n) {
//    var i;
//    var x = document.getElementsByClassName("mySlides");
//    if (n > x.length) {
//        slideIndex = 1
//    }
//    if (n < 1) {
//        slideIndex = x.length
//    }
//    for (i = 0; i < x.length; i++) {
//        x[i].style.display = "none";
//    }
//    x[slideIndex - 1].style.display = "block";
//}
//
//
//galari = document.getElementById("header").;
