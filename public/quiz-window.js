const form = document.querySelector('#quiz');
const dialog = document.querySelector('#quiz-window');
const frame = document.querySelector('#selection-frame');
const origin = 'https://quiz.marquiz.ru';
form.addEventListener('submit', event => {
  event.preventDefault();
  dialog.showModal();
  const url = origin + '/6ac62af87318ce000e678108?home=' + encodeURIComponent(form.elements.home.value);
  if (frame.src !== url) frame.src = url;
});
dialog.querySelector('.dismiss').onclick = () => dialog.close();
dialog.addEventListener('close', () => form.querySelector('button').focus());
