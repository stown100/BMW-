const moreElem = document.querySelector('.more');  //кнопка, на которую будем кликать для открытия попапа
const modalElem = document.querySelector('.modal');  //обьявляем попап


const openModal = () => {
    modalElem.classList.remove('hidden')  //удаляем класс для открытия попапа
}

const closeModal = () => {
    modalElem.classList.add('hidden');  //добаялем класс для закрытия попапа
}

moreElem.addEventListener('click', openModal)  // при клике вызыввается функция открытия попапа
modalElem.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('overlay') || //закрытие при клике на фон или
    target.classList.contains('modal__close')) {  //закрытие при клике на крестик
        closeModal()  //эта функция вызывается, если происходит клик по фону или крестику
    }
})