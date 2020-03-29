"use strict";

if (typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = function (callback) {
        for (var i = 0; i < this.length; i++) {
            callback.apply(this, [this[i], i, this]);
        }
    };
}

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

var footerFoldIcon = document.querySelectorAll('.footer__allLink__col__top i');
footerFoldIcon.forEach(function (ele) {
    ele.addEventListener('click', function (e) {
        if (!e.target.classList.contains('open')) {
            e.target.parentElement.nextElementSibling.classList.remove('hidde');
            e.target.parentElement.nextElementSibling.previousElementSibling.style.paddingBottom = 0;
            e.target.classList.add('open');
            e.target.classList.remove('close');
            e.target.innerHTML = "-";
        } else if (e.target.classList.contains('open')) {
            e.target.parentElement.nextElementSibling.previousElementSibling.style.paddingBottom = '1.5rem';
            e.target.parentElement.nextElementSibling.classList.add('hidde');
            e.target.classList.remove('open');
            e.target.classList.add('close');
            e.target.innerHTML = "+";
        }
    });
});
var searchModal = document.querySelector('.searchModal'),
    searchIcon = document.querySelector('.searchIcon img'),
    searchBoxCloseBtn = document.querySelector('.searchModal__content__close');
searchIcon.addEventListener('click', function () {
    searchModal.classList.remove('closeModal');
});
searchBoxCloseBtn.addEventListener('click', function () {
    searchModal.classList.add('closeModal');
});
var subscribeModal = document.querySelector('.subscribeModal'),
    subscribeModalBtn = document.querySelector('.header__top__btn'),
    subscribeModalCloseBtn = document.querySelector('.subscribeModalCloseBtn');
subscribeModalBtn.addEventListener('click', function () {
    subscribeModal.classList.remove('closeModal');
});
subscribeModalCloseBtn.addEventListener('click', function () {
    subscribeModal.classList.add('closeModal');
});
var giftModal = document.querySelector('.giftModal'),
    giftModalBtn = document.querySelector('.giftIcon'),
    giftModalCloseBtn = document.querySelector('.giftModalCloseBtn');
giftModalBtn.addEventListener('click', function () {
    giftModal.classList.remove('closeModal');
});
giftModalCloseBtn.addEventListener('click', function () {
    giftModal.classList.add('closeModal');
});


var headerLiClasses = ['headerFirstLi', 'headerSecLi', 'headerThirdLi'];
var headerBtnLiClasses = ['headerFirstSidebBtn', 'headerSecondSidebBtn', 'headerThirdSidebBtn'];

headerLiClasses.forEach(function (ele) {
    manageMenu(ele);
});

function manageMenu(ele) {
    var element = document.querySelector('.' + ele);

    if (element) {
        element.isClicked = false;

        element.onclick = function (e) {
            if(!(element.children[1])){
                return;
            }

            if (!element.isClicked && !element.children[1].classList.contains('hide')) {
                element.children[1].classList.remove('hide');
            } else {
                element.children[1].classList.toggle('hide');
            }


            element.isClicked = !element.children[1].classList.contains('hide');

            if (ele === 'thirdBtnOptions') {
                document.querySelector('.' + ele + ' img').classList.toggle('rotateUp');
            }
        };

        element.onmouseover = function (e) {
            if(element.children[1])
                element.children[1].classList.remove('hide'); // element.style.height='300%';
        };

        element.onmouseout = function (e) {
            if(element.children[1])
                if (!element.isClicked) element.children[1].classList.add('hide');
        };
    }

    if (element && element.children[1])
        window.addEventListener('click', function (e) {
            if (e.target !== element && !element.contains(e.target)) {
                element.isClicked = false;
                element.children[1].classList.add('hide');
            }
        });
}

headerBtnLiClasses.forEach(function (ele) {
    var element = document.querySelector('.' + ele);
    if (element) element.onclick = function (e) {
        document.querySelector('.' + ele + ' .header__Content__btns__btnContainer__downIcon__liOptions').classList.toggle('hide');

        if (ele === 'headerThirdSidebBtn') {
            document.querySelector('.' + ele + ' .header__Content__btns__btnContainer__downIcon img').classList.toggle('rotateUp');
        }
    };
    if (element) window.addEventListener('click', function (e) {
        if (e.target !== element && !element.contains(e.target)) {
            document.querySelector('.' + ele + ' .header__Content__btns__btnContainer__downIcon__liOptions').classList.add('hide');

            if (element.classList.contains('headerThirdSidebBtn')) {
                if (document.querySelector('.' + ele + ' .thirdBtnOptions img').classList.contains('rotateUp')) {
                    document.querySelector('.' + ele + ' .thirdBtnOptions img').classList.remove('rotateUp');
                }
            }
        }
    });
});

var nav = document.querySelector('.nav'),
    nav__close = document.querySelector('.nav__close'),
    burgerMenu = document.querySelector('.header__top__all__left__navMenu');

burgerMenu.onclick = function () {
    nav.classList.remove('moveNavAway');
};

nav__close.onclick = function () {
    nav.classList.add('moveNavAway');
};

window.addEventListener('click', function (e) {
    if (e.target !== nav && e.target !== burgerMenu && e.target !== burgerMenu.children[0]) {
        nav.classList.add('moveNavAway');
    }
});











































// "use strict";
//
// if (typeof Array.prototype.forEach != 'function') {
//     Array.prototype.forEach = function (callback) {
//         for (var i = 0; i < this.length; i++) {
//             callback.apply(this, [this[i], i, this]);
//         }
//     };
// }
//
// if (window.NodeList && !NodeList.prototype.forEach) {
//     NodeList.prototype.forEach = Array.prototype.forEach;
// }
//
// var footerFoldIcon = document.querySelectorAll('.footer__allLink__col__top i');
// footerFoldIcon.forEach(function (ele) {
//     ele.addEventListener('click', function (e) {
//         if (!e.target.classList.contains('open')) {
//             e.target.parentElement.nextElementSibling.classList.remove('hidde');
//             e.target.parentElement.nextElementSibling.previousElementSibling.style.paddingBottom = 0;
//             e.target.classList.add('open');
//             e.target.classList.remove('close');
//             e.target.innerHTML = "-";
//         } else if (e.target.classList.contains('open')) {
//             e.target.parentElement.nextElementSibling.previousElementSibling.style.paddingBottom = '1.5rem';
//             e.target.parentElement.nextElementSibling.classList.add('hidde');
//             e.target.classList.remove('open');
//             e.target.classList.add('close');
//             e.target.innerHTML = "+";
//         }
//     });
// });
// var searchModal = document.querySelector('.searchModal'),
//     searchIcon = document.querySelector('.searchIcon img'),
//     searchBoxCloseBtn = document.querySelector('.searchModal__content__close');
// searchIcon.addEventListener('click', function () {
//     searchModal.classList.remove('closeModal');
// });
// searchBoxCloseBtn.addEventListener('click', function () {
//     searchModal.classList.add('closeModal');
// });
// var subscribeModal = document.querySelector('.subscribeModal'),
//     subscribeModalBtn = document.querySelector('.header__top__btn'),
//     subscribeModalCloseBtn = document.querySelector('.subscribeModalCloseBtn');
// subscribeModalBtn.addEventListener('click', function () {
//     subscribeModal.classList.remove('closeModal');
// });
// subscribeModalCloseBtn.addEventListener('click', function () {
//     subscribeModal.classList.add('closeModal');
// });
// var giftModal = document.querySelector('.giftModal'),
//     giftModalBtn = document.querySelector('.giftIcon'),
//     giftModalCloseBtn = document.querySelector('.giftModalCloseBtn');
// giftModalBtn.addEventListener('click', function () {
//     giftModal.classList.remove('closeModal');
// });
// giftModalCloseBtn.addEventListener('click', function () {
//     giftModal.classList.add('closeModal');
// });
//
//
// var headerLiClasses = ['headerFirstLi', 'headerSecLi', 'headerThirdLi'];
// var headerBtnLiClasses = ['headerFirstSidebBtn', 'headerSecondSidebBtn', 'headerThirdSidebBtn'];
// headerLiClasses.forEach(function (ele) {
//     manageMenu(ele);
// });
//
// function manageMenu(ele) {
//     var element = document.querySelector('.' + ele);
//
//     if (element) {
//         element.isClicked = false;
//
//         element.onclick = function (e) {
//             if (!element.isClicked && !element.children[1].classList.contains('hide')) {
//                 element.children[1].classList.remove('hide');
//             } else {
//                 element.children[1].classList.toggle('hide');
//             }
//
//             if (element.children[1].classList.contains('hide')) {
//                 element.isClicked = false;
//             } else {
//                 element.isClicked = true;
//             }
//
//             if (ele === 'thirdBtnOptions') {
//                 document.querySelector('.' + ele + ' img').classList.toggle('rotateUp');
//             }
//         };
//
//         element.onmouseover = function (e) {
//             element.children[1].classList.remove('hide'); // element.style.height='300%';
//         };
//
//         element.onmouseout = function (e) {
//             console.log('out');
//             if (!element.isClicked) element.children[1].classList.add('hide');
//         };
//     }
//
//     if (element) window.addEventListener('click', function (e) {
//         if (e.target !== element && !element.contains(e.target)) {
//             element.isClicked = false;
//             element.children[1].classList.add('hide');
//         }
//     });
// }
//
// headerBtnLiClasses.forEach(function (ele) {
//     var element = document.querySelector('.' + ele);
//     if (element) element.onclick = function (e) {
//         document.querySelector('.' + ele + ' .header__Content__btns__btnContainer__downIcon__liOptions').classList.toggle('hide');
//
//         if (ele === 'headerThirdSidebBtn') {
//             document.querySelector('.' + ele + ' .header__Content__btns__btnContainer__downIcon img').classList.toggle('rotateUp');
//         }
//     };
//     if (element) window.addEventListener('click', function (e) {
//         if (e.target !== element && !element.contains(e.target)) {
//             document.querySelector('.' + ele + ' .header__Content__btns__btnContainer__downIcon__liOptions').classList.add('hide');
//
//             if (element.classList.contains('headerThirdSidebBtn')) {
//                 if (document.querySelector('.' + ele + ' .thirdBtnOptions img').classList.contains('rotateUp')) {
//                     document.querySelector('.' + ele + ' .thirdBtnOptions img').classList.remove('rotateUp');
//                 }
//             }
//         }
//     });
// });
// document.querySelectorAll('.itemBtnTwo').forEach(function (ele) {
//     ele.onclick = function (e) {
//         ele.children[1].children[1].classList.toggle('hide');
//     };
//
//     window.addEventListener('click', function (e) {
//         if (e.target !== ele && !ele.contains(e.target)) {
//             ele.children[1].children[1].classList.add('hide');
//         }
//     });
// });
// var nav = document.querySelector('.nav'),
//     nav__close = document.querySelector('.nav__close'),
//     burgerMenu = document.querySelector('.header__top__all__left__navMenu');
//
// burgerMenu.onclick = function () {
//     nav.classList.remove('moveNavAway');
// };
//
// nav__close.onclick = function () {
//     nav.classList.add('moveNavAway');
// };
//
// window.addEventListener('click', function (e) {
//     if (e.target !== nav && e.target !== burgerMenu && e.target !== burgerMenu.children[0]) {
//         nav.classList.add('moveNavAway');
//     }
// });