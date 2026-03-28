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
    // ── Pockit Case Study ──
    'pockit-back': 'Projects',
    'pockit-by-label': 'By',
    'pockit-problem-label': 'PROBLEM',
    'pockit-problem-text': 'Many people face difficulties in investing and saving money due to the complexity of existing financial apps. Financial management options are often not intuitive and are not tailored to different age groups or levels of financial knowledge.',
    'pockit-problem-item1': 'Difficulties in investing and saving',
    'pockit-problem-item2': 'Complexity of financial apps',
    'pockit-problem-item3': 'Lack of Incentives',
    'pockit-problem-item4': 'Lack of Financial Overview',
    'pockit-problem-item5': 'Digital Security concerns',
    'pockit-solution-label': 'SOLUTION',
    'pockit-solution-text': 'Pockit enables and encourages users to save and invest their money mindfully and easily. The main goal is to provide a simple and intuitive experience for people of all ages, democratizing access to financial tools in an inclusive way.',
    'pockit-solution-item1': 'Simple and Personalized Tutorials',
    'pockit-solution-item2': 'Gamification: Incentivizing financial goals',
    'pockit-solution-item3': 'Focus on Security',
    'pockit-solution-item4': 'Comprehensive Dashboard',
    'pockit-solution-item5': 'Financial Education',
    'pockit-stat1-label': 'Users Interviewed',
    'pockit-stat2-label': 'Prefer Simple UI',
    'pockit-stat3-label': 'Task Success Rate',
    'pockit-stat4-label': 'Competitors Analyzed',
    'pockit-phase-discover': 'DISCOVER',
    'pockit-phase-define': 'DEFINE',
    'pockit-phase-develop': 'DEVELOP',
    'pockit-phase-deliver': 'DELIVER',
    'pockit-desk-title': 'Desk Research',
    'pockit-desk-desc': 'During the development of Pockit, several issues faced by users in managing their finances were identified:',
    'pockit-desk1-title': '1 — Low Financial Literacy',
    'pockit-desk1-text': 'Many people do not know how or where to start investing. According to the OECD, only 26% of Brazilians have basic knowledge of finance. This highlights the need for tools that educate users while providing practical solutions.',
    'pockit-desk1-source': 'Source: OECD — Financial Literacy Report',
    'pockit-desk2-title': '2 — Lack of Personalization',
    'pockit-desk2-text': 'Many apps do not allow users to adjust the system to their specific goals. According to McKinsey, 71% of consumers expect personalized interactions in their digital experiences, but many financial apps fail to deliver this.',
    'pockit-desk2-source': 'Source: McKinsey — The value of getting personalization right',
    'pockit-desk3-title': '3 — Complex Interfaces',
    'pockit-desk3-text': 'An overload of information or steps confuses new users. A study by the Nielsen Norman Group indicates that 58% of users abandon apps because they find them complicated to navigate.',
    'pockit-desk3-source': 'Source: NNGroup — Mobile Usability Report',
    'pockit-bench-title': 'Benchmarks',
    'pockit-bench-desc': 'Benchmark analysis was essential in identifying gaps in the market, understanding what already works, and avoiding common mistakes made by other financial apps.',
    'pockit-bench-has': 'Has',
    'pockit-bench-partial': 'Has, but poorly applied',
    'pockit-bench-none': 'Does not have',
    'pockit-bench-th-simple': 'Simple interface',
    'pockit-bench-th-personal': 'Personalization',
    'pockit-bench-th-edu': 'Financial education',
    'pockit-bench-th-chat': 'Chat',
    'pockit-bench-th-gamif': 'Gamification',
    'pockit-research-title': 'User Research',
    'pockit-research-desc': 'To better understand the needs and difficulties of users, the following questions were created for in-depth interviews:',
    'pockit-q1': 'What are the biggest challenges you face when trying to save or invest money?',
    'pockit-q2': 'Have you ever used a financial app? What did you think of the experience?',
    'pockit-q3': 'What features would you like to see in a financial management app?',
    'pockit-q4': 'What motivates you to save or invest?',
    'pockit-q5': 'Is there any feature that you find confusing or complicated in current financial apps?',
    'pockit-q6': 'What is your biggest concern when using technology to manage your finances?',
    'pockit-q7': 'Do you prefer a more minimalist or detailed design in financial apps? Why?',
    'pockit-results-title': 'Interview Results',
    'pockit-results-desc': 'After interviewing 10 participants from different age groups and income levels, the following insights were obtained:',
    'pockit-stat-challenges-b': 'Common Challenges',
    'pockit-stat-challenges-t': 'Reported difficulties in understanding how investments work. Another 60% had issues maintaining saving consistency.',
    'pockit-stat-expect-b': 'Expectations',
    'pockit-stat-expect-t': 'Expect the app to provide a consolidated view of their finances and goals in one place.',
    'pockit-stat-design-b': 'Design Preferences',
    'pockit-stat-design-t': 'Prefer simple and intuitive interfaces. Visual graphs were highlighted as essential.',
    'pockit-stat-fears-b': 'Fears and Doubts',
    'pockit-stat-fears-t': 'Are concerned about security of their financial data. Another 40% fear making mistakes.',
    'pockit-personas-title': 'Personas',
    'pockit-personas-desc': 'To represent the main types of users of Pockit, two personas were created based on the research data:',
    'pockit-occ-label': 'Occupation',
    'pockit-age-label': 'Age',
    'pockit-edu-label': 'Education',
    'pockit-status-label': 'Status',
    'pockit-loc-label': 'Location',
    'pockit-bg-h': 'Background',
    'pockit-goals-h': 'Goals and Frustrations',
    'pockit-pains-h': 'Pains and Desires',
    'pockit-ana-occ': 'Elementary School Teacher',
    'pockit-ana-edu': "Bachelor's in Education",
    'pockit-ana-status': 'Married',
    'pockit-ana-bg': "Ana has always been organized with her finances but misses tools that help her better plan for her family's future.",
    'pockit-ana-goals': "She wants to save for her children's education but finds existing apps too complicated.",
    'pockit-ana-pains': 'She wants an easy-to-use app that offers practical suggestions for daily life.',
    'pockit-carlos-occ': 'Freelance Graphic Designer',
    'pockit-carlos-edu': 'Technical Degree in Design',
    'pockit-carlos-status': 'Single',
    'pockit-carlos-bg': 'Carlos works independently and struggles to save due to variable income. He seeks tools to help him organize his finances.',
    'pockit-carlos-goals': 'He wants to create an emergency fund but lacks motivation to start.',
    'pockit-carlos-pains': 'He desires gamified features that make the saving process more engaging.',
    'pockit-insights-title': 'Research Insights',
    'pockit-certain-title': '✓ Certainties',
    'pockit-certain1': 'Users seek easy solutions to save money.',
    'pockit-certain2': 'Simple interfaces increase adoption.',
    'pockit-certain3': 'Personalization enhances engagement.',
    'pockit-assume-title': '~ Assumptions',
    'pockit-assume1': 'Users of all ages can use the app.',
    'pockit-assume2': 'Visual graphs promote understanding.',
    'pockit-assume3': 'Gamification creates healthy habits.',
    'pockit-questions-title': '? Questions',
    'pockit-question1': 'Best way to explain complex financial concepts?',
    'pockit-question2': 'Is there resistance from older users?',
    'pockit-question3': 'How to balance simplicity with advanced features?',
    'pockit-draft-title': 'Draft',
    'pockit-draft-desc': "At this moment, the computer was set aside and all ideas were put on paper. Hand-drawn sketches were created without worrying about details — allowing visualization of the 'Big Picture' of the product before moving into digital tools.",
    'pockit-ideation-title': 'Ideation',
    'pockit-ideation-desc': 'The ideation process included brainstorming focused on the following points:',
    'pockit-ideation1': 'Simplifying access to financial information.',
    'pockit-ideation2': 'Creating an emotionally positive experience by associating saving money with personal progress.',
    'pockit-ideation3': 'Ensuring accessibility for people with different levels of technological skills.',
    'pockit-tools-bold': 'Tools used:',
    'pockit-tools-text': ' FigJam, Notion, and qualitative research with potential users.',
    'pockit-wireframes-title': 'Wireframes',
    'pockit-wireframes-desc': 'After gathering all necessary information, low-fidelity screens were created to begin usability research with potential real users.',
    'pockit-usability-title': 'Usability Tests',
    'pockit-usability-desc': 'Real-life scenario tests were planned to evaluate the effectiveness of the design and user understanding.',
    'pockit-scenario1-title': '1 — Registration and Box Setup:',
    'pockit-scenario1-desc': ' Assess whether users can create boxes for their goals without difficulties.',
    'pockit-scenario2-title': '2 — Adding Funds:',
    'pockit-scenario2-desc': ' Test the clarity of transfer and investment options.',
    'pockit-scenario3-title': '3 — Goal Tracking:',
    'pockit-scenario3-desc': ' Check if the graphs and indicators help users monitor their progress.',
    'pockit-scenario4-title': '4 — Portfolio Exploration:',
    'pockit-scenario4-desc': ' Explore the "Portfolio" screen to understand total assets divided among created boxes and applied investments.',
    'pockit-result-title': '✓ Results Obtained',
    'pockit-result-text': 'Users of different ages completed the tasks easily and reported understanding of the system. ',
    'pockit-result-bold': 'Average Task Success Rate: 93.5%',
    'pockit-identity-title': 'Visual Identity',
    'pockit-identity-desc': 'The visual identity of Pockit was designed to convey three core values:',
    'pockit-trust-title': 'Trust',
    'pockit-trust-text': 'Use of blue and gray tones that convey stability and professionalism.',
    'pockit-simplicity-title': 'Simplicity',
    'pockit-simplicity-text': 'Modern and minimalist typography focused on readability at all sizes.',
    'pockit-access-title': 'Accessibility',
    'pockit-access-text': 'Adequate contrast and responsive design for different devices and users.',
    'pockit-color-primary': 'Primary — Blues',
    'pockit-color-secondary': 'Secondary — Navy',
    'pockit-color-status': 'Status Colors',
    'pockit-hifi-title': 'High-Fidelity Prototype',
    'pockit-hifi-desc': 'Based on the wireframes and the visual identity, the high-fidelity prototype was created to represent the final user experience — from onboarding and box creation to portfolio tracking and investment exploration.',
    'pockit-cta-title': 'Explore the interactive prototype',
    'pockit-cta-text': 'Navigate the full Pockit experience — from account creation to tracking financial goals.',
    'pockit-cta-btn': 'View in Figma',
    // ── HourGlass Case Study ──
    'hg-back': 'Projects',
    'hg-by-label': 'By',
    'hg-problem-label': 'PROBLEM',
    'hg-problem-text': 'Companies face many challenges when managing schedules, overtime, responsibilities and communication between employees. The lack of a centralized tool leads to confusion and loss of productivity.',
    'hg-problem-item1': 'Lack of clarity in communication',
    'hg-problem-item2': 'Difficulty managing schedules',
    'hg-problem-item3': 'Inefficient management of incidents',
    'hg-problem-item4': 'Difficulty tracking multiple tasks',
    'hg-problem-item5': 'Disorganization within teams',
    'hg-solution-label': 'SOLUTION',
    'hg-solution-text': 'HourGlass is an application designed to organize companies, centralizing responsibilities, events, observations and employee management to optimize internal processes.',
    'hg-solution-item1': 'Efficient management of multiple employees',
    'hg-solution-item2': 'Automated time tracking and records',
    'hg-solution-item3': 'Smart management of events and notes',
    'hg-solution-item4': 'Notifications and alerts for teams',
    'hg-solution-item5': 'Simplified and accessible reports',
    'hg-phase-discover': 'DISCOVER',
    'hg-phase-define': 'DEFINE',
    'hg-phase-develop': 'DEVELOP',
    'hg-phase-deliver': 'DELIVER',
    'hg-research-title': 'Data Search',
    'hg-research-goal-label': 'Goal:',
    'hg-research-goal': 'Understand the needs and challenges faced by companies in relation to time management and internal communication.',
    'hg-methodologies-title': 'Methodologies',
    'hg-method1-b': 'Interviews with Managers and Employees:',
    'hg-method1-t': ' Qualitative interviews to understand real operational problems and needs.',
    'hg-method2-b': 'Questionnaires:',
    'hg-method2-t': ' Distribution of quantitative questionnaires to collect data on the frequency and impact of the identified problems.',
    'hg-method3-b': 'Benchmarking:',
    'hg-method3-t': ' Study of other solutions available on the market to identify strengths and weaknesses.',
    'hg-results-title': 'Results',
    'hg-result1-b': 'Main Pain Points:',
    'hg-result1-t': ' Lack of clarity in communication, difficulty managing schedules and overtime, and confusion about observations and complaints.',
    'hg-result2-b': 'Priority Needs:',
    'hg-result2-t': ' A centralized, easy-to-use tool that allows clear communication, accurate records and management of schedules and roles.',
    'hg-persona-title': 'Persona',
    'hg-persona-desc': 'Based on research interviews, a primary persona was created to represent the main user archetype of HourGlass:',
    'hg-persona-occ': 'Operations Manager',
    'hg-persona-edu': 'Business Administration',
    'hg-persona-status': 'Married',
    'hg-persona-bg': 'Carla manages a team of 20+ employees across multiple shifts. She struggles with spreadsheets and messaging apps to track attendance, overtime and internal complaints — constantly losing information and wasting time.',
    'hg-persona-goals': 'She wants a single platform where she can visualize schedules, manage complaints and track employee performance without switching between tools.',
    'hg-persona-pains': 'She desires clear automated notifications and a dashboard that gives her a complete overview of her team in real time.',
    'hg-insights-title': 'Key Insights',
    'hg-insight1': 'Managers lose 2+ hours/day managing information across disconnected tools.',
    'hg-insight2': 'Employees miss important updates due to lack of centralized notifications.',
    'hg-insight3': 'Overtime tracking is done manually, causing disputes and errors.',
    'hg-insight4': 'Internal complaints lack a formal channel, creating friction and distrust.',
    'hg-ideation-title': 'Ideation',
    'hg-brainstorm-title': 'Brainstorming',
    'hg-feature-title': 'Main Features:',
    'hg-feature-text': ' Recording points, managing overtime, sending and tracking complaints and observations, assigning responsibilities and roles, internal chat.',
    'hg-design-title': 'Intuitive Design:',
    'hg-design-text': ' User-friendly and easy-to-navigate interface.',
    'hg-notif-title': 'Notifications and Alerts:',
    'hg-notif-text': ' To remind employees of important tasks and deadlines.',
    'hg-sketches-title': 'Initial Sketches',
    'hg-sketches-text': 'Design of basic ideas of how each functionality will be presented in the app — before moving into digital wireframing tools.',
    'hg-wireframes-title': 'Wireframes',
    'hg-wireframes-goal': 'Create a basic structure of the application to visualize the arrangement of elements and navigation flows.',
    'hg-screen-config': 'Configurações',
    'hg-screen-msg': 'Mensagens',
    'hg-screen-activities': 'Atividades',
    'hg-screen-points': 'Pontos',
    'hg-usability-title': 'Usability Testing',
    'hg-usability-goal': "Ensure that the app is easy to use and meets users' needs.",
    'hg-test-method1-b': 'Testing with Real Users:',
    'hg-test-method1-t': ' Select a group of managers and employees to test the app.',
    'hg-test-method2-b': 'Iterative Feedback:',
    'hg-test-method2-t': ' Collect feedback on usability and identify areas for improvement.',
    'hg-test-method3-b': 'Adjustments:',
    'hg-test-method3-t': ' Make adjustments based on feedback received.',
    'hg-test-result1-b': 'Positive Feedback:',
    'hg-test-result1-t': ' Users found the interface intuitive and easy to use.',
    'hg-test-result2-b': 'Areas of Improvement:',
    'hg-test-result2-t': ' Adjustments in information organization and clarity of notifications.',
    'hg-prototype-title': 'Prototype',
    'hg-prototype-goal': 'Create a working prototype to visualize and test the full flow of the app — from login and point recording to complaint management and team overview.',
    'hg-cta-title': 'Explore the full case study',
    'hg-cta-text': 'See the complete HourGlass case study on Dribbble — including all screens, flows and final prototype.',
    'hg-cta-btn': 'View on Dribbble',
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
    'edu1-text': 'Formação intensiva em UX Design cobrindo pesquisa com usuários, arquitetura da informação, wireframing, prototipagem e testes de usabilidade. Foco em soluções centradas no usuário equilibrando usabilidade, objetivos de negócio e viabilidade técnica.',
    'edu2-title': 'UNINOVE',
    'edu2-period': '2020 - 2024',
    'edu2-text': 'Graduação em Tradução e Interpretação com foco em linguística, comunicação e comportamento cultural — aprofundando minha compreensão sobre interação humana e nuances interculturais.',
    'exp1-title': 'Product Designer',
    'exp1-period': '2024 - Presente',
    'exp1-text': 'Responsável pelo design de produtos digitais de ponta a ponta para clientes em 9+ setores, incluindo Logística, Segurança, Saúde e Tecnologia. Utilizo um workflow de design integrado com IA — combinando Claude MCP com Figma — para acelerar a criação de Design Systems, documentação de componentes e handoffs prontos para produção em HTML/CSS/JS. Meu trabalho contribuiu para melhorias de 73%+ na retenção de usuários por meio de decisões de UX baseadas em pesquisa, UX writing com testes A/B e colaboração cross-funcional com times de engenharia.',
    'exp3-title': 'E-commerce Lead',
    'exp3-period': '2022 - 2023',
    'exp3-text': 'Responsável pelo design visual completo de uma loja de e-commerce — criando uma experiência de compra acessível, consistente e orientada à conversão. Desenvolvi estratégias de marketing digital focadas no engajamento e comportamento do usuário, construindo uma base prática em product thinking e jornada do cliente.',
    'projects-title': 'Projetos',
    'filter-all': 'Todos',
    'filter-webapps': 'Web Apps',
    'filter-applications': 'Aplicativos',
    'sort-newest': 'Mais Recentes',
    'sort-oldest': 'Mais Antigos',
    'select-category': 'Categoria',
    'cat-application': 'Aplicativo',
    'cat-webapp': 'Web App',
    'cat-in-progress': 'Em progresso',
    'contact-form-title': 'Formulário de Contato',
    'form-name-ph': 'Nome completo',
    'form-email-ph': 'Endereço de Email',
    'form-message-ph': 'Sua Mensagem',
    'form-send': 'Enviar Mensagem',
    'msg-sent': 'Mensagem enviada!',
    // ── Pockit Case Study ──
    'pockit-back': 'Projetos',
    'pockit-by-label': 'Por',
    'pockit-problem-label': 'PROBLEMA',
    'pockit-problem-text': 'Muitas pessoas enfrentam dificuldades para investir e poupar dinheiro devido à complexidade dos aplicativos financeiros existentes. As opções de gestão financeira frequentemente não são intuitivas e não são adaptadas a diferentes faixas etárias ou níveis de conhecimento financeiro.',
    'pockit-problem-item1': 'Dificuldades em investir e poupar',
    'pockit-problem-item2': 'Complexidade dos apps financeiros',
    'pockit-problem-item3': 'Falta de Incentivos',
    'pockit-problem-item4': 'Falta de visão financeira geral',
    'pockit-problem-item5': 'Preocupações com segurança digital',
    'pockit-solution-label': 'SOLUÇÃO',
    'pockit-solution-text': 'O Pockit capacita e incentiva os usuários a poupar e investir seu dinheiro de forma consciente e fácil. O objetivo principal é oferecer uma experiência simples e intuitiva para pessoas de todas as idades, democratizando o acesso às ferramentas financeiras de forma inclusiva.',
    'pockit-solution-item1': 'Tutoriais simples e personalizados',
    'pockit-solution-item2': 'Gamificação: incentivando metas financeiras',
    'pockit-solution-item3': 'Foco em segurança',
    'pockit-solution-item4': 'Dashboard completo',
    'pockit-solution-item5': 'Educação financeira',
    'pockit-stat1-label': 'Usuários Entrevistados',
    'pockit-stat2-label': 'Preferem UI Simples',
    'pockit-stat3-label': 'Taxa de Sucesso',
    'pockit-stat4-label': 'Concorrentes Analisados',
    'pockit-phase-discover': 'DESCOBERTA',
    'pockit-phase-define': 'DEFINIÇÃO',
    'pockit-phase-develop': 'DESENVOLVIMENTO',
    'pockit-phase-deliver': 'ENTREGA',
    'pockit-desk-title': 'Desk Research',
    'pockit-desk-desc': 'Durante o desenvolvimento do Pockit, foram identificados diversos problemas enfrentados pelos usuários na gestão das suas finanças:',
    'pockit-desk1-title': '1 — Baixo Letramento Financeiro',
    'pockit-desk1-text': 'Muitas pessoas não sabem como ou onde começar a investir. Segundo a OCDE, apenas 26% dos brasileiros possuem conhecimentos básicos de finanças. Isso evidencia a necessidade de ferramentas que eduquem os usuários ao mesmo tempo que ofereçam soluções práticas.',
    'pockit-desk1-source': 'Fonte: OCDE — Relatório de Letramento Financeiro',
    'pockit-desk2-title': '2 — Falta de Personalização',
    'pockit-desk2-text': 'Muitos apps não permitem que os usuários ajustem o sistema às suas metas específicas. Segundo a McKinsey, 71% dos consumidores esperam interações personalizadas em suas experiências digitais, mas muitos aplicativos financeiros não entregam isso.',
    'pockit-desk2-source': 'Fonte: McKinsey — O valor de acertar na personalização',
    'pockit-desk3-title': '3 — Interfaces Complexas',
    'pockit-desk3-text': 'Uma sobrecarga de informações ou etapas confunde novos usuários. Um estudo do Nielsen Norman Group indica que 58% dos usuários abandonam apps por achá-los complicados de navegar.',
    'pockit-desk3-source': 'Fonte: NNGroup — Relatório de Usabilidade Mobile',
    'pockit-bench-title': 'Benchmarks',
    'pockit-bench-desc': 'A análise de benchmark foi essencial para identificar lacunas no mercado, entender o que já funciona e evitar erros comuns cometidos por outros apps financeiros.',
    'pockit-bench-has': 'Possui',
    'pockit-bench-partial': 'Possui, mas mal aplicado',
    'pockit-bench-none': 'Não possui',
    'pockit-bench-th-simple': 'Interface simples',
    'pockit-bench-th-personal': 'Personalização',
    'pockit-bench-th-edu': 'Educação financeira',
    'pockit-bench-th-chat': 'Chat',
    'pockit-bench-th-gamif': 'Gamificação',
    'pockit-research-title': 'Pesquisa com Usuários',
    'pockit-research-desc': 'Para entender melhor as necessidades e dificuldades dos usuários, foram criadas as seguintes perguntas para entrevistas em profundidade:',
    'pockit-q1': 'Quais são os maiores desafios que você enfrenta ao tentar poupar ou investir dinheiro?',
    'pockit-q2': 'Você já usou algum app financeiro? O que achou da experiência?',
    'pockit-q3': 'Quais funcionalidades você gostaria de ver em um app de gestão financeira?',
    'pockit-q4': 'O que te motiva a poupar ou investir?',
    'pockit-q5': 'Existe alguma funcionalidade que você acha confusa ou complicada nos apps financeiros atuais?',
    'pockit-q6': 'Qual é sua maior preocupação ao usar tecnologia para gerenciar suas finanças?',
    'pockit-q7': 'Você prefere um design mais minimalista ou detalhado em apps financeiros? Por quê?',
    'pockit-results-title': 'Resultados das Entrevistas',
    'pockit-results-desc': 'Após entrevistar 10 participantes de diferentes faixas etárias e níveis de renda, os seguintes insights foram obtidos:',
    'pockit-stat-challenges-b': 'Desafios Comuns',
    'pockit-stat-challenges-t': 'Relataram dificuldades para entender como os investimentos funcionam. Outros 60% tiveram problemas em manter consistência nas economias.',
    'pockit-stat-expect-b': 'Expectativas',
    'pockit-stat-expect-t': 'Esperam que o app ofereça uma visão consolidada de suas finanças e metas em um único lugar.',
    'pockit-stat-design-b': 'Preferências de Design',
    'pockit-stat-design-t': 'Preferem interfaces simples e intuitivas. Gráficos visuais foram destacados como essenciais.',
    'pockit-stat-fears-b': 'Medos e Dúvidas',
    'pockit-stat-fears-t': 'Preocupam-se com a segurança dos seus dados financeiros. Outros 40% têm medo de cometer erros.',
    'pockit-personas-title': 'Personas',
    'pockit-personas-desc': 'Para representar os principais tipos de usuários do Pockit, duas personas foram criadas com base nos dados da pesquisa:',
    'pockit-occ-label': 'Ocupação',
    'pockit-age-label': 'Idade',
    'pockit-edu-label': 'Educação',
    'pockit-status-label': 'Estado Civil',
    'pockit-loc-label': 'Localização',
    'pockit-bg-h': 'Background',
    'pockit-goals-h': 'Objetivos e Frustrações',
    'pockit-pains-h': 'Dores e Desejos',
    'pockit-ana-occ': 'Professora do Ensino Fundamental',
    'pockit-ana-edu': 'Licenciatura em Pedagogia',
    'pockit-ana-status': 'Casada',
    'pockit-ana-bg': 'Ana sempre foi organizada com suas finanças, mas sente falta de ferramentas que a ajudem a planejar melhor o futuro da família.',
    'pockit-ana-goals': 'Ela quer poupar para a educação dos filhos, mas acha os apps existentes complicados demais.',
    'pockit-ana-pains': 'Ela quer um app fácil de usar que ofereça sugestões práticas para o dia a dia.',
    'pockit-carlos-occ': 'Designer Gráfico Freelancer',
    'pockit-carlos-edu': 'Técnico em Design',
    'pockit-carlos-status': 'Solteiro',
    'pockit-carlos-bg': 'Carlos trabalha de forma independente e tem dificuldade em poupar devido à renda variável. Ele busca ferramentas para ajudá-lo a organizar suas finanças.',
    'pockit-carlos-goals': 'Ele quer criar uma reserva de emergência, mas falta motivação para começar.',
    'pockit-carlos-pains': 'Ele deseja funcionalidades gamificadas que tornem o processo de poupar mais envolvente.',
    'pockit-insights-title': 'Insights da Pesquisa',
    'pockit-certain-title': '✓ Certezas',
    'pockit-certain1': 'Usuários buscam soluções fáceis para poupar dinheiro.',
    'pockit-certain2': 'Interfaces simples aumentam a adoção.',
    'pockit-certain3': 'Personalização aumenta o engajamento.',
    'pockit-assume-title': '~ Suposições',
    'pockit-assume1': 'Usuários de todas as idades conseguem usar o app.',
    'pockit-assume2': 'Gráficos visuais promovem o entendimento.',
    'pockit-assume3': 'Gamificação cria hábitos saudáveis.',
    'pockit-questions-title': '? Perguntas',
    'pockit-question1': 'Melhor forma de explicar conceitos financeiros complexos?',
    'pockit-question2': 'Existe resistência de usuários mais velhos?',
    'pockit-question3': 'Como equilibrar simplicidade com funcionalidades avançadas?',
    'pockit-draft-title': 'Rascunho',
    'pockit-draft-desc': 'Neste momento, o computador foi deixado de lado e todas as ideias foram colocadas no papel. Esboços desenhados à mão foram criados sem se preocupar com detalhes — permitindo visualizar o "Big Picture" do produto antes de partir para as ferramentas digitais.',
    'pockit-ideation-title': 'Ideação',
    'pockit-ideation-desc': 'O processo de ideação incluiu brainstorming focado nos seguintes pontos:',
    'pockit-ideation1': 'Simplificar o acesso às informações financeiras.',
    'pockit-ideation2': 'Criar uma experiência emocionalmente positiva, associando poupar dinheiro ao progresso pessoal.',
    'pockit-ideation3': 'Garantir acessibilidade para pessoas com diferentes níveis de habilidade tecnológica.',
    'pockit-tools-bold': 'Ferramentas utilizadas:',
    'pockit-tools-text': ' FigJam, Notion e pesquisa qualitativa com usuários em potencial.',
    'pockit-wireframes-title': 'Wireframes',
    'pockit-wireframes-desc': 'Após reunir todas as informações necessárias, foram criadas telas de baixa fidelidade para iniciar a pesquisa de usabilidade com potenciais usuários reais.',
    'pockit-usability-title': 'Testes de Usabilidade',
    'pockit-usability-desc': 'Testes em cenários reais foram planejados para avaliar a eficácia do design e a compreensão dos usuários.',
    'pockit-scenario1-title': '1 — Cadastro e Criação de Caixinhas:',
    'pockit-scenario1-desc': ' Avaliar se os usuários conseguem criar caixinhas para suas metas sem dificuldades.',
    'pockit-scenario2-title': '2 — Adição de Fundos:',
    'pockit-scenario2-desc': ' Testar a clareza das opções de transferência e investimento.',
    'pockit-scenario3-title': '3 — Acompanhamento de Metas:',
    'pockit-scenario3-desc': ' Verificar se os gráficos e indicadores ajudam os usuários a monitorar seu progresso.',
    'pockit-scenario4-title': '4 — Exploração do Portfólio:',
    'pockit-scenario4-desc': ' Explorar a tela de "Portfólio" para entender o total de ativos divididos entre as caixinhas criadas e os investimentos aplicados.',
    'pockit-result-title': '✓ Resultados Obtidos',
    'pockit-result-text': 'Usuários de diferentes idades completaram as tarefas com facilidade e relataram compreensão do sistema. ',
    'pockit-result-bold': 'Taxa Média de Sucesso: 93,5%',
    'pockit-identity-title': 'Identidade Visual',
    'pockit-identity-desc': 'A identidade visual do Pockit foi projetada para transmitir três valores fundamentais:',
    'pockit-trust-title': 'Confiança',
    'pockit-trust-text': 'Uso de tons de azul e cinza que transmitem estabilidade e profissionalismo.',
    'pockit-simplicity-title': 'Simplicidade',
    'pockit-simplicity-text': 'Tipografia moderna e minimalista com foco na legibilidade em todos os tamanhos.',
    'pockit-access-title': 'Acessibilidade',
    'pockit-access-text': 'Contraste adequado e design responsivo para diferentes dispositivos e usuários.',
    'pockit-color-primary': 'Primária — Azuis',
    'pockit-color-secondary': 'Secundária — Navy',
    'pockit-color-status': 'Cores de Status',
    'pockit-hifi-title': 'Protótipo de Alta Fidelidade',
    'pockit-hifi-desc': 'Com base nos wireframes e na identidade visual, o protótipo de alta fidelidade foi criado para representar a experiência final do usuário — do onboarding e criação de caixinhas até o acompanhamento do portfólio e exploração de investimentos.',
    'pockit-cta-title': 'Explore o protótipo interativo',
    'pockit-cta-text': 'Navegue pela experiência completa do Pockit — da criação de conta até o acompanhamento de metas financeiras.',
    'pockit-cta-btn': 'Ver no Figma',
    // ── HourGlass Case Study ──
    'hg-back': 'Projetos',
    'hg-by-label': 'Por',
    'hg-problem-label': 'PROBLEMA',
    'hg-problem-text': 'Empresas enfrentam muitos desafios ao gerenciar escalas, horas extras, responsabilidades e a comunicação entre colaboradores. A falta de uma ferramenta centralizada gera confusão e perda de produtividade.',
    'hg-problem-item1': 'Falta de clareza na comunicação',
    'hg-problem-item2': 'Dificuldade em gerenciar escalas',
    'hg-problem-item3': 'Gestão ineficiente de incidentes',
    'hg-problem-item4': 'Dificuldade em acompanhar múltiplas tarefas',
    'hg-problem-item5': 'Desorganização dentro das equipes',
    'hg-solution-label': 'SOLUÇÃO',
    'hg-solution-text': 'O HourGlass é um aplicativo projetado para organizar empresas, centralizando responsabilidades, eventos, observações e a gestão de colaboradores para otimizar os processos internos.',
    'hg-solution-item1': 'Gestão eficiente de múltiplos colaboradores',
    'hg-solution-item2': 'Registro e acompanhamento automático de horas',
    'hg-solution-item3': 'Gestão inteligente de eventos e observações',
    'hg-solution-item4': 'Notificações e alertas para as equipes',
    'hg-solution-item5': 'Relatórios simplificados e de fácil acesso',
    'hg-phase-discover': 'DESCOBERTA',
    'hg-phase-define': 'DEFINIÇÃO',
    'hg-phase-develop': 'DESENVOLVIMENTO',
    'hg-phase-deliver': 'ENTREGA',
    'hg-research-title': 'Pesquisa de Dados',
    'hg-research-goal-label': 'Objetivo:',
    'hg-research-goal': 'Compreender as necessidades e desafios enfrentados pelas empresas em relação à gestão de tempo e comunicação interna.',
    'hg-methodologies-title': 'Metodologias',
    'hg-method1-b': 'Entrevistas com Gestores e Colaboradores:',
    'hg-method1-t': ' Entrevistas qualitativas para compreender os problemas operacionais reais e as necessidades das equipes.',
    'hg-method2-b': 'Questionários:',
    'hg-method2-t': ' Distribuição de questionários quantitativos para coletar dados sobre a frequência e o impacto dos problemas identificados.',
    'hg-method3-b': 'Benchmarking:',
    'hg-method3-t': ' Estudo de outras soluções disponíveis no mercado para identificar pontos fortes e fracos.',
    'hg-results-title': 'Resultados',
    'hg-result1-b': 'Principais Dores:',
    'hg-result1-t': ' Falta de clareza na comunicação, dificuldade em gerenciar escalas e horas extras, e confusão sobre observações e reclamações.',
    'hg-result2-b': 'Necessidades Prioritárias:',
    'hg-result2-t': ' Uma ferramenta centralizada e fácil de usar que permita comunicação clara, registros precisos e gestão de escalas e funções.',
    'hg-persona-title': 'Persona',
    'hg-persona-desc': 'Com base nas entrevistas de pesquisa, foi criada uma persona primária para representar o principal arquétipo de usuário do HourGlass:',
    'hg-persona-occ': 'Coordenadora de Operações',
    'hg-persona-edu': 'Administração de Empresas',
    'hg-persona-status': 'Casada',
    'hg-persona-bg': 'Carla gerencia uma equipe de mais de 20 colaboradores em múltiplos turnos. Ela lida com planilhas e aplicativos de mensagens para controlar presença, horas extras e reclamações internas — perdendo informações e desperdiçando tempo constantemente.',
    'hg-persona-goals': 'Ela quer uma única plataforma onde possa visualizar escalas, gerenciar reclamações e acompanhar o desempenho dos colaboradores sem precisar alternar entre ferramentas.',
    'hg-persona-pains': 'Ela deseja notificações automatizadas claras e um dashboard que ofereça uma visão completa da sua equipe em tempo real.',
    'hg-insights-title': 'Principais Insights',
    'hg-insight1': 'Gestores perdem mais de 2h/dia gerenciando informações em ferramentas desconectadas.',
    'hg-insight2': 'Colaboradores perdem atualizações importantes pela falta de notificações centralizadas.',
    'hg-insight3': 'O controle de horas extras é feito manualmente, gerando erros e conflitos.',
    'hg-insight4': 'Reclamações internas não têm um canal formal, criando atrito e desconfiança.',
    'hg-ideation-title': 'Ideação',
    'hg-brainstorm-title': 'Brainstorming',
    'hg-feature-title': 'Funcionalidades Principais:',
    'hg-feature-text': ' Registro de pontos, gestão de horas extras, envio e acompanhamento de reclamações e observações, atribuição de responsabilidades e funções, chat interno.',
    'hg-design-title': 'Design Intuitivo:',
    'hg-design-text': ' Interface amigável e fácil de navegar.',
    'hg-notif-title': 'Notificações e Alertas:',
    'hg-notif-text': ' Para lembrar colaboradores de tarefas e prazos importantes.',
    'hg-sketches-title': 'Esboços Iniciais',
    'hg-sketches-text': 'Design das ideias básicas de como cada funcionalidade será apresentada no app — antes de avançar para as ferramentas de wireframing digital.',
    'hg-wireframes-title': 'Wireframes',
    'hg-wireframes-goal': 'Criar uma estrutura básica do aplicativo para visualizar o arranjo de elementos e os fluxos de navegação.',
    'hg-screen-config': 'Configurações',
    'hg-screen-msg': 'Mensagens',
    'hg-screen-activities': 'Atividades',
    'hg-screen-points': 'Pontos',
    'hg-usability-title': 'Testes de Usabilidade',
    'hg-usability-goal': 'Garantir que o app seja fácil de usar e atenda às necessidades dos usuários.',
    'hg-test-method1-b': 'Testes com Usuários Reais:',
    'hg-test-method1-t': ' Selecionar um grupo de gestores e colaboradores para testar o app.',
    'hg-test-method2-b': 'Feedback Iterativo:',
    'hg-test-method2-t': ' Coletar feedback sobre usabilidade e identificar áreas de melhoria.',
    'hg-test-method3-b': 'Ajustes:',
    'hg-test-method3-t': ' Realizar ajustes com base no feedback recebido.',
    'hg-test-result1-b': 'Feedback Positivo:',
    'hg-test-result1-t': ' Os usuários acharam a interface intuitiva e fácil de usar.',
    'hg-test-result2-b': 'Áreas de Melhoria:',
    'hg-test-result2-t': ' Ajustes na organização das informações e clareza das notificações.',
    'hg-prototype-title': 'Protótipo',
    'hg-prototype-goal': 'Criar um protótipo funcional para visualizar e testar o fluxo completo do app — do login e registro de pontos até a gestão de reclamações e visão geral da equipe.',
    'hg-cta-title': 'Explore o case study completo',
    'hg-cta-text': 'Veja o case study completo do HourGlass no Dribbble — incluindo todas as telas, fluxos e protótipo final.',
    'hg-cta-btn': 'Ver no Dribbble',
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
  ['lang-toggle', 'lang-toggle-cs', 'lang-toggle-hg'].forEach(id => {
    const langBtn = document.getElementById(id);
    if (!langBtn) return;
    const img = langBtn.querySelector('img');
    if (img) {
      img.src  = lang === 'pt' ? 'components/images/us_flag.png' : 'components/images/br_flag.png';
      img.alt  = lang === 'pt' ? 'EN' : 'PT';
      langBtn.title = lang === 'pt' ? 'Switch to English' : 'Mudar para Português';
    }
  });

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
  ['theme-toggle', 'theme-toggle-cs', 'theme-toggle-hg'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    const icon = btn.querySelector('ion-icon');
    if (icon) icon.setAttribute('name', theme === 'dark' ? 'sunny-outline' : 'moon-outline');
    btn.title = theme === 'dark' ? 'Switch to light mode' : 'Mudar para modo escuro';
  });
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

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function() {
    elementToggleFunc(sidebar);
    elementToggleFunc(this);
  });
}

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

if (modalCloseBtn) modalCloseBtn.addEventListener('click', testimonialsModalFunc);
if (overlay) overlay.addEventListener('click', testimonialsModalFunc);

// =============================================
// FILTER SELECT
// =============================================

const select      = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn   = document.querySelectorAll('[data-filter-btn]');

if (select) select.addEventListener('click', function () { elementToggleFunc(this); });

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
  if (selectBox && !selectBox.contains(e.target)) {
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

  if (sortBtn && projectList) {
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
  }

  // =============================================
  // CONTACT FORM
  // =============================================

  const form       = document.querySelector('[data-form]');
  const formInputs = document.querySelectorAll('[data-form-input]');
  const formBtn    = document.querySelector('[data-form-btn]');

  if (form && formBtn) {
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener('input', function () {
        formBtn[form.checkValidity() ? 'removeAttribute' : 'setAttribute']('disabled', '');
      });
    }
  }

  if (form) form.addEventListener('submit', function (e) {
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
    navigationLinks[i].addEventListener("click", function (e) {
      e.preventDefault();
      // Use data-target-page so nav works regardless of display language
      const clickedPage = this.dataset.targetPage;

      // Toggle pages
      for (let j = 0; j < pages.length; j++) {
        pages[j].classList.toggle("active", clickedPage === pages[j].dataset.page);
      }

      // Toggle nav link active state by matching data-target-page
      for (let j = 0; j < navigationLinks.length; j++) {
        navigationLinks[j].classList.toggle("active", clickedPage === navigationLinks[j].dataset.targetPage);
      }

      window.scrollTo(0, 0);
    });
  }

  // =============================================
  // CONTROLS PANEL WIRING
  // =============================================

  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyTranslations(currentLang === 'en' ? 'pt' : 'en');
  });

  // Case study topbar controls (same functions, separate IDs)
  const themeCs = document.getElementById('theme-toggle-cs');
  const langCs  = document.getElementById('lang-toggle-cs');
  if (themeCs) themeCs.addEventListener('click', toggleTheme);
  if (langCs)  langCs.addEventListener('click', () => {
    applyTranslations(currentLang === 'en' ? 'pt' : 'en');
  });

  const themeHg = document.getElementById('theme-toggle-hg');
  const langHg  = document.getElementById('lang-toggle-hg');
  if (themeHg) themeHg.addEventListener('click', toggleTheme);
  if (langHg)  langHg.addEventListener('click', () => {
    applyTranslations(currentLang === 'en' ? 'pt' : 'en');
  });

  // Topbar glassmorphism on scroll (Pockit + HourGlass)
  const pockitTopbar = document.querySelector('.pockit-topbar');
  if (pockitTopbar) {
    window.addEventListener('scroll', () => {
      pockitTopbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  const hgTopbar = document.querySelector('.hg-topbar');
  if (hgTopbar) {
    window.addEventListener('scroll', () => {
      hgTopbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // Navbar compact mode — hide labels when scrolling down, restore on scroll up
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 40) {
        navbar.classList.add('compact');
      } else {
        navbar.classList.remove('compact');
      }
      lastScrollY = currentScrollY;
    }, { passive: true });
  }

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
