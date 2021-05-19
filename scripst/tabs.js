const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');  //переменная по атрибуту берётся в квадратных скобках
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');

for (const tab of tabsHandlerElems) {   //(цикл форОф) получаем каждый элемент в переменную tab
    tab.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => {
            if (tab === item) {  //условие, если tab тот самый item, который в данный момент перебирается
                item.classList.add('design-list__item_active'); //то мы добавляем ему класс
            } else {                                           //иначе
                item.classList.remove('design-list__item_active'); //удаляем класс
            }
        })
        tabsFieldElems.forEach(item => {
            if(item.dataset.tabsField === tab.dataset.tabsHandler) {   //если у нашего айтема dataset(обёкт для работы с дата атрибутами(tabsField/tabsHandler)) совпадают
                item.classList.remove('hidden') //Удаляем класс hidden
            } else {                          //иначе
                item.classList.add('hidden')  //Добаялем класс
            }

        })
    })
}