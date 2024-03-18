let url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=100'
// let url2 = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=20&character='
const select = document.querySelector('#select');
const cajaSimpsons = document.querySelector('.section');

// Llamada a la API para obtener los datos
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Recorremos los datos y los añadimos al select
        data.forEach(element => {
            const option = document.createElement('option');
            option.textContent = element.character;
            option.value = JSON.stringify(element); // Guardamos todo el objeto JSON como valor de la opción
            select.appendChild(option);
            cajaSimpsons.innerHTML = `<div class= "cardContainer"><h2>${element.character}<h2>
                                        <img class="img" src=${element.image}>
                                        <p class= "characterParagraph">${element.quote}</p> </div>`;
        });
    })
    .catch(error => console.error('Error al obtener los datos:', error));

// Escuchamos el evento cambio del select
select.addEventListener('change', function () {
    const selectedElement = JSON.parse(this.value); // Parseamos el JSON guardado como valor
    cajaSimpsons.innerHTML = `<div class= "cardContainer"><h2>${selectedElement.character}<h2>
                     <img class="img" src=${selectedElement.image}>
               <p class= "characterParagraph">${selectedElement.quote}</p> </div>`;
});
