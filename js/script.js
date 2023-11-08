document.addEventListener("DOMContentLoaded", ()=>{
    init()
})


// Burger menu

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })

})