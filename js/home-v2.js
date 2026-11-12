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
  const section = document.getElementById('multimedia');

  if (!track || typeof VBSP_DATA === 'undefined' || !Array.isArray(VBSP_DATA.multimedia)) return;

  let centerIdx = 4;
  let activeList = [];
  let autoTimer = null;
  let lastVisibleCount = getVisibleSlots();

  function getVisibleSlots() {
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 1024) return 3;
    return 5;
  }

  function renderWindow(direction) {
    const len = activeList.length;
    if (!len) {
      track.innerHTML = '';
      return;
    }

    const slots = Math.min(getVisibleSlots(), len);
    const half = Math.floor(slots / 2);
    const offsets = [];

    if (slots === 1) {
      offsets.push(0);
    } else if (slots % 2 === 1) {
      for (let o = -half; o <= half; o++) offsets.push(o);
    } else {
      for (let o = -half; o < half; o++) offsets.push(o);
    }

    if (slots < 5 && window.innerWidth >= 1024) {
      track.setAttribute('data-cols', String(slots));
    } else if (slots < 3 && window.innerWidth >= 640 && window.innerWidth < 1024) {
      track.setAttribute('data-cols', String(slots));
    } else {
      track.removeAttribute('data-cols');
    }

    const cardsHtml = offsets.map(offset => {
      const idx = ((centerIdx + offset) % len + len) % len;
      const item = activeList[idx];
      const absD = Math.abs(offset);
      const cls = absD === 0 ? 'v2-media-card is-center' : (absD === 1 ? 'v2-media-card is-adjacent' : 'v2-media-card');
      return `
        <a href="chi-tiet-bai-viet-multimedia.html?id=${item.id}" class="${cls}" data-idx="${idx}" data-offset="${offset}">
          <div class="v2-media-thumb">
            <img src="${item.thumb}" alt="${item.title}" loading="lazy" onerror="this.src='images/noimage.png'">
          </div>
          <h4 class="v2-media-title">
            <i class="${item.icon || 'fa-solid fa-play'}"></i>
            ${item.title}
          </h4>
        </a>
      `;
    }).join('');

    track.classList.remove('is-anim-next', 'is-anim-prev');
    track.innerHTML = cardsHtml;
    if (direction === 'next' || direction === 'prev') {
      void track.offsetWidth;
      track.classList.add(direction === 'next' ? 'is-anim-next' : 'is-anim-prev');
    }

    track.querySelectorAll('.v2-media-card').forEach(card => {
      card.addEventListener('click', function (e) {
        const offset = parseInt(this.dataset.offset, 10);
        if (offset !== 0) {
          e.preventDefault();
          centerIdx = parseInt(this.dataset.idx, 10);
          renderWindow(offset > 0 ? 'next' : 'prev');
          restartAutoplay();
        }
      });
    });
  }

  function stepCircular(delta) {
    const len = activeList.length;
    if (len <= 1) return;
    centerIdx = ((centerIdx + delta) % len + len) % len;
    renderWindow(delta >= 0 ? 'next' : 'prev');
  }

  function stopAutoplay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function startAutoplay() {
    stopAutoplay();
    if (activeList.length > 1) {
      autoTimer = setInterval(() => {
        stepCircular(1);
      }, 3800);
    }
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  function renderFilter(type) {
    let list = VBSP_DATA.multimedia;
    if (type !== 'all') {
      list = list.filter(m => m.type === type);
    }
    activeList = list;
    const featIdx = list.findIndex(m => m.featured);
    centerIdx = featIdx !== -1 ? featIdx : Math.min(Math.floor(list.length / 2), Math.max(0, list.length - 1));
    renderWindow();
    restartAutoplay();
  }

  pills.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      pills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      renderFilter(this.dataset.type);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      stepCircular(-1);
      restartAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      stepCircular(1);
      restartAutoplay();
    });
  }

  if (section) {
    section.addEventListener('mouseenter', stopAutoplay);
    section.addEventListener('mouseleave', startAutoplay);
  }

  // Touch swipe support
  const viewport = track.parentElement;
  if (viewport) {
    let touchX = 0;
    viewport.addEventListener('touchstart', function (e) {
      if (e.touches && e.touches.length) {
        touchX = e.touches[0].clientX;
        stopAutoplay();
      }
    }, { passive: true });
    viewport.addEventListener('touchend', function (e) {
      if (e.changedTouches && e.changedTouches.length) {
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 36) {
          stepCircular(dx < 0 ? 1 : -1);
        }
        startAutoplay();
      }
    }, { passive: true });
  }

  window.addEventListener('resize', function () {
    const nextSlots = getVisibleSlots();
    if (nextSlots !== lastVisibleCount) {
      lastVisibleCount = nextSlots;
      renderWindow();
    }
  });

  renderFilter('all');
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
