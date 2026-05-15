// ============================================
//   INTERNATIONALIZATION (i18n)
//   Auto-detects language based on IP location
//   PT-BR for Brazil, EN for everything else
// ============================================

const translations = {
  'pt-BR': {
    // Page title
    pageTitle: 'Cristian de Biasi | Desenvolvedor & Técnico de TI',
    contactPageTitle: 'Contato | Cristian de Biasi',

    // Navbar
    navAbout: 'Sobre',
    navExperience: 'Experiência',
    navCertifications: 'Certificações',
    navSkills: 'Conhecimentos',
    navContact: 'Contato',

    // Hero
    heroTitle1: 'Desenvolvedor',
    heroTitle2: '& Técnico de TI',
    heroSubtitle: 'Transformando ideias em soluções tecnológicas inovadoras',
    heroBtnContact: 'Entre em Contato',
    heroBtnGithub: 'Ver GitHub',

    // About
    aboutTitle: 'Sobre Mim',
    aboutLead: 'Tenho 24 anos, natural de São Sebastião do Paraíso, MG. Sou um profissional dedicado e ambicioso, apaixonado por tecnologia e sempre em busca de crescimento e aprendizado contínuo.',
    aboutP1: 'Atualmente cursando <strong>Sistemas de Informação</strong> na <em>Libertas Faculdades Integradas</em>, com previsão de conclusão em <strong>dezembro de 2026</strong>.',
    aboutP2: 'Com experiência em suporte técnico, desenvolvimento mobile e ensino, busco sempre aplicar meus conhecimentos para criar soluções que façam a diferença.',

    // Experience
    experienceTitle: 'Experiência Profissional',
    job1Title: 'Técnico de TI',
    job1Period: '1 ano e 8 meses',
    job1Desc: 'Atendimento remoto, manutenção de hardwares, servidores, nobreaks, Windows Servers e resolução de problemas de sistemas operacionais remotamente.',
    job2Title: 'Estágio em Desenvolvimento Mobile',
    job2Period: '6 meses',
    job2Desc: 'Desenvolvimento de aplicativos mobile utilizando Flutter e Dart, com consumo de APIs e implementação de funcionalidades complexas.',
    job3Title: 'Professor de Desenvolvimento de Sistemas',
    job3Period: '10 meses',
    job3Desc: 'Lecionando em escola pública pelo estado de MG, disciplinas como Banco de Dados, Desenvolvimento Web, Algoritmos e Estruturas de Dados, Matemática Discreta e Arquitetura de Sistemas para alunos do ensino médio técnico.',
    skillRemoteSupport: 'Atendimento Remoto',
    skillHardware: 'Manutenção de Hardware',
    skillTechSupport: 'Suporte Técnico',
    skillTechTeaching: 'Ensino Técnico',
    skillDatabase: 'Banco de Dados',
    skillWebDev: 'Desenvolvimento Web',
    skillAlgorithms: 'Algoritmos e Estrutura de Dados',

    // Certifications
    certificationsTitle: 'Certificações',
    cert1Desc: 'Certificação em tecnologia e desenvolvimento',
    cert2Desc: 'Fundamentos de computação em nuvem AWS',
    cert3Title: '10° Colocado',
    cert3Desc: 'Competição Amazon Engenharia de Prompt',

    // Skills
    skillsTitle: 'Conhecimentos & Habilidades',
    skillCatLanguages: 'Linguagens',
    skillCatFrameworks: 'Frameworks & Tecnologias',
    skillCatConcepts: 'Conceitos & Fundamentos',
    skillCatLanguagesHuman: 'Idiomas',
    skillDataStructures: 'Estrutura de Dados',
    skillEnglish: 'Inglês Intermediário',
    skillPortuguese: 'Português Nativo',

    // Contact
    contactTitle: 'Entre em Contato',
    contactLead: 'Vamos conversar sobre oportunidades ou projetos!',
    contactLeadFull: 'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato através de qualquer um dos canais abaixo!',

    // Footer
    footerRights: 'Todos os direitos reservados.',
    footerBuilt: 'Desenvolvido com HTML, CSS e JavaScript',

    // Back to top
    backToTop: 'Voltar ao topo',

    // Lang toggle
    langToggle: 'EN',
  },

  'en': {
    // Page title
    pageTitle: 'Cristian de Biasi | Developer & IT Technician',
    contactPageTitle: 'Contact | Cristian de Biasi',

    // Navbar
    navAbout: 'About',
    navExperience: 'Experience',
    navCertifications: 'Certifications',
    navSkills: 'Skills',
    navContact: 'Contact',

    // Hero
    heroTitle1: 'Developer',
    heroTitle2: '& IT Technician',
    heroSubtitle: 'Turning ideas into innovative technological solutions',
    heroBtnContact: 'Get in Touch',
    heroBtnGithub: 'View GitHub',

    // About
    aboutTitle: 'About Me',
    aboutLead: 'I\'m 24 years old, from São Sebastião do Paraíso, MG, Brazil. I\'m a dedicated and ambitious professional, passionate about technology and always seeking growth and continuous learning.',
    aboutP1: 'Currently studying <strong>Information Systems</strong> at <em>Libertas Faculdades Integradas</em>, expected graduation in <strong>December 2026</strong>.',
    aboutP2: 'With experience in technical support, mobile development, and teaching, I always strive to apply my knowledge to create solutions that make a difference.',

    // Experience
    experienceTitle: 'Professional Experience',
    job1Title: 'IT Technician',
    job1Period: '1 year and 8 months',
    job1Desc: 'Remote support, hardware maintenance, servers, UPS systems, Windows Servers, and remote troubleshooting of operating system issues.',
    job2Title: 'Mobile Development Intern',
    job2Period: '6 months',
    job2Desc: 'Mobile application development using Flutter and Dart, consuming APIs and implementing complex features.',
    job3Title: 'Systems Development Teacher',
    job3Period: '10 months',
    job3Desc: 'Teaching at a public school in the state of MG, covering subjects such as Databases, Web Development, Algorithms and Data Structures, Discrete Mathematics, and Systems Architecture for technical high school students.',
    skillRemoteSupport: 'Remote Support',
    skillHardware: 'Hardware Maintenance',
    skillTechSupport: 'Technical Support',
    skillTechTeaching: 'Technical Teaching',
    skillDatabase: 'Databases',
    skillWebDev: 'Web Development',
    skillAlgorithms: 'Algorithms & Data Structures',

    // Certifications
    certificationsTitle: 'Certifications',
    cert1Desc: 'Certification in technology and development',
    cert2Desc: 'AWS cloud computing fundamentals',
    cert3Title: '10th Place',
    cert3Desc: 'Amazon Prompt Engineering Competition',

    // Skills
    skillsTitle: 'Knowledge & Skills',
    skillCatLanguages: 'Languages',
    skillCatFrameworks: 'Frameworks & Technologies',
    skillCatConcepts: 'Concepts & Fundamentals',
    skillCatLanguagesHuman: 'Languages',
    skillDataStructures: 'Data Structures',
    skillEnglish: 'Intermediate English',
    skillPortuguese: 'Native Portuguese',

    // Contact
    contactTitle: 'Get in Touch',
    contactLead: 'Let\'s talk about opportunities or projects!',
    contactLeadFull: 'I\'m always open to new opportunities and interesting projects. Reach out through any of the channels below!',

    // Footer
    footerRights: 'All rights reserved.',
    footerBuilt: 'Built with HTML, CSS and JavaScript',

    // Back to top
    backToTop: 'Back to top',

    // Lang toggle
    langToggle: 'PT',
  }
};

// Detect language based on IP geolocation
async function detectLanguage() {
  // Check if user manually overrode the language
  const stored = localStorage.getItem('preferredLang');
  if (stored && translations[stored]) return stored;

  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    return data.country_code === 'BR' ? 'pt-BR' : 'en';
  } catch {
    // Fallback: use browser language
    const browserLang = navigator.language || navigator.userLanguage || '';
    return browserLang.startsWith('pt') ? 'pt-BR' : 'en';
  }
}

// Apply translations to the DOM
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update html lang attribute
  document.documentElement.lang = lang === 'pt-BR' ? 'pt-BR' : 'en';

  // Update page title
  const titleKey = document.body.dataset.page === 'contact' ? 'contactPageTitle' : 'pageTitle';
  document.title = t[titleKey];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      // Use innerHTML for keys that may contain HTML tags
      const htmlKeys = ['aboutP1', 'aboutP2', 'aboutLead'];
      if (htmlKeys.includes(key)) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) {
      el.setAttribute('aria-label', t[key]);
      el.setAttribute('title', t[key]);
    }
  });

  // Update lang toggle button text
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) toggleBtn.textContent = t.langToggle;

  // Store current lang on body for reference
  document.body.dataset.currentLang = lang;
}

// Toggle between PT and EN
function toggleLanguage() {
  const current = document.body.dataset.currentLang || 'pt-BR';
  const next = current === 'pt-BR' ? 'en' : 'pt-BR';
  localStorage.setItem('preferredLang', next);
  applyTranslations(next);
}

// Initialize i18n
async function initI18n() {
  const lang = await detectLanguage();
  applyTranslations(lang);
}
