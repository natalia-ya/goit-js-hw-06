const refs = {
  input: document.querySelector('#name-input'),
  out: document.querySelector('#name-output'),
};
refs.input.addEventListener('input', EnterInputArea);

function EnterInputArea(event) {
  refs.out.textContent = event.currentTarget.value;
  if (refs.out.textContent.length === 0) {
    refs.out.textContent = 'Anonymous';
  }
}
