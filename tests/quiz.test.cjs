const {test} = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const vm = require('node:vm');
test('both entry points share an answer, hand it only to Marquiz, and fall back when blocked', () => {
  const radios = [], messages = [], handlers = {}, cards = [];
  let opened = 0, closed = 0, focused = 0, fallback = '';
  const frameWindow = {postMessage:(data,origin)=>messages.push({data,origin})};
  const element = () => ({append(){},addEventListener(type,fn){this[type]=fn;}});
  for(let i=0;i<2;i++) {
    const form = element(), button = {focus(){focused++;}}, group = element();
    group.append = label => radios.push(label.input);
    cards.push({form,button,append(){},querySelector:s=>s==='form'?form:s==='.answers'?group:button});
  }
  const document = {
    querySelectorAll:s=>s==='[data-quiz-card]'?cards:radios,
    getElementById:id=>id==='quiz-template'?{content:{cloneNode(){return {};}}}:id==='marquiz__close'?{click(){closed++;}}:{contentWindow:frameWindow},
    createTextNode:s=>s,
    createElement:tag=>{const el=element();if(tag==='label')el.append=input=>el.input=input;return el;},
    head:{append(){}},
  };
  const window = {addEventListener:(t,fn)=>handlers[t]=fn,location:{assign:url=>fallback=url},Marquiz:{showModal:()=>opened++}};
  vm.runInNewContext(readFileSync('public/quiz.js','utf8'),{document,window});
  radios[3].change();
  assert.equal(radios.filter(r=>r.checked).length,2);
  assert.equal(radios[8].checked,true);
  cards[1].form.submit({preventDefault(){}});
  assert.equal(opened,1);
  assert.equal(messages[0].data.answer,'3-комнатная и больше');
  assert.equal(messages[0].origin,'https://quiz.marquiz.ru');
  const data={type:'anna-close',quizId:'6ac62af87318ce000e678108'};
  handlers.message({origin:'https://example.com',source:frameWindow,data});
  handlers.message({origin:'https://quiz.marquiz.ru',source:{},data});
  assert.equal(closed,0);
  handlers.message({origin:'https://quiz.marquiz.ru',source:frameWindow,data});
  assert.equal(closed,1);assert.equal(focused,1);
  window.Marquiz=undefined;
  cards[0].form.submit({preventDefault(){}});
  assert.equal(fallback,'https://mrqz.me/6ac62af87318ce000e678108');
});
