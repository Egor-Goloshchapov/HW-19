const radios = document.querySelectorAll('input[name="color"]');
radios.forEach(radio => {
  radio.addEventListener('change', (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
  nameOutput.textContent = event.target.value.trim() || 'anonymous';
});


const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fontSizeControl.addEventListener('input', (event) => {
  textSpan.style.fontSize = `${event.target.value}px`;
});



const page = document.querySelector("body");
const backdrop = document.querySelector(`.js-backdrop`);
const openBtn = document.querySelector(`[data-action="open-modal"]`);
const closeBtn = document.querySelector(`[data-action="close-modal"]`);

openBtn.addEventListener("click", toogleClass);
closeBtn.addEventListener("click", toogleClass);
backdrop.addEventListener("click", toogleClass);

function toogleClass(event) {
  if (
    event.currentTarget === backdrop &&
    event.target !== event.currentTarget
  ) {
    return;
  }
  page.classList.toggle("show-modal");
}