// const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])'); //находим нужный атрибут (всё что начинается с # , но содержит не только #)
//                                                                     //можно добавить класс эл-там, к которым нужно обратиться и обратиться к нему
// smothScrollElems.forEach(link => { //перебираем элементы
//     link.addEventListener('click', (event) => {  //событие клик
//         event.preventDefault()  //запрещаем браузеру выполнять стандартную прокрутку
//         const id = link.getAttribute('href').substring(1)  //берём атрибут у нашей ссылки и обезаем его с первого символа(удаляем решётку)
//         document.getElementById(id).scrollIntoView({
//             behavior: 'smooth'  //Свойство, которое указывает, как будет раотать прокрутка(в данном случае плавно)
//         })
//     })
// })
const SPEED = 0.5;
const scrolled = (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.matches('[href^="#"]')) {
        let start = 0;
        const pageY = window.pageYOffset;
        const hash = target.getAttribute('href');
        if (hash === '#') return
        const elem = document.querySelector(hash);
        const coordinateElem = elem.getBoundingClientRect().top;
        const step = time => {
            if (!start) start = time;
            const progress = time - start;
            const r = (coordinateElem < 0 ? 
                Math.max(pageY - progress / SPEED, pageY + coordinateElem) : 
                Math.min(pageY + progress / SPEED, pageY + coordinateElem));
            window.scrollTo(0, r);
            if (r < pageY + coordinateElem) requestAnimationFrame(step);

        }
        requestAnimationFrame(step)
    }
}

document.body.addEventListener('click', scrolled);