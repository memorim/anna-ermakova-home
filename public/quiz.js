'use strict';
const quizId = '6ac62af87318ce000e678108';
const quizUrl = `https://mrqz.me/${quizId}`;
const answers = ['Студия', '1-комнатная', '2-комнатная', '3-комнатная и больше', 'Пока не определился(ась)'];
let selected = null;
let activeButton = null;
function sendSelection() {
  const frame = document.getElementById(`marquiz__frame_${quizId}`);
  if (frame && selected !== null) frame.contentWindow.postMessage({type:'anna-selection', quizId, answer:answers[selected]}, 'https://quiz.marquiz.ru');
}
document.querySelectorAll('[data-quiz-card]').forEach((card, cardIndex) => {
  card.append(document.getElementById('quiz-template').content.cloneNode(true));
  const group = card.querySelector('.answers');
  answers.forEach((answer, index) => {
    const label = document.createElement('label');
    label.className = 'answer';
    const input = document.createElement('input');
    input.type = 'radio'; input.name = `apartment-${cardIndex}`; input.value = String(index); input.required = true;
    label.append(input, document.createTextNode(answer)); group.append(label);
    input.addEventListener('change', () => {
      selected = index;
      document.querySelectorAll('.answer input').forEach(radio => {radio.checked = Number(radio.value) === selected;});
    });
  });
  card.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    activeButton = card.querySelector('.next');
    if (typeof window.Marquiz?.showModal === 'function') {
      window.Marquiz.showModal(quizId);
      sendSelection();
    } else {
      window.location.assign(quizUrl);
    }
  });
});
window.addEventListener('message', event => {
  const frame = document.getElementById(`marquiz__frame_${quizId}`);
  if (event.origin !== 'https://quiz.marquiz.ru' || !frame || event.source !== frame.contentWindow || event.data?.quizId !== quizId) return;
  if (event.data.type === 'anna-ready') sendSelection();
  if (event.data.type === 'anna-close') {document.getElementById('marquiz__close')?.click();activeButton?.focus();}
});
const script = document.createElement('script');
script.async = true; script.src = 'https://script.marquiz.ru/v2.js';
script.onload = () => window.Marquiz.init({host:'https://quiz.marquiz.ru',region:'ru',id:quizId,autoOpen:false,autoOpenFreq:'once',openOnExit:false,disableOnMobile:false});
document.head.append(script);
