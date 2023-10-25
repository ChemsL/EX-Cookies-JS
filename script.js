

function couleur() {
    if (this.gender == "Femme") {
        document.card2.style.backgroundColor = "#ffd9e2"
    }
}





document.getElementById('navhommes').addEventListener('click', function () {
    let femmes = document.querySelectorAll(".card-body-female")
    femmes.forEach(function (femme) {
        femme.style.display = 'none'
    })
    let hommes = document.querySelectorAll(".card-body-male")
    hommes.forEach(function (homme) {
        homme.style.display = 'block'
    })
})


document.getElementById('navfemmes').addEventListener('click', function () {
    let hommes = document.querySelectorAll(".card-body-male")
    hommes.forEach(function (homme) {
        homme.style.display = 'none'
    })
    let femmes = document.querySelectorAll(".card-body-female")
    femmes.forEach(function (femme) {
        femme.style.display = 'block'
    })
})

document.getElementById('navall').addEventListener('click', function () {
    let hommes = document.querySelectorAll(".card-body-male")
    hommes.forEach(function (homme) {
        homme.style.display = 'block'
    })
    let femmes = document.querySelectorAll(".card-body-female")
    femmes.forEach(function (femme) {
        femme.style.display = 'block'
    })
})


let idValue 
const params = new URLSearchParams(window.location.search);







