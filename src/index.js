import validator from 'validator';
import './style.css';

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const options = document.querySelector('#options');
const output = document.querySelector('#output');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  output.classList.remove('success');
  output.classList.remove('error');
  const inputValue = input.value;
  const selectValue = options.value;
  if (selectValue === 'isTaxID') {
    const result = validator[selectValue](inputValue, 'pt-BR');
    result === true ? output.classList.add('success') : output.classList.add('error');
    output.innerHTML = "A saida foi " + result;
  } else {
    const result = validator[selectValue](inputValue);
    result === true ? output.classList.add('success') : output.classList.add('error');
    output.innerHTML = "A saida foi " + result;
  }
});

