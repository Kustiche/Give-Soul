const swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
	speed: 800,
	spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },

	autoplay: {
		delay: 3000,
	},
});

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
	speed: 800,
	spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },

	autoplay: {
		delay: 3000,
	},
});