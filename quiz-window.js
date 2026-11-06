const form = document.querySelector('#quiz');
const dialog = document.querySelector('#quiz-window');
const frame = document.querySelector('#selection-frame');
const origin = 'https://quiz.marquiz.ru';
const statusBox = document.querySelector('#quiz-loading');
const retry = statusBox.querySelector('button');
let timer;
function navigate(url) {
  statusBox.hidden = false;
  retry.hidden = true;
  clearTimeout(timer);
  timer = setTimeout(() => { retry.hidden = false; }, 9000);
  frame.src = url;
}
window.addEventListener('message', event => {
  if (event.origin !== origin || event.source !== frame.contentWindow || event.data !== 'anna-quiz-ready') return;
  clearTimeout(timer);
  statusBox.hidden = true;
});
retry.onclick = () => navigate(frame.src);
form.addEventListener('submit', event => {
  event.preventDefault();
  dialog.showModal();
  const url = origin + '/6ac62af87318ce000e678108?home=' + encodeURIComponent(form.elements.home.value);
  if (frame.src !== url) navigate(url);
});
dialog.querySelector('.dismiss').onclick = () => dialog.close();
document.querySelector('#open-selection').addEventListener('click', () => {
  if (!frame.src) navigate(origin + '/6ac62af87318ce000e678108');
  dialog.showModal();
});