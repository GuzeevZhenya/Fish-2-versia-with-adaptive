(() => {
    const menuButton = document.querySelector('.navigation__button');
    const menuList = document.querySelector('.navigation__list');

    //Добавляем обработчик событик к menuButton
    menuButton.addEventListener('click', () => {
        let expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        //После нажатия меняем значение атрибута
        menuButton.setAttribute('aria-expanded', !expanded);
        menuButton.classList.toggle('navigation__button--open');
        menuList.classList.toggle('navigation__list--open');
    });
})()