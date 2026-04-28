document.addEventListener('DOMContentLoaded', function() {
    
    // 1. ПОЯВЛЕНИЕ СТРАНИЦЫ
    const records = document.getElementById('allrecords');
    setTimeout(() => {
        if(records) records.classList.add('t-records_visible');
    }, 100);

    // 2. МОБИЛЬНОЕ МЕНЮ
    const burger = document.querySelector('.t-menuburger');
    const menu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-list a');

    burger.addEventListener('click', function() {
        this.classList.toggle('open');
        menu.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку и плавный переход
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            burger.classList.remove('open');
            menu.classList.remove('active');

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // учитываем высоту шапки
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. COOKIE КНОПКА
    const cookieBlock = document.getElementById('cookie-notice');
    const cookieBtn = document.getElementById('cookie-ok');
    
    if (sessionStorage.getItem('cookie_accepted')) {
        cookieBlock.style.display = 'none';
    }

    cookieBtn.addEventListener('click', () => {
        cookieBlock.style.display = 'none';
        sessionStorage.setItem('cookie_accepted', 'y');
    });

    // 4. ЯНДЕКС МЕТРИКА
    initMetrika(90444496);
});

function initMetrika(id) {
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t),k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://yandex.ru", "ym");
    ym(id, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
}
