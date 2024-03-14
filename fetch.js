let div = document.querySelector('.div')
let cajaSimpsons = document.querySelector(".section")
let input = document.querySelector('.input')
let url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=6'
let url2 = 'https://thesimpsonsquoteapi.glitch.me/quotes?character='

// btn.addEventListener('click', () => {
//     div.classList.add('active')
//     setTimeout(() => {
//         div.classList.remove('active')
//     }, 3000)
// })
apiSimpsons()

input.addEventListener('keyup', characterFilter)
function characterFilter() {
    cajaSimpsons.innerHTML = "";
    fetch(url2 + input.value)
        .then(resolve => resolve.json())
        .then(data => {
            console.log(data)
            data.forEach(element => {
                cajaSimpsons.innerHTML += `<div class= "cardContainer"><h2>${element.character}<h2>
                <img class="img" src=${element.image}>
                <p class= "characterParagraph">${element.quote}</p> </div>`
            });
        })
}

function apiSimpsons() {
    fetch(url)
        .then(resolve => resolve.json())
        .then(data => {
            console.log(data)
            data.forEach(element => {
                cajaSimpsons.innerHTML += `<div class= "cardContainer"><h2>${element.character}<h2>
                <img class="img" src=${element.image}>
                <p class= "characterParagraph">${element.quote}</p> </div>`
            });
        })
}

