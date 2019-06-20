(() => {

    // Handle Responsive menu toggle button.
    const menu_toggle = document.querySelector('.menu-toggle');
    const menus = document.querySelector('.menus');

    menu_toggle.addEventListener('click', () => {
        classie.toggle(menu_toggle, 'clicked');
        classie.toggle(menus, 'open');
    });

    menus.childNodes.forEach((el) =>
        el.addEventListener('click', () => {
            classie.toggle(menus, 'open');
            classie.toggle(menu_toggle, 'clicked');
        })
    );



})()