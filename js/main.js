'use strict';

//interacción estilos foto

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; //coge todos los elementos data del html y los convierte en un ejemplo || nada por el color
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mouseover', handleUpdate));

//seleccionar tu propia foto

const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');
const fr = new FileReader();

const getImage = (ev) => {
  var myFile = ev.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
};

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}

fileField.addEventListener('change', getImage);
