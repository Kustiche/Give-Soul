const list = document.querySelector('.service-description__list-offer');
let result = document.querySelector('.service-description__price');
const options = document.querySelectorAll('.service-description__offer');

result.addEventListener('click', function() {
  console.log(4234)
});

function num() {
  console.log(42)
};


options.forEach((option) => {
  option.addEventListener('click', (event) => {
    if (event.target.classList.contains('service-description__offer')) {
      console.log(42)
    };
  });
});