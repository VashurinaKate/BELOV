window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let menuLinks = require('./parts/menuLinks'),
        toggleMenu = require('./parts/toggleMenu');
    dropdownMenu();
    menuLinks();
    toggleMenu();
})