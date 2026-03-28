'use strict';

// =============================================
// TRANSLATIONS
// =============================================

const translations = {
  en: {
    'show-contacts': 'Show Contacts',
    'label-idioms': 'Idioms',
    'label-age': 'Age',
    'label-location': 'Location',
    'nav-about': 'About',
    'nav-resume': 'Resume',
    'nav-projects': 'Projects',
    'about-title': 'About me',
    'about-p1': "I'm a Product Designer from Brazil who loves turning complex problems into simple, beautiful, and intuitive experiences. But what really sets my work apart is how I design.",
    'about-p2': "I've built an AI-integrated workflow that combines Claude MCP connected directly to Figma, Figma Make, and Claude AI to accelerate every stage of the design process — from building scalable Design Systems to delivering production-ready handoffs with component-by-component HTML/CSS/JS code. The result? Faster iterations, fewer back-and-forths with devs, and more time focused on what actually matters: the user experience.",
    'about-p3': "My process is grounded in UX Strategy and Design Thinking — I conduct structured research (interviews, shadowing, usability testing), map user journeys, and use data to make confident product decisions. I don't just make things look good; I make sure they solve the right problem in the right way.",
    'about-p4': "I also bring a solid foundation in HTML, CSS, and JS, which means I speak the dev team's language and design with implementation in mind from day one.",
    'about-p5': "Whether it's a fintech app, an enterprise platform, or a bold e-commerce experience — I bring craft, strategy, and a genuine obsession with quality to everything I build.",
    'doing-title': "What I'm doing",
    'service-uxresearch-title': 'UX Research',
    'service-uxresearch-text': 'Conducting structured research to uncover meaningful user insights.\nI use interviews, usability testing, and behavioral analysis to identify opportunities, reduce assumptions, and guide confident product decisions.',
    'service-uidesign-title': 'UI Design',
    'service-uidesign-text': 'Designing intuitive and scalable interfaces that balance aesthetics and usability.\nI create consistent visual systems, interaction patterns, and high-fidelity prototypes that enhance clarity and improve user engagement.',
    'service-strategy-title': 'Product Strategy',
    'service-strategy-text': 'Aligning user needs with business objectives through data-informed decisions.\nI combine research insights, product discovery, and performance analysis to define clear roadmaps, prioritize opportunities, and drive measurable impact.',
    'service-frontend-title': 'Front-End Awareness',
    'service-frontend-text': 'Designing with a clear understanding of how interfaces are built.\nI align layouts, components, and interactions with development realities to ensure smooth handoff and execution.',
    'service-ai-title': 'AI-Enhanced UX Design',
    'service-ai-text': 'Integrating AI into research, prototyping, and product workflows.\nFrom data synthesis to smart interactions.',
    'service-designsystem-title': 'Design System Architecture',
    'service-designsystem-text': 'Structuring robust design foundations for digital ecosystems.\nI define components, behaviors, and guidelines that bridge design and engineering seamlessly.',
    'testimonials-title': 'Testimonials',
    'testimonial-eric': 'Pedro was asked to create a corporate identity. It\'s modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done. His project Hand-off is just amazing, very well documented.',
    'testimonial-leticia': 'Collaborating with Pedro felt natural and effortless. We shared ideas openly, tackled challenges together, and always kept the user at the center of our decisions.',
    'testimonial-ruan': 'Throughout the entire process, Pedro maintained open and constant communication, which helped us build a product aligned with both business goals and user needs.',
    'testimonial-eanes': 'Working with Pedro made the project run so much smoother. He was always organized, easy to communicate with, and ready to jump in and solve problems with the team. Having him around definitely made a difference.',
    'clients-title': "Companies I've Worked With",
    'resume-title': 'Resume',
    'education-title': 'Education',
    'experience-title': 'Experience',
    'skills-title': 'My Skills',
    'edu1-title': 'EBAC - British School of Creative Arts and Technology',
    'edu1-period': '2024 - 2025',
    'edu1-text': 'Intensive UX Design training covering user research, information architecture, wireframing, prototyping, and usability testing. Focus on user-centered solutions balancing usability, business goals, and technical feasibility.',
    'edu2-title': 'UNINOVE',
    'edu2-period': '2020 - 2024',
    'edu2-text': 'Degree in Translation and Interpretation focused on linguistics, communication, and cultural behavior — deepening my understanding of human interaction and cross-cultural nuances.',
    'exp1-title': 'Product Designer',
    'exp1-period': '2024 - Present',
    'exp1-text': 'Responsible for end-to-end digital product design for clients across 9+ industries. I conduct UX Research through interviews, shadowing, and surveys — translating data into real product decisions. I architect scalable Design Systems in Figma with 300+ components and design tokens, ensuring consistency across products. Pioneer in AI workflow on the team: I operate Claude MCP integrated with Figma to iterate on Design Systems and prototypes ~40% faster, and use Figma Make + Claude AI to generate HTML/CSS/JS code component by component — reducing ~40% of dev questions and ~50% of handoff time.',
    'exp3-title': 'E-commerce Lead',
    'exp3-period': '2022 - 2023',
    'exp3-text': 'Responsible for the complete visual design of an e-commerce store — creating an accessible, consistent, and conversion-oriented shopping experience. I developed digital marketing strategies focused on user engagement and behavior, building a practical foundation in product thinking and customer journey.',
    'projects-title': 'Projects',
    'filter-all': 'All',
    'filter-webapps': 'Web Apps',
    'filter-applications': 'Applications',
    'sort-newest': 'Newest',
    'sort-oldest': 'Oldest',
    'select-category': 'Select Category',
    'cat-application': 'Application',
    'cat-webapp': 'Web App',
    'cat-in-progress': 'In progress',
    'contact-form-title': 'Contact Form',
    'form-name-ph': 'Full name',
    'form-email-ph': 'Email Address',
    'form-message-ph': 'Your Message',
    'form-send': 'Send Message',
    'msg-sent': 'Message sent!',
  },
  pt: {
    'show-contacts': 'Ver Contatos',
    'label-idioms': 'Idiomas',
    'label-age': 'Idade',
    'label-location': 'Localização',
    'nav-about': 'Sobre',
    'nav-resume': 'Currículo',
    'nav-projects': 'Projetos',
    'about-title': 'Sobre mim',
    'about-p1': 'Sou um Product Designer brasileiro apaixonado por transformar problemas complexos em experiências simples, bonitas e intuitivas. Mas o que realmente diferencia o meu trabalho é a forma como eu design.',
    'about-p2': 'Construí um workflow integrado com IA que combina Claude MCP conectado diretamente ao Figma, Figma Make e Claude AI para acelerar cada etapa do processo de design — desde a construção de Design Systems escaláveis até a entrega de handoffs prontos para produção com código HTML/CSS/JS componente a componente. O resultado? Iterações mais rápidas, menos dúvidas com devs e mais tempo focado no que realmente importa: a experiência do usuário.',
    'about-p3': 'Meu processo é fundamentado em UX Strategy e Design Thinking — conduzo pesquisas estruturadas (entrevistas, shadowing, testes de usabilidade), mapeio jornadas de usuário e uso dados para tomar decisões de produto com confiança. Não apenas faço as coisas ficarem bonitas; garanto que resolvam o problema certo da forma certa.',
    'about-p4': 'Também tenho uma base sólida em HTML, CSS e JS, o que significa que falo a língua do time de desenvolvimento e design com implementação em mente desde o primeiro dia.',
    'about-p5': 'Seja um app de fintech, uma plataforma enterprise ou uma experiência de e-commerce impactante — trago craft, estratégia e uma obsessão genuína por qualidade em tudo que construo.',
    'doing-title': 'O que faço',
    'service-uxresearch-title': 'UX Research',
    'service-uxresearch-text': 'Conduzindo pesquisas estruturadas para descobrir insights significativos dos usuários.\nUso entrevistas, testes de usabilidade e análise comportamental para identificar oportunidades e guiar decisões de produto com confiança.',
    'service-uidesign-title': 'UI Design',
    'service-uidesign-text': 'Projetando interfaces intuitivas e escaláveis que equilibram estética e usabilidade.\nCrio sistemas visuais consistentes, padrões de interação e protótipos de alta fidelidade.',
    'service-strategy-title': 'Estratégia de Produto',
    'service-strategy-text': 'Alinhando necessidades dos usuários com objetivos de negócio através de decisões baseadas em dados.\nCombino pesquisa, descoberta de produto e análise de desempenho para gerar impacto mensurável.',
    'service-frontend-title': 'Conhecimento Front-End',
    'service-frontend-text': 'Projetando com compreensão clara de como as interfaces são construídas.\nAlinhar layouts, componentes e interações com a realidade do desenvolvimento para garantir entregas eficientes.',
    'service-ai-title': 'UX Design com IA',
    'service-ai-text': 'Integrando IA em pesquisa, prototipagem e fluxos de produto.\nDa síntese de dados a interações inteligentes.',
    'service-designsystem-title': 'Arquitetura de Design System',
    'service-designsystem-text': 'Estruturando fundações de design robustas para ecossistemas digitais.\nDefino componentes, comportamentos e diretrizes que conectam design e engenharia de forma fluida.',
    'testimonials-title': 'Depoimentos',
    'testimonial-eric': 'Pedro foi solicitado a criar uma identidade corporativa. É moderna, limpa e com um design bonito que recebeu muitos elogios de colegas e visitantes. Ficamos muito satisfeitos com o trabalho. Seu hand-off de projeto é simplesmente incrível, muito bem documentado.',
    'testimonial-leticia': 'Colaborar com o Pedro foi natural e sem esforço. Compartilhamos ideias abertamente, enfrentamos desafios juntos e sempre mantivemos o usuário no centro das nossas decisões.',
    'testimonial-ruan': 'Ao longo de todo o processo, o Pedro manteve uma comunicação aberta e constante, o que nos ajudou a construir um produto alinhado tanto com os objetivos do negócio quanto com as necessidades dos usuários.',
    'testimonial-eanes': 'Trabalhar com o Pedro tornou o projeto muito mais fluido. Ele era sempre organizado, fácil de se comunicar e pronto para resolver problemas com a equipe. Tê-lo por perto fez toda a diferença.',
    'clients-title': 'Empresas que Trabalhei',
    'resume-title': 'Currículo',
    'education-title': 'Educação',
    'experience-title': 'Experiência',
    'skills-title': 'Minhas Habilidades',
    'edu1-title': 'EBAC - British School of Creative Arts and Technology',
    'edu1-period': '2024 - 2025',
    'edu1-text': 'Concluí um curso intensivo de UX Design cobrindo pesquisa com usuários, arquitetura da informação, design de interação, wireframing, prototipagem, testes de usabilidade e princípios de UI. O treinamento enfatizou a compreensão do comportamento do usuário, resolução de problemas reais através do design e colaboração eficaz com equipes multidisciplinares.',
    'edu2-title': 'UNINOVE',
    'edu2-period': '2020 - 2024',
    'edu2-text': 'Estudei Tradução e Interpretação, com foco em linguística, comunicação e comportamento cultural. O curso aprofundou minha compreensão sobre estruturas de linguagem, interação humana e as nuances entre diferentes culturas.',
    'exp1-title': 'Product Designer',
    'exp1-period': '2024 - Presente',
    'exp1-text': 'Crio soluções digitais para setores como Logística, Segurança, Saúde e Tecnologia. Lidero pesquisas, projeto interfaces com 73%+ de retenção, otimizo UX writing com testes A/B e garanto documentação clara dos projetos.',
    'exp2-title': 'Ux Designer',
    'exp2-period': '2023 - Presente',
    'exp2-text': 'Conduzo pesquisas com usuários através de entrevistas, shadowing e análise de dados para projetar fluxos intuitivos e eficientes. Crio interfaces limpas e modernas com foco em usabilidade e colaboro com desenvolvedores para garantir implementação tranquila.',
    'exp3-title': 'E-commerce Lead',
    'exp3-period': '2022 - 2023',
    'exp3-text': 'Gerenciei o design visual de uma loja de e-commerce, garantindo uma experiência amigável e atraente. Desenvolvi estratégias de marketing focadas em aumentar as vendas online e melhorar o engajamento dos clientes.',
    'projects-title': 'Projetos',
    'filter-all': 'Todos',
    'filter-webapps': 'Web Apps',
    'filter-applications': 'Aplicativos',
    'sort-newest': 'Mais Recentes',
    'sort-oldest': 'Mais Antigos',
    'select-category': 'Selecionar Categoria',
    'cat-application': 'Aplicativo',
    'cat-webapp': 'Web App',
    'cat-in-progress': 'Em progresso',
    'contact-form-title': 'Formulário de Contato',
    'form-name-ph': 'Nome completo',
    'form-email-ph': 'Endereço de Email',
    'form-message-ph': 'Sua Mensagem',
    'form-send': 'Enviar Mensagem',
    'msg-sent': 'Mensagem enviada!',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyTranslations(lang) {
  // Text content elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // html lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  // Language button flag — shows the OTHER language's flag (what you'll switch TO)
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    const img = langBtn.querySelector('img');
    if (img) {
      img.src  = lang === 'pt' ? 'components/images/us_flag.png' : 'components/images/br_flag.png';
      img.alt  = lang === 'pt' ? 'EN' : 'PT';
      langBtn.title = lang === 'pt' ? 'Switch to English' : 'Mudar para Português';
    }
  }

  // Refresh sort button label (state-driven text)
  const sortBtn = document.getElementById('sort-btn');
  if (sortBtn) {
    const sortValueText = sortBtn.querySelector('.select-value');
    const currentOrder  = sortBtn.getAttribute('data-order') || 'desc';
    sortValueText.textContent = translations[lang][currentOrder === 'desc' ? 'sort-newest' : 'sort-oldest'];
  }

  // Refresh select-value if a filter is applied
  const selectValue = document.querySelector('[data-select-value]');
  if (selectValue && selectValue.dataset.i18nCurrent) {
    selectValue.textContent = translations[lang][selectValue.dataset.i18nCurrent] || selectValue.textContent;
  }

  currentLang = lang;
  localStorage.setItem('lang', lang);
}

// =============================================
// THEME TOGGLE
// =============================================

function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const icon = btn.querySelector('ion-icon');
  if (icon) icon.setAttribute('name', theme === 'dark' ? 'sunny-outline' : 'moon-outline');
  btn.title = theme === 'dark' ? 'Switch to light mode' : 'Mudar para modo escuro';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
}

// =============================================
// SIDEBAR TOGGLE
// =============================================

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar    = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function() {
  elementToggleFunc(sidebar);
  elementToggleFunc(this);
});

// =============================================
// TESTIMONIALS MODAL
// =============================================

const testimonialsItem  = document.querySelectorAll('[data-testimonials-item]');
const modalContainer    = document.querySelector('[data-modal-container]');
const modalCloseBtn     = document.querySelector('[data-modal-close-btn]');
const overlay           = document.querySelector('[data-overlay]');
const modalImg          = document.querySelector('[data-modal-img]');
const modalTitle        = document.querySelector('[data-modal-title]');
const modalText         = document.querySelector('[data-modal-text]');

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle('active');
  overlay.classList.toggle('active');
}

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener('click', function () {
    modalImg.src   = this.querySelector('[data-testimonials-avatar]').src;
    modalImg.alt   = this.querySelector('[data-testimonials-avatar]').alt;
    modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
    modalText.innerHTML  = this.querySelector('[data-testimonials-text]').innerHTML;
    testimonialsModalFunc();
  });
}

modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

// =============================================
// FILTER SELECT
// =============================================

const select      = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn   = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () { elementToggleFunc(this); });

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener('click', function () {
    // Use data-filter-value so filtering works in any language
    const selectedValue = this.dataset.filterValue || this.innerText.toLowerCase();
    // Mirror display text in the select box and store the i18n key
    selectValue.textContent     = this.textContent;
    selectValue.dataset.i18nCurrent = this.dataset.i18nItem || '';
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all" || selectedValue === "todos") {
      filterItems[i].classList.add('active');
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add('active');
    } else {
      filterItems[i].classList.remove('active');
    }
  }
}

// Close select on outside click
window.addEventListener('click', function (e) {
  const selectBox = document.querySelector('.filter-select-box');
  if (!selectBox.contains(e.target)) {
    select.classList.remove('active');
  }
});

// Filter buttons (≥768px)
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener('click', function () {
    // Use data-filter-value for the actual filtering logic
    const selectedValue = this.dataset.filterValue || this.innerText.toLowerCase();
    selectValue.textContent = this.textContent;
    selectValue.dataset.i18nCurrent = this.dataset.i18nItem || '';
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove('active');
    this.classList.add('active');
    lastClickedBtn = this;
  });
}

// =============================================
// SORT BY DATE
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  const projectList   = document.querySelector(".project-list");
  const sortBtn       = document.getElementById("sort-btn");
  const sortValueText = sortBtn.querySelector(".select-value");

  const sortProjects = (order) => {
    const items = Array.from(projectList.querySelectorAll(".project-item"));
    items.sort((a, b) => {
      const dateA = parseInt(a.getAttribute("data-date"));
      const dateB = parseInt(b.getAttribute("data-date"));
      return order === "desc" ? dateB - dateA : dateA - dateB;
    });
    projectList.innerHTML = "";
    items.forEach(item => projectList.appendChild(item));
  };

  sortProjects("desc");

  sortBtn.addEventListener("click", () => {
    const currentOrder = sortBtn.getAttribute("data-order");
    const newOrder     = currentOrder === "desc" ? "asc" : "desc";
    sortBtn.setAttribute("data-order", newOrder);
    sortValueText.textContent = translations[currentLang][newOrder === "desc" ? "sort-newest" : "sort-oldest"];
    sortProjects(newOrder);
  });

  // =============================================
  // CONTACT FORM
  // =============================================

  const form       = document.querySelector('[data-form]');
  const formInputs = document.querySelectorAll('[data-form-input]');
  const formBtn    = document.querySelector('[data-form-btn]');

  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
      formBtn[form.checkValidity() ? 'removeAttribute' : 'setAttribute']('disabled', '');
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    fetch('https://formspree.io/f/movegeda', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        showSuccessPopup();
        form.reset();
        formBtn.setAttribute('disabled', '');
      } else {
        response.json().then(data => {
          alert(data.errors ? data.errors.map(e => e.message).join(", ") : 'Oops! There was a problem submitting your form.');
        });
      }
    }).catch(() => alert('Oops! There was a problem submitting your form.'));
  });

  // =============================================
  // PAGE NAVIGATION
  // =============================================

  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages           = document.querySelectorAll("[data-page]");

  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
      // Use data-target-page so nav works regardless of display language
      const clickedPage = this.dataset.targetPage;

      for (let j = 0; j < pages.length; j++) {
        if (clickedPage === pages[j].dataset.page) {
          pages[j].classList.add("active");
          navigationLinks[j].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[j].classList.remove("active");
          navigationLinks[j].classList.remove("active");
        }
      }
    });
  }

  // =============================================
  // CONTROLS PANEL WIRING
  // =============================================

  const controlsPanel = document.getElementById('controls-panel');
  const controlsHandle = document.getElementById('controls-handle');

  controlsHandle.addEventListener('click', (e) => {
    e.stopPropagation();
    controlsPanel.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!controlsPanel.contains(e.target)) {
      controlsPanel.classList.remove('open');
    }
  });

  document.getElementById('theme-toggle').addEventListener('click', () => {
    toggleTheme();
    controlsPanel.classList.remove('open');
  });

  document.getElementById('lang-toggle').addEventListener('click', () => {
    const next = currentLang === 'en' ? 'pt' : 'en';
    applyTranslations(next);
    controlsPanel.classList.remove('open');
  });

  // =============================================
  // INITIALISE ON LOAD
  // =============================================

  initTheme();
  applyTranslations(currentLang);
});

// =============================================
// SUCCESS POPUP
// =============================================

function showSuccessPopup() {
  const popup = document.getElementById('success-popup');
  popup.style.display = 'flex';
  popup.classList.add('show');
  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => { popup.style.display = 'none'; }, 400);
  }, 2500);
}
