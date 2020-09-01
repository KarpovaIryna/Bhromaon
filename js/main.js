;(function() {
	"use strict";
	let menuBtn = document.querySelector('.ba-menu-toggle');
	let menu = document.querySelector('.ba-header__nav');
	menuBtn.addEventListener('click', () => menu.classList.toggle('open'));
})();