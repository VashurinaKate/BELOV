window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let dropdownMenu = require('./parts/dropdown-menu'),
        menuLinks = require('./parts/menuLinks');

    dropdownMenu();
    menuLinks();
})