document.addEventListener('DOMContentLoaded', () => {
    const featureLinkElems = document.querySelectorAll('.feature__link');  //обЪявляется переменная, стрелочка
    const featureSubElems = document.querySelectorAll('.feature-sub');  //переменная, список

    featureLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('feature__link_active')) {
                featureSubElems[index].classList.add('hidden');  //закрытие списка при нажатии на его стрелку
                btn.classList.remove('feature__link_active'); //стрелка как при закрытом списке
            } else {
            featureSubElems.forEach((featureSubElem) => {
                featureSubElem.classList.add('hidden');  //Закрыть список при открытии нового
            })
            featureLinkElems.forEach((featureLinkElem) => {
                featureLinkElem.classList.remove('feature__link_active');  //Изменяется положение стрелки (вниз)
            })
            featureSubElems[index].classList.remove('hidden'); //развернуть список
            btn.classList.add('feature__link_active');
        } //поменять положение стрелки (вверх)
        })
    })
})