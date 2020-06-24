const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener('click', function(){

        cardId = card.getAttribute('id')
        modalOverlay.querySelector('img').src = `/assets/${cardId}.png`

        cardRecipe = card.querySelector('h2').innerHTML
        modalOverlay.querySelector('h2').innerHTML = cardRecipe

        cardChef = card.querySelector('h3').innerHTML
        modalOverlay.querySelector('h3').innerHTML = cardChef
        
        modalOverlay.classList.add('active')
    })
}

document.querySelector('.modal-info p').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})