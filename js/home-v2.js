/* ==========================================================================
   VBSP HOMEPAGE V2 INTERACTIVE CONTROLLER
   Handles Editorial Feed switching, Header Search Drawer, Multimedia Center-Focus
   Carousel + Filtering, Live Clock, and Document Tabs.
   (Relies on initBranchLocator() & initMobileNav() in js/main.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  initV2Clock();
  initV2HeaderSearch();
  initV2EditorialFeed();
  initV2Multimedia();
  initV2DocumentTabs();
});

function initV2Clock() {
  const clockEl = document.getElementById('v2LiveClock');
  if (!clockEl) return;

  const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  function tick() {
    const now = new Date();
    const dName = days[now.getDay()];
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = now.getFullYear();
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    clockEl.textContent = `Hà Nội: ${dName}, ngày ${dd}/${mm}/${yyyy} - ${hh}:${min}`;
  }
  tick();
  setInterval(tick, 30000);
}

function initV2HeaderSearch() {
  const toggleBtn = document.getElementById('v2SearchToggle');
  const searchBar = document.getElementById('v2SearchBar');
  const searchInput = document.getElementById('v2SearchInput');
  if (!toggleBtn || !searchBar) return;

  toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const isOpen = searchBar.classList.toggle('open');
    if (isOpen && searchInput) {
      setTimeout(() => searchInput.focus(), 50);
    }
  });
}

function initV2EditorialFeed() {
  const feedLinks = document.querySelectorAll('#v2RightFeed .sfRightLink');
  const heroCard = document.getElementById('v2HeroLeadCard');
  const heroImg = document.getElementById('v2HeroLeadImg');
  const heroTitle = document.getElementById('v2HeroLeadTitle');
  const heroSum = document.getElementById('v2HeroLeadSummary');

  if (!feedLinks.length || !heroCard || !heroImg || !heroTitle || !heroSum) return;

  feedLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const hasPreview = this.dataset.img && this.dataset.title;
      if (!hasPreview) return;
      // First click previews the selected news in the Lead Story box; second click navigates
      if (!this.classList.contains('is-selected')) {
        e.preventDefault();
        feedLinks.forEach(l => l.classList.remove('is-selected'));
        this.classList.add('is-selected');
        heroImg.src = this.dataset.img;
        heroImg.alt = this.dataset.title;
        heroTitle.textContent = this.dataset.title;
        heroSum.textContent = this.dataset.summary || '';
        heroCard.href = this.getAttribute('href') || 'chi-tiet-tin-tuc.html';
      }
    });
  });
}

function initV2Multimedia() {
  const track = document.getElementById('v2MediaTrack');
  const prevBtn = document.getElementById('v2MediaPrev');
  const nextBtn = document.getElementById('v2MediaNext');
  const pills = document.querySelectorAll('.v2-media-pill[data-type]');

  if (!track || typeof VBSP_DATA === 'undefined' || !Array.isArray(VBSP_DATA.multimedia)) return;

  let centerIdx = 4;
  let activeList = [];

  function syncTrack() {
    const cards = track.querySelectorAll('.v2-media-card');
    cards.forEach((c, i) => {
      c.classList.remove('is-center', 'is-adjacent');
      const d = Math.abs(i - centerIdx);
      if (d === 0) c.classList.add('is-center');
      else if (d === 1) c.classList.add('is-adjacent');
    });

    const viewport = track.parentElement;
    if (!viewport || !cards.length) return;
    const vw = viewport.offsetWidth;
    const cw = cards[0].offsetWidth || 245;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 18;
    const step = cw + gap;
    const offset = (vw / 2) - (cw / 2) - (centerIdx * step);
    track.style.transform = `translateX(${offset}px)`;
  }

  function render(type) {
    let list = VBSP_DATA.multimedia;
    if (type !== 'all') {
      list = list.filter(m => m.type === type);
    }
    activeList = list;
    const featIdx = list.findIndex(m => m.featured);
    centerIdx = featIdx !== -1 ? featIdx : Math.min(Math.floor(list.length / 2), Math.max(0, list.length - 1));

    track.innerHTML = list.map((item, idx) => `
      <a href="chi-tiet-bai-viet-multimedia.html?id=${item.id}" class="v2-media-card" data-idx="${idx}">
        <div class="v2-media-thumb">
          <img src="${item.thumb}" alt="${item.title}" loading="lazy" onerror="this.src='images/noimage.png'">
        </div>
        <h4 class="v2-media-title">
          <i class="${item.icon || 'fa-solid fa-play'}"></i>
          ${item.title}
        </h4>
      </a>
    `).join('');

    track.querySelectorAll('.v2-media-card').forEach(card => {
      card.addEventListener('click', function (e) {
        const idx = parseInt(this.dataset.idx, 10);
        if (idx !== centerIdx) {
          e.preventDefault();
          centerIdx = idx;
          syncTrack();
        }
      });
    });

    syncTrack();
  }

  pills.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      pills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      render(this.dataset.type);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      if (centerIdx > 0) {
        centerIdx--;
        syncTrack();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      if (centerIdx < activeList.length - 1) {
        centerIdx++;
        syncTrack();
      }
    });
  }

  window.addEventListener('resize', syncTrack);
  render('all');
}

function initV2DocumentTabs() {
  const tabs = document.querySelectorAll('.vbsp-document-tabs__tab[data-tab-target]');
  const panels = document.querySelectorAll('.vbsp-document-tabs__panel');
  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const targetId = this.getAttribute('data-tab-target');
      tabs.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => {
        p.classList.remove('is-active');
        p.setAttribute('hidden', 'hidden');
      });
      this.classList.add('is-active');
      this.setAttribute('aria-selected', 'true');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('is-active');
        targetPanel.removeAttribute('hidden');
      }
    });
  });
}
