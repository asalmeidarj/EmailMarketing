
const btnMobile = document.getElementById('btn-menu-vip'); 

function toggleMenu(event) {
	if (event.type === 'touchstart') event.preventDefault();
	const nav = document.getElementById('nav-vip');
	nav.classList.toggle('active');
	const active = nav.classList.contains('active');
	event.currentTarget.setAttribute('aria-expanded', active);
	if (active) {
		event.currentTarget.setAttribute('aria-label', 'Open menu');
	} else {
		event.currentTarget.setAttribute('aria-label', 'Close menu');
	}
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

