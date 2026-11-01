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
  document.head.append(style);
  function decorate() {
    const root = document.querySelector('.quiz-container');
    if (!root || root.querySelector('.anna-brand')) return;
    const brand = document.createElement('header');
    brand.className = 'anna-brand';
    brand.innerHTML = `<img src="${site}/assets/kviko-logo.png" alt="КВИКО"><div><strong>Анна Ермакова</strong><small>Подбор квартир в Екатеринбурге</small></div>`;
    root.prepend(brand);
  }
  new MutationObserver(decorate).observe(document.documentElement,{childList:true,subtree:true});
  decorate();
})();
