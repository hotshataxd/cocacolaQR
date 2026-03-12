const screens = Array.from(document.querySelectorAll('.screen'));
const navButtons = Array.from(document.querySelectorAll('[data-target]'));

function showScreen(index) {
  screens.forEach((screen, i) => {
    if (i === index) {
      screen.classList.add('is-active');
    } else {
      screen.classList.remove('is-active');
    }
  });
}

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = Number(btn.dataset.target);
    if (!Number.isNaN(target)) showScreen(target);
  });
});

showScreen(0);
