// перекраска первой карточки 

const recolorFirstButton =document.getElementById('recolor-first-button')
const firstCatalogCard = document.querySelector('.card-container')
const blueHashColor = '#0000FF' ;

recolorFirstButton.addEventListener('click', () => {
    firstCatalogCard.classList.toggle('active-blue');
});


// покраска всех карточек
const greenHashColor = '#00ff04'
const catalogCards  = document.querySelectorAll ('.card-container')
const recolorAllCardButton =document.getElementById('recolor-all-button')

recolorAllCardButton.addEventListener('click', () => {
    catalogCards.forEach(card => {
        card.classList.toggle('active-green');
    });

})

//переход на страницу google 

 const googleOpenButton = document.getElementById('open-google-button')
 googleOpenButton.addEventListener('click', openGoogle)

 function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google? ')
   if (answer === true ) {
    window.open('https://google.com')
   } else {
    console.log('пользователь отменил переход')
   }
 }


//создаем консоль на главный заголовок 
const divEl = document.getElementsByClassName('product-selection-title')[0]
divEl.addEventListener('mouseover', function () {
  alert('курсор вошёл в границы элемента!')
})