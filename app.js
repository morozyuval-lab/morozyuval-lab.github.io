/* ══════════════════════════════════════════════════════════════
   PORTFOLIO — app.js
   ——————————————————————————————————————————————————————————————
   ★ ADD PORTFOLIO ITEMS     → data.js (projects array)
   ★ REPLACE YOUTUBE LINKS   → data.js (ytId field per item)
   ★ UPDATE CONTACT LINKS    → data.js (config object)
   ★ CHANGE FEATURED ITEMS   → data.js (featured: true/false)
   ——————————————————————————————————————————————————————————————
   This file handles all interactions and animations.
   You should rarely need to edit it.
   ══════════════════════════════════════════════════════════════ */

(() => {

  /* ── 1. Populate config from data.js ──────────────────────── */
  document.getElementById('nav-name').textContent       = config.name;
  document.getElementById('hero-name').textContent      = config.name;
  document.getElementById('hero-title').textContent     = config.tagline;
  document.getElementById('hero-sub').textContent       = config.heroSub;
  document.getElementById('about-text').textContent     = config.aboutText;
  document.getElementById('contact-headline').textContent = config.contactHeadline;
  document.getElementById('contact-sub').textContent    = config.contactSub;
  document.getElementById('footer-name').textContent    = config.name;
  document.getElementById('footer-year').textContent    = new Date().getFullYear();

  /* ── 2. Wire up contact links ─────────────────────────────── */
  document.querySelectorAll('.js-linkedin').forEach(el => el.href = config.linkedin);
  document.querySelectorAll('.js-email').forEach(el => el.href = `mailto:${config.email}`);
  document.querySelectorAll('.js-phone').forEach(el => el.href = `tel:${config.phone}`);

  /* ── 3. Render skills as dot-separated text ───────────────── */
  const skillsEl = document.getElementById('skills-list');
  config.skills.forEach((skill, i) => {
    if (i > 0) {
      const dot = document.createElement('span');
      dot.className = 'skill-dot';
      dot.textContent = '·';
      skillsEl.appendChild(dot);
    }
    skillsEl.appendChild(document.createTextNode(skill));
  });


  /* ── 4. Thumbnail helpers ─────────────────────────────────── */
  function thumbUrl(ytId) {
    return `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
  }
  function thumbFallback(img, ytId) {
    img.onerror = null;
    img.src = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
  }


  /* ── 5. Build a single card ───────────────────────────────── */
  function buildCard(item) {
    const hasLink = !!(item.ytId || item.img);
    const card = document.createElement('div');
    card.className = 'card fade-up'
      + (item.isShort  ? ' is-short'  : '')
      + (item.isSquare ? ' is-square' : '')
      + (!hasLink      ? ' no-link'   : '');
    card.dataset.tags = item.tags.join(',');
    card.dataset.id   = item.id;

    const thumb = document.createElement('div');
    thumb.className = 'card-thumb';

    if (item.ytId || item.img) {
      const img = document.createElement('img');
      img.src     = item.img ? item.img : thumbUrl(item.ytId);
      img.alt     = item.title;
      img.loading = 'lazy';
      if (item.ytId) img.onerror = () => thumbFallback(img, item.ytId);
      thumb.appendChild(img);

      const overlay = document.createElement('div');
      overlay.className = 'card-overlay';
      const isExt = item.type === 'linkedin' || item.type === 'linkedin-post';
      overlay.innerHTML = isExt
        ? `<div class="ext-icon">
             <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
               <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
               <polyline points="15 3 21 3 21 9"/>
               <line x1="10" y1="14" x2="21" y2="3"/>
             </svg>
           </div>`
        : `<div class="play-icon">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
               <polygon points="5 3 19 12 5 21 5 3"/>
             </svg>
           </div>`;
      thumb.appendChild(overlay);

    } else {
      const ph = document.createElement('div');
      ph.className = 'card-thumb-placeholder';
      ph.textContent = 'Private';
      thumb.appendChild(ph);
      const badge = document.createElement('div');
      badge.className = 'card-private-badge';
      badge.textContent = 'Private';
      thumb.appendChild(badge);
    }

    const info = document.createElement('div');
    info.className = 'card-info';

    const titleEl = document.createElement('div');
    titleEl.className = 'card-title';
    titleEl.textContent = item.title;
    info.appendChild(titleEl);

    if (item.role) {
      const role = document.createElement('div');
      role.className = 'card-role';
      role.textContent = item.role;
      info.appendChild(role);
    }

    if (item.tags && item.tags.length) {
      const tagsEl = document.createElement('div');
      tagsEl.className = 'card-tags';
      item.tags.forEach(t => {
        const tag = document.createElement('span');
        tag.className = 'card-tag';
        tag.textContent = t;
        tagsEl.appendChild(tag);
      });
      info.appendChild(tagsEl);
    }
    thumb.appendChild(info);
    card.appendChild(thumb);

    if (hasLink) {
      const isExt = item.type === 'linkedin' || item.type === 'linkedin-post';
      if (isExt) {
        card.addEventListener('click', () => window.open(item.url, '_blank', 'noopener'));
      } else {
        card.addEventListener('click', () => openModal(item));
      }
    }

    return card;
  }


  /* ── 6. Scroll animations (defined first — used by renderGallery) ── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const siblings = el.parentElement
        ? Array.from(el.parentElement.children)
        : [];
      const idx = siblings.indexOf(el);
      const delay = el.classList.contains('card')
        ? (idx % 4) * 60
        : idx * 80;
      setTimeout(() => el.classList.add('visible'), delay);
      io.unobserve(el);
    });
  }, { threshold: 0.06 });

  function observeCards() {
    galleryGrid.querySelectorAll('.card.fade-up').forEach(el => io.observe(el));
  }

  /* Observe about blocks */
  document.querySelectorAll('.about-block').forEach(el => {
    el.classList.add('fade-up');
    io.observe(el);
  });

  /* ── 7. Gallery state ─────────────────────────────────────── */
  const galleryGrid = document.getElementById('gallery-grid');
  let activeTag  = 'All';
  let activeSort = 'newest';

  /* Shuffle helper (Fisher-Yates) */
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* Return projects in the current sort order */
  function getSortedProjects() {
    if (activeSort === 'oldest') return [...projects];               // data.js order = oldest first
    if (activeSort === 'newest') return [...projects].reverse();     // reverse = newest first
    return shuffle(projects);                                        // random
  }

  /* Re-render all cards then apply the active filter */
  function renderGallery() {
    galleryGrid.innerHTML = '';
    getSortedProjects().forEach(item => {
      galleryGrid.appendChild(buildCard(item));
    });
    applyFilter();
    observeCards();  /* re-attach scroll animations */
  }

  /* Show/hide cards based on active tag */
  function applyFilter() {
    galleryGrid.querySelectorAll('.card').forEach(card => {
      if (activeTag === 'All') {
        card.classList.remove('hidden');
      } else {
        const tags = card.dataset.tags.split(',');
        card.classList.toggle('hidden', !tags.includes(activeTag));
      }
    });
  }

  /* Initial render */
  renderGallery();


  /* ── 7. Filter pills ──────────────────────────────────────── */
  /* ★ EDIT TAG ORDER → change this array */
  const tagOrder = ['All', 'Shorts', 'AI', 'Brand', 'Motion', 'Product Marketing', 'Employer Branding', 'RTM'];
  const filterBar = document.getElementById('filter-bar');

  tagOrder.forEach(tag => {
    const pill = document.createElement('button');
    pill.className = 'filter-pill' + (tag === 'All' ? ' active' : '');
    pill.textContent = tag;
    pill.addEventListener('click', () => {
      activeTag = tag;
      filterBar.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      applyFilter();
    });
    filterBar.appendChild(pill);
  });




  /* ── 9. Mobile menu ──────────────────────────────────────── */
  const hamburger      = document.getElementById('nav-hamburger');
  const mobileMenu     = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMobileMenu);
  mobileMenuClose.addEventListener('click', closeMobileMenu);
  mobileMenu.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });


  /* ── 10. Scroll-driven nav ────────────────────────────────── */
  const nav = document.getElementById('nav');
  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 20);
    lastScrollY = y;
  }, { passive: true });


  /* ── 11. Modal ────────────────────────────────────────────── */
  const overlay      = document.getElementById('modal-overlay');
  const modalInner   = document.getElementById('modal-inner');
  const modalVideoWrap = document.getElementById('modal-video-wrap');
  const modalTitle   = document.getElementById('modal-title');
  const modalRole    = document.getElementById('modal-role');

  function openModal(item) {
    const portrait = item.isShort;
    modalInner.className     = 'modal-inner ' + (portrait ? 'portrait' : 'landscape');
    modalVideoWrap.className = 'modal-video-wrap ' + (portrait ? 'portrait-ratio' : 'landscape-ratio');

    const iframe = document.createElement('iframe');
    iframe.src   = `https://www.youtube.com/embed/${item.ytId}?autoplay=1&rel=0&modestbranding=1`;
    iframe.allow = 'autoplay; encrypted-media; fullscreen';
    iframe.allowFullscreen = true;
    modalVideoWrap.innerHTML = '';
    modalVideoWrap.appendChild(iframe);

    modalTitle.textContent = item.title;
    modalRole.textContent  = item.role;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    /* Wait for exit animation, then destroy iframe to stop audio */
    setTimeout(() => { modalVideoWrap.innerHTML = ''; }, 250);
  }

  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

})();
