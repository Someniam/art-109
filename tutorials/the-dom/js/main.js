// console.log("igdoof")

// select html elements
const header = document.querySelector("#header")
const changeHeaderButton = document.querySelector("#change-header-button")
const changeThemeButton = document.querySelector("#change-theme-button")

//change header with button click
changeHeaderButton.addEventListener("click", () => {
    header.innerHTML = "POW!!!!"
})
//toggle color theme

//create function for changing button text
function changeButtonText(){
    if (document.body.classList.contains("dark")) {
        changeThemeButton.textContent = "Switch to Light Theme"
    } else { 
        changeThemeButton.textContent = "Switch to Dark Theme"
    }
}

//click event on button
changeThemeButton.addEventListener("click", () => {
    //add or remove dark class to body
    document.body.classList.toggle("dark")
    changeButtonText();
})