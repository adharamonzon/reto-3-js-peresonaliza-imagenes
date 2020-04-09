'use strict';

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; //coge todos los elementos data del html y los convierte en un ejemplo || nada por el color
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mouseover', handleUpdate));
