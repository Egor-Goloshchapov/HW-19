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