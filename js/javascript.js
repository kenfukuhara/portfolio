function navToggle() {
  document.querySelector(`html`).classList.toggle(`open`);
}

function closeNav() {
  document.querySelector(`html`).classList.remove(`open`);
}

function toggleNav() {
  document.querySelector(`html`).classList.toggle(`open`);
  document.getElementById("modal-gray").classList.remove(`modal-open`);
}