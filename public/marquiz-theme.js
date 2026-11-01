/* Loaded through Marquiz > Integrations > Custom code. */
(() => {
  'use strict';
  if (document.getElementById('anna-theme')) return;
  const site = 'https://anna-ermakova-home.onrender.com';
  const style = document.createElement('style'); style.id = 'anna-theme';
  style.textContent = `
    .quiz-container{background:#faf6ef!important;color:#304c44!important;font-family:"Segoe UI",Arial,sans-serif!important;padding:28px 40px!important;box-sizing:border-box!important;max-width:1100px!important;margin:auto!important}
    .quiz{background:#faf6ef!important;color:#304c44!important;border-radius:0!important}
    .quiz-content-width{max-width:none!important}.quiz-content-gutter{padding-left:0!important;padding-right:0!important}
    .quiz__questions{padding:0!important}.question-wrapper{padding-top:20px!important}
    :is([data-testid="quiz-question-title"],[data-testid="quiz-mobile-question-title"]){font-family:"Segoe UI",Arial,sans-serif!important;font-size:30px!important;line-height:1.25!important;color:#304c44!important;font-weight:650!important}
    .answer-variants__group{gap:12px!important}.answer-variants__variant{border:1px solid #d6dfd5!important;border-radius:5px!important;background:#fff!important;box-shadow:none!important}
    .answer-variants__variant:has(input:checked){border-color:#47685a!important;background:#e4ebdf!important}
    .answer-variants__variant .quiz-choice{font:17px/1.35 "Segoe UI",Arial,sans-serif!important;padding:17px!important;color:#304c44!important;min-height:62px!important}
    [data-quiz-check]{border-color:#47685a!important}.answer-variants__variant input:checked + [data-quiz-check]{background:#47685a!important}
    .quiz-navbar{background:#faf6ef!important;padding-top:22px!important}[data-testid="quiz-navbar-next"],.button.is-primary{background:#47685a!important;color:white!important;border-radius:5px!important;box-shadow:none!important}
    [data-testid="quiz-navbar-progress"]{color:#47685a!important}.anna-brand{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #b8c4b8;padding-bottom:18px;margin-bottom:25px;gap:20px;font:14px/1.4 "Segoe UI",Arial,sans-serif;color:#304c44}.anna-brand img{width:52px;height:52px;padding:6px;border-radius:8px;object-fit:contain;background:#47685a}.anna-brand strong{font-size:17px}.anna-brand small{display:block;font-size:12px;margin-top:4px}.anna-brand button{font:inherit;border:0;background:none;color:inherit;cursor:pointer;padding:12px}
    @media(max-width:700px){.quiz-container{padding:18px!important}.anna-brand{margin-bottom:20px;gap:12px}.anna-brand img{width:40px;height:40px}.anna-brand strong{font-size:14px}.anna-brand small{font-size:10px}.anna-brand button{font-size:12px;padding:5px}:is([data-testid="quiz-question-title"],[data-testid="quiz-mobile-question-title"]){font-size:25px!important}.answer-variants__group{grid-template-columns:1fr!important;gap:9px!important}.answer-variants__variant .quiz-choice{font-size:16px!important;min-height:54px!important;padding:13px!important}}
  `;
  style.textContent += `
    body,.quiz-container,.quiz,.quiz-navbar{background:white!important}
    .quiz-container{position:relative;padding:0!important;max-width:960px!important;min-height:100vh!important}
    .anna-brand{margin:0!important;padding:12px 44px 12px 22px!important;background:#304c44;color:white;justify-content:flex-start;gap:12px;border:0}
    .anna-brand img{width:36px;height:36px}.anna-brand output{margin-left:auto;font-size:13px}
    .quiz{padding:20px 26px!important;box-sizing:border-box!important}
    .anna-lines{height:4px;display:flex;gap:6px;margin-bottom:24px}.anna-lines i{flex:1;background:#e2e4df}.anna-lines .filled{background:#47685a}
    .answer-variants__group{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important}
    .answer-variants__variant{background:#f7f7f3!important}.answer-variants__variant:last-child:nth-child(odd){grid-column:1/-1}
    .quiz-navbar [data-testid="quiz-navbar-buttons"]{display:flex!important;flex:1!important}
    [data-testid="quiz-navbar-next"]{flex:1!important;min-height:46px!important;font-weight:700!important}
    [data-testid="quiz-navbar-progress"],.quiz-navbar__hint{display:none!important}
    .anna-side{display:none}
    @media(min-width:720px){.quiz-container:has(.quiz__questions){padding-right:36%!important;padding-top:65px!important}
      .anna-brand{position:absolute;left:0;right:0;top:0;height:65px;box-sizing:border-box}
      .quiz-container:not(:has(.quiz__questions)){padding-top:65px!important}
      .quiz-container:has(.quiz__questions) .anna-side{display:flex;position:absolute;top:65px;bottom:0;right:0;width:36%;flex-direction:column;justify-content:flex-end;background:#304c44 url("https://anna-ermakova-home.onrender.com/assets/towers.jpg") center/cover no-repeat;color:#fff}
      .anna-side div{background:#304c44;padding:20px}.anna-side small{display:block;margin-top:6px}}
    @media(max-width:450px){.answer-variants__group{grid-template-columns:1fr!important}.quiz{padding:16px!important}}
  `;
  document.head.append(style);
  const titles = ['Какую квартиру вы рассматриваете?', 'Как планируете покупать квартиру?', 'Что для вас наиболее важно при покупке?'];
  let initial = new URLSearchParams(location.search).get('home');
  function decorate() {
    const root = document.querySelector('.quiz-container');
    if (!root) return;
    if (!root.querySelector('.anna-brand')) {
      const header = document.createElement('header');
      header.className = 'anna-brand';
      header.innerHTML = `<img src="${site}/assets/kviko-logo.png" alt="КВИКО"><div><strong>Анна Ермакова</strong><small>Недвижимость · Екатеринбург</small></div><output></output>`;
      const side = document.createElement('aside');
      side.className = 'anna-side';
      side.innerHTML = '<div><strong>Дом для вас</strong><small>Подбор квартир в Екатеринбурге</small></div>';
      root.prepend(header); root.append(side);
    }
    const title = root.querySelector('[data-testid="quiz-question-title"],[data-testid="quiz-mobile-question-title"]');
    const index = titles.indexOf(title?.textContent.trim());
    const count = root.querySelector('.anna-brand output');
    const caption = index < 0 ? '' : `Вопрос ${index+1} из 3`;
    if (count.textContent !== caption) count.textContent = caption;
    if (title && index >= 0) {
      let bars = title.parentElement.querySelector('.anna-lines');
      if (!bars) {
        bars = document.createElement('div'); bars.className = 'anna-lines';
        bars.innerHTML = '<i></i><i></i><i></i>'; title.before(bars);
      }
      [...bars.children].forEach((bar,i)=>bar.classList.toggle('filled',i<=index));
      if(index === 0 && initial) {
        const radio = [...root.querySelectorAll('.answer-variants__variant')].find(el=>el.textContent.trim() === initial)?.querySelector('input');
        if(radio){initial=null;radio.click();}
      }
    }
  }
  new MutationObserver(decorate).observe(document.documentElement,{childList:true,subtree:true});
  decorate();
})();