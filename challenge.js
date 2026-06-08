const menuToggle = document.getElementById('menuToggle');
const topNav = document.getElementById('topNav');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cartCount = document.getElementById('cartCount');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const dealCarousel = document.getElementById('dealCarousel');
const prevDeal = document.getElementById('prevDeal');
const nextDeal = document.getElementById('nextDeal');
const carouselTrack = document.querySelector('.carousel-track');
let activeDealIndex = 0;
const deals = document.querySelectorAll('.deal-card');

menuToggle.addEventListener('click', () => {
  topNav.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Searching Amazon for: ${query}`);
  } else {
    alert('Please enter a search term.');
  }
});

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentCount = Number(cartCount.textContent);
    cartCount.textContent = currentCount + 1;
    button.textContent = 'Added';
    button.disabled = true;
  });
});

function updateCarousel() {
  const offset = activeDealIndex * 100;
  carouselTrack.style.transform = `translateX(-${offset}%)`;
}

prevDeal.addEventListener('click', () => {
  activeDealIndex = activeDealIndex > 0 ? activeDealIndex - 1 : deals.length - 1;
  updateCarousel();
});

nextDeal.addEventListener('click', () => {
  activeDealIndex = activeDealIndex < deals.length - 1 ? activeDealIndex + 1 : 0;
  updateCarousel();
});

setInterval(() => {
  activeDealIndex = activeDealIndex < deals.length - 1 ? activeDealIndex + 1 : 0;
  updateCarousel();
}, 6000);

const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = newsletterForm.querySelector('input');
  if (emailInput.value.trim()) {
    alert('Thanks! Your Prime trial invitation has been sent.');
    emailInput.value = '';
  }
});
