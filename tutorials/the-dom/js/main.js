// console.log("igdoof")

// select html elements
const header = document.querySelector("#header")
const changeHeaderButton = document.querySelector("#change-header-button")

//change header with button click
changeHeaderButton.addEventListener("click", () => {
    header.innerHTML = "POW!!!!"
})