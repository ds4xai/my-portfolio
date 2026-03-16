(function () {
  const D = DATA;
  const $ = id => document.getElementById(id);

  // ── SVG icons helper ──────────────────────────
  const icon = s => `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${s}</svg>`;
  const ICONS = {
    scholar:  icon('<path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14v7"/><path d="M6.9 9.5A5 5 0 0 0 12 19a5 5 0 0 0 5.1-9.5"/>'),
    github:   icon('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'),
    linkedin: icon('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
    twitter:  icon('<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>'),
    email:    icon('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'),
    pdf:      icon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'),
    code:     icon('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'),
    slides:   icon('<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'),
    poster:   icon('<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/>'),
    github_l: icon('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'),
    demo:     icon('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>'),
    ext:      icon('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>'),
    orcid:    icon('<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>'),
    cv:       icon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>'),
  };

  // ── Theme toggle ──────────────────────────────
  const html   = document.documentElement;
  const togBtn = $('theme-toggle');
  const saved  = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', saved);

  togBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // ── Sidebar ───────────────────────────────────
  const name = D.name;
  document.title               = `${name} — Research`;
  $('mobile-name').textContent  = name.split(' ')[0];
  $('sidebar-name').textContent  = name;
  $('sidebar-title').textContent = D.title;
  $('sidebar-affil').textContent = D.affiliation;
  $('sidebar-email').innerHTML   = `<a href="mailto:${D.email}" style="color:var(--sb-text3)">${D.email}</a>`;

  // Avatar
  const av = $('avatar');
  if (D.photo) {
    const img = document.createElement('img');
    img.src = D.photo; img.alt = name;
    av.appendChild(img);
  } else {
    av.textContent = D.initials;
  }

  // Social links
  const socialMap = [
    { key: 'scholar',  label: 'Scholar'  },
    { key: 'github',   label: 'GitHub'   },
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'twitter',  label: 'Twitter'  },
    { key: 'orcid',    label: 'ORCID'    },
    { key: 'cv',       label: 'CV / PDF' },
  ];
  const sl = $('social-links');
  socialMap.forEach(({ key, label }) => {
    if (!D.links[key]) return;
    const a = document.createElement('a');
    a.href = D.links[key]; a.target = '_blank'; a.rel = 'noopener';
    a.innerHTML = `${ICONS[key] || ''} ${label}`;
    sl.appendChild(a);
  });

  // ── Hero ──────────────────────────────────────
  const bannerEl = $('hero-banner');
  if (D.banner) {
    bannerEl.style.backgroundImage    = `url('${D.banner}')`;
    bannerEl.style.backgroundSize     = 'cover';
    bannerEl.style.backgroundPosition = 'center';
  }

  $('hero-name').innerHTML = name.replace(/(\S+)\s*$/, '<em>$1</em>');
  $('hero-sub').textContent = D.title + ' · ' + D.affiliation;

  const hl = $('hero-links');
  const addBtn = (href, html_, cls, ext) => {
    const a = document.createElement('a');
    a.href = href; a.className = `btn ${cls}`;
    if (ext) { a.target = '_blank'; a.rel = 'noopener'; }
    a.innerHTML = html_;
    hl.appendChild(a);
  };
  if (D.links.cv)      addBtn(D.links.cv,      `${ICONS.cv} Download CV`,      'btn-primary', false);
  if (D.links.scholar) addBtn(D.links.scholar,  `${ICONS.scholar} Google Scholar`, 'btn-ghost', true);
  if (D.links.github)  addBtn(D.links.github,   `${ICONS.github} GitHub`,          'btn-ghost', true);
  addBtn(`mailto:${D.email}`, `${ICONS.email} ${D.email}`, 'btn-ghost', false);

  // ── Bio ───────────────────────────────────────
  $('bio-text').innerHTML = D.bio;

  // ── Interests ─────────────────────────────────
  const tagColors = ['accent', 'teal', 'mauve', '', 'teal', 'accent', 'mauve', ''];
  const il = $('interests-list');
  D.interests.forEach((t, i) => {
    const s = document.createElement('span');
    s.className = `tag ${tagColors[i % tagColors.length]}`;
    s.textContent = t;
    il.appendChild(s);
  });

  // ── News ──────────────────────────────────────
  const nl = $('news-list');
  D.news.forEach(n => {
    const d = document.createElement('div');
    d.className = 'news-item';
    d.innerHTML = `<span class="news-date">${n.date}</span><span class="news-text">${n.text}</span>`;
    nl.appendChild(d);
  });

  // ── Publications ──────────────────────────────
  const types = ['all', ...new Set(D.publications.map(p => p.type))];
  let currentFilter = 'all';
  const pf = $('pub-filters');

  types.forEach(t => {
    const btn = document.createElement('button');
    btn.className   = 'filter-btn' + (t === 'all' ? ' active' : '');
    btn.textContent = t === 'all' ? 'All' : t.charAt(0).toUpperCase() + t.slice(1);
    btn.dataset.type = t;
    btn.addEventListener('click', () => {
      currentFilter = t;
      pf.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.type === t));
      renderPubs();
    });
    pf.appendChild(btn);
  });

  function renderPubs() {
    const pl = $('pub-list');
    pl.innerHTML = '';
    const filtered = currentFilter === 'all'
      ? D.publications
      : D.publications.filter(p => p.type === currentFilter);
    filtered.sort((a, b) => b.year - a.year);

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = `pub-card${p.highlight ? ' highlight' : ''}`;
      const authorHtml = p.authors.replace(name, `<span class="me">${name}</span>`);
      const linkBtns   = Object.entries(p.links).filter(([, v]) => v)
        .map(([k, v]) => `<a href="${v}" target="_blank" class="pub-link ${k === 'pdf' ? 'pdf-link' : ''}">${ICONS[k] || ICONS.ext} ${k.toUpperCase()}</a>`)
        .join('');
      const tagHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
      card.innerHTML = `
        <span class="pub-badge badge-${p.type}">${p.type}</span>
        <div class="pub-title">${p.title}</div>
        <div class="pub-authors">${authorHtml}</div>
        <div class="pub-venue">${p.venue}<span class="year">${p.year}</span></div>
        <div class="pub-abstract" id="abs-${p.id}">${p.abstract}</div>
        <div class="pub-footer">
          ${linkBtns}
          <button class="abstract-toggle" onclick="toggleAbs('${p.id}',this)">+ Abstract</button>
          <div class="pub-tags">${tagHtml}</div>
        </div>`;
      pl.appendChild(card);
    });
  }

  // Exposé globalement pour les onclick inline
  window.toggleAbs = (id, btn) => {
    const el = document.getElementById('abs-' + id);
    const v  = el.classList.toggle('visible');
    btn.textContent = v ? '− Abstract' : '+ Abstract';
  };

  renderPubs();

  // ── Projects ──────────────────────────────────
  const pg = $('project-grid');
  D.projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    const projectLinks = Object.entries(p.links).filter(([, v]) => v)
      .map(([k, v]) => `<a href="${v}" target="_blank" class="pub-link">${ICONS[k] || ICONS.ext} ${k.charAt(0).toUpperCase() + k.slice(1)}</a>`)
      .join('');
    const tagHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    card.innerHTML = `
      <span class="project-status ${p.status.toLowerCase()}">${p.status}</span>
      <div class="project-title">${p.title}</div>
      <div class="project-subtitle">${p.subtitle}</div>
      ${p.metric ? `<div class="project-metric">📊 ${p.metric}</div>` : ''}
      <p class="project-desc">${p.description}</p>
      <div class="project-footer">${projectLinks}</div>
      <div class="tag-list" style="margin-top:10px;gap:5px;">${tagHtml}</div>`;
    pg.appendChild(card);
  });

  // ── Teaching ──────────────────────────────────
  const tl = $('teaching-list');
  D.teaching.forEach(t => {
    const div  = document.createElement('div');
    div.className = 'teaching-item';
    const inst = t.institutionUrl
      ? `<a href="${t.institutionUrl}" target="_blank" rel="noopener">${t.institution}</a>`
      : t.institution;
    div.innerHTML = `
      <div>
        <div class="teaching-course">${t.course}</div>
        <div class="teaching-meta">${inst} · ${t.year}</div>
        ${t.level ? `<div class="teaching-level">${t.level}</div>` : ''}
        <div class="teaching-level" style="margin-top:2px;color:var(--text3)">${t.role}</div>
      </div>
      <div class="teaching-hours">${t.hours}</div>`;
    tl.appendChild(div);
  });

  // ── Contact ───────────────────────────────────
  const ci = $('contact-info');
  [
    { href: `mailto:${D.email}`, html: `${ICONS.email} ${D.email}`, ext: false },
    D.links.scholar  && { href: D.links.scholar,  html: `${ICONS.scholar}  Google Scholar`, ext: true },
    D.links.github   && { href: D.links.github,   html: `${ICONS.github}   GitHub`,         ext: true },
    D.links.linkedin && { href: D.links.linkedin, html: `${ICONS.linkedin} LinkedIn`,       ext: true },
    D.links.orcid    && { href: D.links.orcid,    html: `${ICONS.orcid}    ORCID`,          ext: true },
  ].filter(Boolean).forEach(({ href, html: h, ext }) => {
    const a = document.createElement('a');
    a.href = href; a.innerHTML = h;
    if (ext) { a.target = '_blank'; a.rel = 'noopener'; }
    ci.appendChild(a);
  });

  // ── Active nav (IntersectionObserver) ─────────
  const sections = document.querySelectorAll('section[id], .hero');
  const navLinks = document.querySelectorAll('.nav-link');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nav-link[data-section="${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach(s => obs.observe(s));

  // ── Mobile menu ───────────────────────────────
  const hamburger = $('hamburger');
  const sidebar   = $('sidebar');
  const overlay   = $('overlay');

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
  document.querySelectorAll('.sidebar-nav a').forEach(a =>
    a.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    })
  );

})();
