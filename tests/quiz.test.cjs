const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
test('submit opens Marquiz with the selected apartment and preserves progress on reopen', () => {
 const events={}, frame={src:''}, form={elements:{home:{value:'2-комнатная'}},addEventListener:(e,f)=>events[e]=f};
 const dialog={showModal(){this.open=true},querySelector:()=>({}),addEventListener(){}};
 const elements={'#quiz':form,'#quiz-window':dialog,'#selection-frame':frame};
 vm.runInNewContext(fs.readFileSync('public/quiz-window.js','utf8'),{document:{querySelector:s=>elements[s]}});
 events.submit({preventDefault(){}});
 assert.ok(dialog.open);
 assert.equal(new URL(frame.src).searchParams.get('home'),'2-комнатная');
 assert.equal(new URL(frame.src).pathname,'/6ac62af87318ce000e678108');
 let reload=false;
 Object.defineProperty(frame,'src',{get:()=> 'https://quiz.marquiz.ru/6ac62af87318ce000e678108?home='+encodeURIComponent('2-комнатная'),set(){reload=true}});
 events.submit({preventDefault(){}});assert.equal(reload,false);
});
