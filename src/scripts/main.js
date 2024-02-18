document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight

    window.addEventListener('scroll', function() {
        const positionNow = this.window.scrollY;

        if(positionNow < heightHero) {
            hiddenItemheader();
        } else {
            showItemsheader();
        }
    })

    //section atractions abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const abaAlvo = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            hideTabs();
            tab.classList.add('shows__list--is-active');
            removeButtonActive();
            btn.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Section faq accodion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openCloseAnswer);
    }
})

function removeButtonActive() {
    const btns = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function openCloseAnswer(e) {
    const classe = 'faq__questions__item--is-open';
    const elemteFather = e.target.parentNode.classList;
    elemteFather.toggle(classe);
}

function hiddenItemheader() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}
function showItemsheader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}