window.onload = () => {
	const burgerBtn = document.querySelector(".header__menu-burger");
	burgerBtn.addEventListener("click", () => {
		burgerBtn.classList.toggle("header__menu-burger--active");
	});
};
