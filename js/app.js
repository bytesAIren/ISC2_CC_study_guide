const app = document.getElementById("app");
const homeBtn = document.getElementById("homeBtn");
const fullQuizTopBtn = document.getElementById("fullQuizTopBtn");
const languageSwitchBtn = document.getElementById("languageSwitchBtn");
const brandEyebrow = document.getElementById("brandEyebrow");
const brandTitle = document.getElementById("brandTitle");

const UI = {
  en: {
    htmlLang: "en",
    brandEyebrow: "ISC2 Certified in Cybersecurity",
    brandTitle: "Study Hub",
    home: "Home",
    fullQuiz: "Full Quiz",
    switchLabel: "🇮🇹 Italiano",
    studyStructure: "Study structure",
    heroTitle: "Structured review for the 5 ISC2 CC domains",
    heroText: "Content reorganized into short study cards: first the general concept, then the detail, then examples and key reminders. At the end of each domain you will find a 10-question quiz; from the home page you can launch the full 50-question quiz.",
    startFullQuiz: "Start Full Quiz - 50 questions",
    domain: "Domain",
    sections: "sections",
    quiz: "quiz",
    quizDomain: "Quiz Domain",
    previous: "← Previous",
    next: "Next →",
    example: "Example",
    remember: "Remember",
    domainQuiz: "Domain Quiz",
    question: "Question",
    correct: "Correct.",
    incorrect: "Incorrect.",
    correctAnswer: "Correct answer",
    viewResults: "View results",
    nextQuestion: "Next question",
    results: "Results",
    resultStrong: "Strong preparation. Review only your mistakes.",
    resultMedium: "Acceptable preparation, but you should reinforce the weaker domains.",
    resultWeak: "Targeted review is needed before simulating the exam.",
    retryQuiz: "Retry quiz",
    yourAnswer: "Your answer",
    noMistakes: "No mistakes in this quiz."
  },
  it: {
    htmlLang: "it",
    brandEyebrow: "ISC2 Certified in Cybersecurity",
    brandTitle: "Study Hub",
    home: "Home",
    fullQuiz: "Quiz completo",
    switchLabel: "🇬🇧 English",
    studyStructure: "Struttura di studio",
    heroTitle: "Ripasso strutturato per i 5 domain ISC2 CC",
    heroText: "Contenuti riorganizzati in schede brevi: prima il concetto generale, poi il dettaglio, poi esempi e punti da ricordare. Alla fine di ogni domain trovi un quiz da 10 domande; dalla home puoi avviare il quiz completo da 50 domande.",
    startFullQuiz: "Avvia quiz completo - 50 domande",
    domain: "Domain",
    sections: "sezioni",
    quiz: "quiz",
    quizDomain: "Quiz Domain",
    previous: "← Indietro",
    next: "Avanti →",
    example: "Esempio",
    remember: "Da ricordare",
    domainQuiz: "Quiz Domain",
    question: "Domanda",
    correct: "Corretto.",
    incorrect: "Errato.",
    correctAnswer: "Risposta corretta",
    viewResults: "Vedi risultati",
    nextQuestion: "Domanda successiva",
    results: "Risultati",
    resultStrong: "Preparazione solida. Ripassa solo gli errori.",
    resultMedium: "Preparazione accettabile, ma conviene rafforzare i domain più deboli.",
    resultWeak: "Serve un ripasso mirato prima di simulare l'esame.",
    retryQuiz: "Ripeti quiz",
    yourAnswer: "La tua risposta",
    noMistakes: "Nessun errore in questo quiz."
  }
};

const storedLanguage = localStorage.getItem("isc2cc-language");
let currentLanguage = storedLanguage === "it" || storedLanguage === "en" ? storedLanguage : "en";
let DOMAINS = I18N[currentLanguage].domains;
let QUESTIONS = I18N[currentLanguage].questions;
let state = {
  view: "home",
  domainId: null,
  sectionIndex: 0,
  cardIndex: 0,
  quiz: null
};

function t(key) { return UI[currentLanguage][key]; }
function domainById(id) { return DOMAINS.find(d => d.id === id); }
function questionsForDomain(id) { return QUESTIONS.filter(q => q.domainId === id); }
function escapeHtml(str) {
  return String(str).replace(/[&<>'"]/g, s => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[s]));
}

function applyLanguageChrome() {
  document.documentElement.lang = t("htmlLang");
  homeBtn.textContent = t("home");
  fullQuizTopBtn.textContent = t("fullQuiz");
  languageSwitchBtn.textContent = t("switchLabel");
  brandEyebrow.textContent = t("brandEyebrow");
  brandTitle.textContent = t("brandTitle");
}

function switchLanguage() {
  currentLanguage = currentLanguage === "en" ? "it" : "en";
  localStorage.setItem("isc2cc-language", currentLanguage);
  DOMAINS = I18N[currentLanguage].domains;
  QUESTIONS = I18N[currentLanguage].questions;
  applyLanguageChrome();

  if (state.view === "domain" && state.domainId) {
    renderDomain(state.domainId, state.sectionIndex, state.cardIndex);
  } else if (state.view === "quiz" && state.quiz) {
    startQuiz(state.quiz.scope);
  } else {
    renderHome();
  }
}

function renderHome() {
  state.view = "home";
  state.domainId = null;
  state.quiz = null;
  app.innerHTML = `
    <section class="hero">
      <div class="hero-topline">
        <p class="eyebrow">${t("studyStructure")}</p>
        <button class="ghost-btn language-switch hero-language" id="languageSwitchHeroBtn" type="button">${t("switchLabel")}</button>
      </div>
      <h2>${t("heroTitle")}</h2>
      <p>${t("heroText")}</p>
      <button class="primary-btn" id="fullQuizHeroBtn" type="button">${t("startFullQuiz")}</button>
    </section>
    <section class="card-grid">
      ${DOMAINS.map(d => `
        <article class="domain-card" data-domain="${d.id}" style="border-top: 6px solid ${d.accent}">
          <div>
            <div class="domain-number">${t("domain")} ${d.number}</div>
            <h3>${escapeHtml(d.title)}</h3>
            <p>${escapeHtml(d.summary)}</p>
          </div>
          <div class="card-footer">
            <span>${d.sections.length} ${t("sections")}</span>
            <span>${questionsForDomain(d.id).length} ${t("quiz")}</span>
          </div>
        </article>
      `).join("")}
    </section>
  `;
  document.querySelectorAll(".domain-card").forEach(card => card.addEventListener("click", () => renderDomain(card.dataset.domain, 0, 0)));
  document.getElementById("fullQuizHeroBtn").addEventListener("click", () => startQuiz("all"));
  document.getElementById("languageSwitchHeroBtn").addEventListener("click", switchLanguage);
}

function flattenCards(domain) {
  const cards = [];
  domain.sections.forEach((section, sectionIndex) => {
    section.cards.forEach((card, cardIndex) => cards.push({section, sectionIndex, card, cardIndex}));
  });
  return cards;
}

function renderDomain(domainId, sectionIndex = 0, cardIndex = 0) {
  const domain = domainById(domainId);
  state = {...state, view:"domain", domainId, sectionIndex, cardIndex, quiz: null};
  const flat = flattenCards(domain);
  const absoluteIndex = flat.findIndex(x => x.sectionIndex === sectionIndex && x.cardIndex === cardIndex);
  const current = flat[absoluteIndex] || flat[0];
  const card = current.card;
  const pct = ((absoluteIndex + 1) / flat.length) * 100;

  app.innerHTML = `
    <div class="domain-layout">
      <aside class="sidebar panel">
        <p class="eyebrow">${t("domain")} ${domain.number}</p>
        <h3>${escapeHtml(domain.title)}</h3>
        <div class="section-list">
          ${domain.sections.map((s, i) => `<div class="section-pill ${i === current.sectionIndex ? "active" : ""}" data-section="${i}">${escapeHtml(s.title)}</div>`).join("")}
        </div>
        <div style="margin-top:16px"><button class="primary-btn small" id="domainQuizBtn" type="button">${t("quizDomain")} ${domain.number}</button></div>
      </aside>
      <section class="content-area">
        <div class="breadcrumb">${t("home")} &gt; ${t("domain")} ${domain.number} &gt; ${escapeHtml(current.section.title)}</div>
        <h2>${escapeHtml(domain.title)}</h2>
        <div class="progress-track"><div class="progress-bar" style="width:${pct}%"></div></div>
        <article class="learning-card">
          <div class="card-type">${escapeHtml(card.type)} / ${escapeHtml(current.section.title)}</div>
          <h2>${escapeHtml(card.title)}</h2>
          <p>${escapeHtml(card.body)}</p>
          ${card.detail?.length ? `<ul>${card.detail.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
          <div class="callout-row">
            ${card.example ? `<div class="callout example"><strong>${t("example")}</strong>${escapeHtml(card.example)}</div>` : ""}
            ${card.remember ? `<div class="callout remember"><strong>${t("remember")}</strong>${escapeHtml(card.remember)}</div>` : ""}
          </div>
        </article>
        <div class="nav-row">
          <button class="ghost-btn" id="prevBtn" type="button" ${absoluteIndex === 0 ? "disabled" : ""}>${t("previous")}</button>
          <button class="ghost-btn" id="homeMiddleBtn" type="button">${t("home")}</button>
          <button class="ghost-btn" id="nextBtn" type="button" ${absoluteIndex === flat.length - 1 ? "disabled" : ""}>${t("next")}</button>
        </div>
      </section>
    </div>
  `;

  document.querySelectorAll(".section-pill").forEach(el => el.addEventListener("click", () => renderDomain(domainId, Number(el.dataset.section), 0)));
  document.getElementById("domainQuizBtn").addEventListener("click", () => startQuiz(domainId));
  document.getElementById("homeMiddleBtn").addEventListener("click", renderHome);
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (absoluteIndex > 0) {
      const prev = flat[absoluteIndex - 1];
      renderDomain(domainId, prev.sectionIndex, prev.cardIndex);
    }
  });
  document.getElementById("nextBtn").addEventListener("click", () => {
    if (absoluteIndex < flat.length - 1) {
      const next = flat[absoluteIndex + 1];
      renderDomain(domainId, next.sectionIndex, next.cardIndex);
    }
  });
}

function startQuiz(scope) {
  const pool = scope === "all" ? QUESTIONS : questionsForDomain(scope);
  state.view = "quiz";
  state.quiz = { scope, items: pool.map((q, i) => ({...q, originalIndex: i})), index: 0, score: 0, answers: [] };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const quiz = state.quiz;
  const item = quiz.items[quiz.index];
  const domain = domainById(item.domainId);
  app.innerHTML = `
    <section class="quiz-card">
      <div class="quiz-meta">
        <span>${quiz.scope === "all" ? t("fullQuiz") : t("domainQuiz")}</span>
        <span>${t("question")} ${quiz.index + 1}/${quiz.items.length}</span>
      </div>
      <div class="progress-track"><div class="progress-bar" style="width:${((quiz.index + 1)/quiz.items.length)*100}%"></div></div>
      <p class="eyebrow">${escapeHtml(domain.title)}</p>
      <div class="question-text">${escapeHtml(item.q)}</div>
      <div class="answers">
        ${item.a.map((answer, i) => `<button class="answer-btn" data-answer="${i}" type="button"><strong>${String.fromCharCode(65+i)}.</strong> ${escapeHtml(answer)}</button>`).join("")}
      </div>
      <div id="feedbackSlot"></div>
    </section>
  `;
  document.querySelectorAll(".answer-btn").forEach(btn => btn.addEventListener("click", () => selectAnswer(Number(btn.dataset.answer))));
}

function selectAnswer(selected) {
  const quiz = state.quiz;
  const item = quiz.items[quiz.index];
  const isCorrect = selected === item.c;
  if (isCorrect) quiz.score += 1;
  quiz.answers.push({ item, selected, isCorrect });

  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.disabled = true;
    const idx = Number(btn.dataset.answer);
    if (idx === item.c) btn.classList.add("correct");
    if (idx === selected && !isCorrect) btn.classList.add("wrong");
  });

  document.getElementById("feedbackSlot").innerHTML = `
    <div class="feedback">
      <strong>${isCorrect ? t("correct") : t("incorrect")}</strong><br>
      ${t("correctAnswer")}: ${String.fromCharCode(65 + item.c)}. ${escapeHtml(item.a[item.c])}<br>
      ${escapeHtml(item.e)}
      <div style="margin-top:14px"><button class="primary-btn" id="continueQuizBtn" type="button">${quiz.index === quiz.items.length - 1 ? t("viewResults") : t("nextQuestion")}</button></div>
    </div>
  `;
  document.getElementById("continueQuizBtn").addEventListener("click", () => {
    if (quiz.index === quiz.items.length - 1) renderResults();
    else { quiz.index += 1; renderQuizQuestion(); }
  });
}

function renderResults() {
  const quiz = state.quiz;
  const pct = Math.round((quiz.score / quiz.items.length) * 100);
  const byDomain = DOMAINS.map(d => {
    const answers = quiz.answers.filter(x => x.item.domainId === d.id);
    const correct = answers.filter(x => x.isCorrect).length;
    return {d, total: answers.length, correct};
  }).filter(x => x.total > 0);

  app.innerHTML = `
    <section class="quiz-card">
      <p class="eyebrow">${t("results")}</p>
      <h2>${quiz.score}/${quiz.items.length} — ${pct}%</h2>
      <p>${pct >= 80 ? t("resultStrong") : pct >= 65 ? t("resultMedium") : t("resultWeak")}</p>
      <div class="results-grid">
        ${byDomain.map(x => `<div class="result-mini"><strong>${t("domain")} ${x.d.number}</strong><br>${x.correct}/${x.total}</div>`).join("")}
      </div>
      <div class="nav-row">
        <button class="ghost-btn" id="resultsHomeBtn" type="button">${t("home")}</button>
        <button class="primary-btn" id="retryQuizBtn" type="button">${t("retryQuiz")}</button>
      </div>
      <div class="review-list">
        ${quiz.answers.filter(x => !x.isCorrect).map(x => `
          <div class="review-item">
            <strong>${escapeHtml(x.item.q)}</strong><br>
            ${t("yourAnswer")}: ${escapeHtml(x.item.a[x.selected])}<br>
            ${t("correctAnswer")}: ${escapeHtml(x.item.a[x.item.c])}<br>
            <span>${escapeHtml(x.item.e)}</span>
          </div>`).join("") || `<div class="review-item">${t("noMistakes")}</div>`}
      </div>
    </section>
  `;
  document.getElementById("resultsHomeBtn").addEventListener("click", renderHome);
  document.getElementById("retryQuizBtn").addEventListener("click", () => startQuiz(quiz.scope));
}

homeBtn.addEventListener("click", renderHome);
fullQuizTopBtn.addEventListener("click", () => startQuiz("all"));
languageSwitchBtn.addEventListener("click", switchLanguage);
applyLanguageChrome();
renderHome();
