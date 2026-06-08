
const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const cartCount = document.getElementById('cartCount');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const pageHeader = document.querySelector('.site-header');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  primaryNav.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  pageHeader.classList.toggle('scrolled', window.scrollY > 30);
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
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

const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = newsletterForm.querySelector('input');
    if (emailInput && emailInput.value.trim()) {
      alert('Thank you! Your Prime trial invitation has been sent.');
      emailInput.value = '';
    }
  });
}
