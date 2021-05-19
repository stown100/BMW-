const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])'); //находим нужный атрибут (всё что начинается с # , но содержит не только #)
smothScrollElems.forEach(link => { //перебираем элементы
    link.addEventListener('click', (event) => {  //событие клик
        event.preventDefault()  //запрещаем браузеру выполнять стандартную прокрутку
        const id = link.getAttribute('href').substring(1)  //берём атрибут у нашей ссылки и обезаем его с первого символа(удаляем решётку)
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'  //Свойство, которое указывает, как будет раотать прокрутка(в данном случае плавно)
        })
    })
})