require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

        import tabs from './modules/tabs';
        import modal from'./modules/modal';
        import timer from'./modules/timer';
        import cards from'./modules/cards';
        import calc from './modules/calc';
        import forms from'./modules/forms';
        import slider from './modules/slider';
        import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
/*
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          calc = require('./modules/calc'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider');

 */

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');

    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2024-05-24');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

});











