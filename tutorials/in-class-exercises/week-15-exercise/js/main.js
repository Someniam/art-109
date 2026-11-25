
const addImage = document.querySelector("#add-image")
const changeImage = document.querySelector("change-image")

const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")

let toggle = true;




addImage.addEventListener("click", () => {
    img1.classList.remove("hidden")
})



img1.addEventListener("click", () => {
    toggle = !toggle;
    if(toggle){
        img2
    } else {
        img1
    }
})