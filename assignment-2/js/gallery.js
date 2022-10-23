/**
 * Store img Variables
 */
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let img5 = document.querySelector("#img5");
let imgLarge = document.querySelector("#imgLarge");

let imgArray = [img1, img2, img3, img4, img5];

resetImgStyle();

img1.style.border = "1px solid white";
img1.style.filter = "grayscale(0)";

document.querySelector("figcaption").innerHTML = "Lovely Pink Flowers";


/**
 * Loop through eimage event handlers
 */
for (let j = 0; j < imgArray.length; j++){

    /**
     * Event Listeners for images
     */
    let images = imgArray[j];
    images.addEventListener("click", () => {
        imgLarge.src = imgArray[j].src.replace("small", "large");

        resetImgStyle();

        /**
         * figcaption text display switch
         */
        imgArray[j].style.border = "1px solid white";
        imgArray[j].style.transform = "scale(1.05)";
        imgArray[j].style.filter = "grayscale(0)";


        switch(j) {
            case 0:
                document.querySelector("figcaption").innerHTML = "Lovely Pink Flowers";
                break;
            case 1:
                document.querySelector("figcaption").innerHTML = "Gorgeous Purple Flowers";
                break;
            case 2:
                document.querySelector("figcaption").innerHTML = "Pretty Red Flowers";
                break;
            case 3:
                document.querySelector("figcaption").innerHTML = "Remarkable White Flowers";
                break;
            case 4:
                document.querySelector("figcaption").innerHTML = "Yellow Sun Flowers";
                break;
            default:
                document.querySelector("figcaption").innerHTML = "Lovely Pink Flowers";
            } 
    })

    images.addEventListener("mouseover", () => {
        imgArray[j].style.border = "1px solid white";
        imgArray[j].style.transform = "scale(1.05)";
        imgArray[j].style.transition = "all 0.3s ease-out";
    })

    images.addEventListener("mouseout", () => {
        if (imgLarge.src != imgArray[j].src.replace("small", "large")){
                imgArray[j].style.transform = "scale(1)";
                imgArray[j].style.border = "0px";
            }
    })   
}

/**
 * Functions
 */
function resetImgStyle() {

    for (var i = 0; i < 5; i++)
    {
        imgArray[i].style.border = "0px";
        imgArray[i].style.transform = "scale(1)";
        imgArray[i].style.filter = "grayscale(1)";

    }
}

