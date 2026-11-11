/* ==========================================================================
   VBSP - MAIN INTERACTIVE LOGIC
   Handles sliders, tabs, diverse news filtering, interactive calculators,
   branch lookups, and modal popups.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  initClock();
  initHeroSlider();
  initHeroBgSlider();
  initSliderHome();
  initServiceTabs();
  initDiverseNewsTabs();
  initMultimediaSlider();
  initSteeringDocsHome();
  initWebsiteLinks();
  initBranchLocator();
  initSavingsCalculator();
  initModals();
  initMobileNav();
  initAwardsShowcaseSlider();
  initFlipbookReader();
});

/* --- 1. REAL-TIME CLOCK --- */
function initClock() {
  const clockEl = document.getElementById('liveClock');
  if (!clockEl) return;

  const daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

  function update() {
    const now = new Date();
    const dayName = daysOfWeek[now.getDay()];
    const date = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');

    clockEl.innerHTML = `<i class="fa-regular fa-clock"></i> Hà Nội: ${dayName}, ${date}/${month}/${year} - ${hours}:${mins}`;
  }

  update();
  setInterval(update, 30000);
}

/* --- 2. HERO BACKGROUND SLIDER (MỜ ẢO CHUYỂN SANG ẢNH MỚI) --- */
function initHeroBgSlider() {
  const slider = document.getElementById('heroBgSlider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.hero-bg-slide');
  const dots = document.querySelectorAll('#heroBgDots .hero-bg-dot');
  const prevBtn = document.getElementById('heroBgPrev');
  const nextBtn = document.getElementById('heroBgNext');
  if (!slides.length) return;

  let currentIdx = 0;
  let timer = null;

  function showSlide(idx) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === idx);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
    currentIdx = idx;
  }

  function nextSlide() {
    let next = (currentIdx + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentIdx - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', function () {
      const idx = parseInt(this.getAttribute('data-slide') || 0);
      showSlide(idx);
      startAutoplay();
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoplay();
    });
  }

  const section = document.getElementById('heroBgSection');
  if (section) {
    section.addEventListener('mouseenter', stopAutoplay);
    section.addEventListener('mouseleave', startAutoplay);
  }

  showSlide(0);
  startAutoplay();
}

/* --- 2. HERO SLIDER --- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-carousel .slide-item');
  const dots = document.querySelectorAll('.carousel-dots .carousel-dot');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  if (!slides.length) return;

  let currentIdx = 0;
  let timer = null;

  function showSlide(idx) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === idx);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
    currentIdx = idx;
  }

  function nextSlide() {
    let next = (currentIdx + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentIdx - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoplay(); });

  dots.forEach(dot => {
    dot.addEventListener('click', function () {
      const idx = parseInt(this.getAttribute('data-index') || 0);
      showSlide(idx);
      startAutoplay();
    });
  });

  const carousel = document.querySelector('.hero-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
  }

  startAutoplay();
}

/* --- 2.5. SỰ KIỆN - HÌNH ẢNH SLIDER HOME --- */
function initSliderHome() {
  const wrapper = document.getElementById('slider-home');
  const prevBtn = document.getElementById('sliderHomePrev');
  const nextBtn = document.getElementById('sliderHomeNext');
  const container = document.getElementById('sliderHomeContainer');

  if (!wrapper || !prevBtn || !nextBtn) return;

  const slides = wrapper.querySelectorAll('.swiper-slide');
  if (!slides.length) return;

  let currentIdx = 0;
  let autoplayTimer = null;

  function getVisibleCount() {
    const w = window.innerWidth;
    if (w < 576) return 1;
    if (w < 860) return 2;
    if (w < 1200) return 3;
    return 4;
  }

  function getMaxIndex() {
    const visible = getVisibleCount();
    return Math.max(0, slides.length - visible);
  }

  function updateSlide() {
    const maxIdx = getMaxIndex();
    if (currentIdx > maxIdx) currentIdx = maxIdx;
    if (currentIdx < 0) currentIdx = 0;

    const firstSlide = slides[0];
    if (!firstSlide) return;
    const slideWidth = firstSlide.getBoundingClientRect().width + 20; // width + gap
    wrapper.style.transform = `translate3d(-${currentIdx * slideWidth}px, 0px, 0px)`;

    // Update active classes
    slides.forEach((slide, i) => {
      slide.classList.toggle('swiper-slide-active', i === currentIdx);
      slide.classList.toggle('swiper-slide-next', i === currentIdx + 1);
    });
  }

  function nextSlide() {
    const maxIdx = getMaxIndex();
    if (currentIdx >= maxIdx) {
      currentIdx = 0;
    } else {
      currentIdx++;
    }
    updateSlide();
  }

  function prevSlide() {
    const maxIdx = getMaxIndex();
    if (currentIdx <= 0) {
      currentIdx = maxIdx;
    } else {
      currentIdx--;
    }
    updateSlide();
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    startAutoplay();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    startAutoplay();
  });

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, 4500);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  if (container) {
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);

    // Touch swipe support for mobile
    let startX = 0;
    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      stopAutoplay();
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 40) {
        nextSlide();
      } else if (endX - startX > 40) {
        prevSlide();
      }
      startAutoplay();
    }, { passive: true });
  }

  window.addEventListener('resize', updateSlide);

  startAutoplay();
  updateSlide();
}

/* --- 3. PRODUCTS & SERVICES TABS --- */
function initServiceTabs() {
  const tabBtns = document.querySelectorAll('.service-tab-btn');
  const tabPanels = document.querySelectorAll('.service-tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const target = this.getAttribute('data-target');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      this.classList.add('active');
      const activePanel = document.getElementById(target);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}

/* --- 4. DIVERSE NEWS TABS (MENU CHI TIẾT BÊN TRÊN, TIN TỨC Ở DƯỚI) --- */
function initDiverseNewsTabs() {
  const tabBtns = document.querySelectorAll('.news-cat-tab-btn');
  const leadMedia = document.getElementById('leadNewsMedia');
  const leadBadge = document.getElementById('leadNewsBadge');
  const leadTitle = document.getElementById('leadNewsTitle');
  const leadDesc = document.getElementById('leadNewsDesc');
  const leadDate = document.getElementById('leadNewsDate');
  const leadViews = document.getElementById('leadNewsViews');
  const leadLink = document.getElementById('leadNewsLink');
  const subNewsContainer = document.getElementById('subNewsContainer');
  const bottomGrid = document.getElementById('newsBottomGrid');

  if (!tabBtns.length) return;

  function renderCategory(catId) {
    let filtered = [];
    if (catId === 'noi-bat' && VBSP_DATA.news_noi_bat) {
      filtered = VBSP_DATA.news_noi_bat;
    } else if (catId === 'moi-nhat' && VBSP_DATA.news_moi_cap_nhat) {
      filtered = VBSP_DATA.news_moi_cap_nhat;
    } else if ((catId === 'dang' || catId === 'cong-tac-dang') && VBSP_DATA.news_dang_uy) {
      filtered = VBSP_DATA.news_dang_uy;
    } else if ((catId === 'congdoan' || catId === 'cong-doan') && VBSP_DATA.news_cong_doan) {
      filtered = VBSP_DATA.news_cong_doan;
    } else if ((catId === 'doan' || catId === 'doan-thanh-nien') && VBSP_DATA.news_doan_thanh_nien) {
      filtered = VBSP_DATA.news_doan_thanh_nien.map(d => ({
        id: d.id,
        title: d.title,
        summary: d.brief,
        date: d.time_tag,
        badge: d.badge,
        image: d.image || 'https://vbsp.org.vn/wp-content/uploads/2026/10/4a-394x208.jpg',
        views: d.views,
        link: d.link
      }));
    } else if (catId === 'hoat-dong' && VBSP_DATA.news_hoat_dong) {
      filtered = VBSP_DATA.news_hoat_dong;
    } else if (catId !== 'all') {
      filtered = (VBSP_DATA.articles || []).filter(a => a.category === catId);
      if (!filtered.length) filtered = VBSP_DATA.news_hoat_dong || VBSP_DATA.articles || [];
    } else {
      // 'all': combine noi-bat, hoat-dong, dang, congdoan, doan
      filtered = (VBSP_DATA.news_hoat_dong || [])
        .concat(VBSP_DATA.news_noi_bat || [])
        .concat(VBSP_DATA.news_dang_uy || [])
        .concat(VBSP_DATA.news_cong_doan || []);
    }

    const lead = filtered[0];
    const subList = filtered.slice(1, 5);
    const bottomList = filtered.slice(5, 11);

    // Fade animation on container
    const layout = document.querySelector('.news-layout-wrapper');
    if (layout) {
      layout.style.opacity = '0.3';
      setTimeout(() => {
        // Update Lead story
        if (lead && leadTitle) {
          if (leadBadge) leadBadge.style.display = 'none';
          leadTitle.innerHTML = `<a href="${lead.link || 'chi-tiet-tin-tuc.html?id=' + lead.id}">${lead.title}</a>`;
          if (leadDesc) leadDesc.textContent = lead.summary;
          if (leadDate) leadDate.textContent = lead.date || 'Tháng 10/2026';
          if (leadViews) leadViews.textContent = (lead.views || 2500).toLocaleString('vi-VN');
          if (leadMedia) {
            leadMedia.innerHTML = `<img src="${lead.image}" alt="${lead.title}" class="lead-story-img" onerror="this.src='https://vbsp.org.vn/wp-content/themes/vbsp/images/home1.png'">`;
          }
          if (leadLink) leadLink.href = lead.link || `chi-tiet-tin-tuc.html?id=${lead.id}`;
        }

        // Update Sub-news list
        if (subNewsContainer) {
          subNewsContainer.innerHTML = subList.map(item => `
            <div class="sub-news-item">
              <img src="${item.image}" alt="${item.title}" class="sub-news-thumb" onerror="this.src='https://vbsp.org.vn/wp-content/themes/vbsp/images/home1.png'">
              <div class="sub-news-content">
                <h4 class="sub-news-title">
                  <a href="${item.link || 'chi-tiet-tin-tuc.html?id=' + item.id}">${item.title}</a>
                </h4>
                <div class="sub-news-meta">
                  <span><i class="fa-regular fa-calendar"></i> ${item.date || 'Tháng 10/2026'}</span>
                  <span><i class="fa-regular fa-eye"></i> ${(item.views || 1800).toLocaleString('vi-VN')}</span>
                </div>
              </div>
            </div>
          `).join('');
        }

        // Update Bottom Grid
        if (bottomGrid && bottomList.length) {
          bottomGrid.innerHTML = bottomList.map(item => `
            <div class="news-card-simple">
              <div class="news-card-simple-thumb">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='https://vbsp.org.vn/wp-content/themes/vbsp/images/home1.png'">
              </div>
              <div class="news-card-simple-body">
                <h4 class="news-card-simple-title">
                  <a href="${item.link || 'chi-tiet-tin-tuc.html?id=' + item.id}">${item.title}</a>
                </h4>
                <div style="font-size: 0.78rem; color: #94a3b8;"><i class="fa-regular fa-calendar"></i> ${item.date || 'Tháng 10/2026'}</div>
              </div>
            </div>
          `).join('');
        }

        layout.style.opacity = '1';
      }, 150);
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const catId = this.getAttribute('data-category');
      tabBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderCategory(catId);
    });
  });

  // Check URL param ?cat=...
  const urlParams = new URLSearchParams(window.location.search);
  const initialCat = urlParams.get('cat');
  if (initialCat) {
    const targetBtn = document.querySelector(`.news-cat-tab-btn[data-category="${initialCat}"]`);
    if (targetBtn) {
      tabBtns.forEach(b => b.classList.remove('active'));
      targetBtn.classList.add('active');
      renderCategory(initialCat);
    }
  } else {
    const activeBtn = document.querySelector('.news-cat-tab-btn.active');
    if (activeBtn) {
      const activeCat = activeBtn.getAttribute('data-category');
      if (activeCat && activeCat !== 'all') {
        renderCategory(activeCat);
      }
    }
  }
}

/* Helper: Get offices for a province */
function getOfficesForProvince(pId) {
  if (VBSP_DATA.locations.offices && VBSP_DATA.locations.offices[pId]) {
    return VBSP_DATA.locations.offices[pId];
  }
  const prov = VBSP_DATA.locations.provinces.find(p => p.id === pId);
  const provName = prov ? prov.name : 'Địa phương';
  return [
    { id: `${pId.toLowerCase()}-hs`, name: `Hội sở Chi nhánh ${provName}`, address: `Số 01 Đường Trung tâm, ${provName}`, phone: '1900 638 586', schedule: 'Ngày 10 và 25 hàng tháng' },
    { id: `${pId.toLowerCase()}-pgd1`, name: `Phòng giao dịch Trung tâm`, address: `Khu vực Trung tâm thị xã/thành phố, ${provName}`, phone: '1900 638 586', schedule: 'Ngày 12 hàng tháng tại các phường/xã' },
    { id: `${pId.toLowerCase()}-pgd2`, name: `Phòng giao dịch Khu vực 1`, address: `Khu Hành chính số 1, ${provName}`, phone: '1900 638 586', schedule: 'Ngày 16 hàng tháng tại UBND các xã' },
    { id: `${pId.toLowerCase()}-pgd3`, name: `Phòng giao dịch Khu vực 2`, address: `Khu Hành chính số 2, ${provName}`, phone: '1900 638 586', schedule: 'Ngày 20 hàng tháng tại UBND các xã' },
    { id: `${pId.toLowerCase()}-pgd4`, name: `Phòng giao dịch Khu vực 3`, address: `Khu Hành chính số 3, ${provName}`, phone: '1900 638 586', schedule: 'Ngày 24 hàng tháng tại UBND các xã' }
  ];
}

/* --- 5. BRANCH & TRANSACTION POINT LOCATOR (MÔ HÌNH 2 CẤP: 34 TỈNH/THÀNH -> PHÒNG GIAO DỊCH) --- */
function initBranchLocator() {
  // A. HOMEPAGE QUICK LOOKUP (3-Card Section)
  const homeProv = document.getElementById('homeProvinceSelect');
  const homeOffice = document.getElementById('homeOfficeSelect');
  const homeBox = document.getElementById('homeBranchInfoBox');
  const homeLink = document.getElementById('homeBranchDetailLink');

  if (homeProv && homeOffice) {
    // Populate 34 provinces
    VBSP_DATA.locations.provinces.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.name;
      homeProv.appendChild(opt);
    });

    homeProv.addEventListener('change', function () {
      const pId = this.value;
      if (pId) {
        const offices = getOfficesForProvince(pId);
        homeOffice.innerHTML = '<option value="">- Tất cả -</option>';
        offices.forEach(o => {
          const opt = document.createElement('option');
          opt.value = o.id;
          opt.textContent = o.name;
          homeOffice.appendChild(opt);
        });
        homeOffice.disabled = false;

        const prov = VBSP_DATA.locations.provinces.find(p => p.id === pId);
        const pName = prov ? prov.name : '';
        if (homeBox) {
          homeBox.style.display = 'block';
          homeBox.innerHTML = `
            <div style="font-weight: 700; color: #009640; margin-bottom: 2px;">
              <i class="fa-solid fa-location-dot"></i> Chi nhánh ${pName} (${offices.length} Phòng giao dịch)
            </div>
            <div style="color: #334155;">
              • <strong>Phiên giao dịch cố định tại xã:</strong> Ngày 10 - 25 hàng tháng.<br>
              • <strong>Điểm giao dịch:</strong> Tại Hội trường UBND 100% các xã/phường trên địa bàn.
            </div>
          `;
        }
        if (homeLink) homeLink.href = `tra-cuu-diem-giao-dich.html?province=${pId}`;
      } else {
        homeOffice.innerHTML = '<option value="">- Tất cả -</option>';
        homeOffice.disabled = true;
        if (homeBox) homeBox.style.display = 'none';
        if (homeLink) homeLink.href = 'tra-cuu-diem-giao-dich.html';
      }
    });

    homeOffice.addEventListener('change', function () {
      const pId = homeProv.value;
      const oId = this.value;
      if (pId) {
        const offices = getOfficesForProvince(pId);
        const selectedOffice = offices.find(o => o.id === oId) || offices[0];
        if (homeBox && selectedOffice) {
          homeBox.style.display = 'block';
          homeBox.innerHTML = `
            <div style="font-weight: 700; color: #009640; margin-bottom: 2px;">
              <i class="fa-solid fa-building-columns"></i> ${selectedOffice.name}
            </div>
            <div style="color: #334155;">
              • <strong>Địa chỉ:</strong> ${selectedOffice.address}<br>
              • <strong>Điện thoại:</strong> ${selectedOffice.phone} | <strong>Lịch xã:</strong> <span style="color:#b91c1c; font-weight:600;">${selectedOffice.schedule}</span>
            </div>
          `;
        }
        if (homeLink) homeLink.href = `tra-cuu-diem-giao-dich.html?province=${pId}&office=${oId}`;
      }
    });
  }

  // B. DEDICATED PAGE LOOKUP (tra-cuu-diem-giao-dich.html)
  const provSelect = document.getElementById('provinceSelect');
  const distSelect = document.getElementById('districtSelect');
  const resultBox = document.getElementById('branchResultBox');

  if (provSelect && distSelect) {
    // Populate 34 provinces
    VBSP_DATA.locations.provinces.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.name;
      provSelect.appendChild(opt);
    });

    provSelect.addEventListener('change', function () {
      const pId = this.value;
      if (pId) {
        const offices = getOfficesForProvince(pId);
        distSelect.innerHTML = '<option value="">-- Tất cả --</option>';
        offices.forEach(o => {
          const opt = document.createElement('option');
          opt.value = o.id;
          opt.textContent = o.name;
          distSelect.appendChild(opt);
        });
        distSelect.disabled = false;
        showProvinceSchedule(pId, offices);
      } else {
        distSelect.innerHTML = '<option value="">-- Tất cả --</option>';
        distSelect.disabled = false;
        resetScheduleBox();
      }
    });

    distSelect.addEventListener('change', function () {
      const pId = provSelect.value;
      const oId = this.value;
      if (pId && oId) {
        const offices = getOfficesForProvince(pId);
        const o = offices.find(item => item.id === oId);
        if (o) showOfficeSchedule(pId, o);
      } else if (pId) {
        const offices = getOfficesForProvince(pId);
        showProvinceSchedule(pId, offices);
      }
    });
  }

  function resetScheduleBox() {
    if (!resultBox) return;
    resultBox.innerHTML = `
      <div style="display: flex; gap: 16px; align-items: flex-start;">
        <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--vbsp-green-light); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <i class="fa-solid fa-calendar-days" style="color: var(--vbsp-green); font-size: 1.5rem;"></i>
        </div>
        <div style="flex: 1;">
          <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--vbsp-green-dark); margin-bottom: 8px;">
            Lịch trực và phiên giao dịch cố định tại xã
          </h3>
          <p style="color: #334155; line-height: 1.6; margin-bottom: 12px; font-size: 0.92rem;">
            Vui lòng chọn <strong>Tỉnh / Thành phố</strong> và <strong>Phòng giao dịch</strong> bên trên để xem chi tiết địa chỉ trụ sở, số điện thoại hotline, ngày giao dịch cố định trong tháng và danh sách cán bộ tín dụng phụ trách địa bàn.
          </p>
        </div>
      </div>
    `;
  }

  function showProvinceSchedule(pId, offices) {
    if (!resultBox) return;
    const prov = VBSP_DATA.locations.provinces.find(p => p.id === pId);
    const pName = prov ? prov.name : '';
    resultBox.innerHTML = `
      <div style="flex: 1;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 2px solid var(--vbsp-green-light);">
          <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--vbsp-green-dark); margin: 0;">
            <i class="fa-solid fa-map-location-dot" style="color: var(--vbsp-green); margin-right: 8px;"></i>
            Mạng lưới NHCSXH Chi nhánh ${pName}
          </h3>
          <span class="badge badge-green" style="font-size: 0.85rem;"><i class="fa-solid fa-check"></i> ${offices.length} Phòng giao dịch trực thuộc</span>
        </div>
        <p style="color: #334155; font-size: 0.92rem; line-height: 1.6; margin-bottom: 16px;">
          Toàn bộ các xã, phường, thị trấn trên địa bàn <strong>${pName}</strong> đều có Điểm giao dịch cố định được tổ chức định kỳ hàng tháng tại Hội trường UBND cấp xã, do cán bộ của các Phòng giao dịch dưới đây trực tiếp phụ trách:
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px;">
          ${offices.map(o => `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; border-left: 3px solid var(--vbsp-green);">
              <div style="font-weight: 700; color: var(--vbsp-green-dark); font-size: 0.95rem; margin-bottom: 4px;">
                <i class="fa-solid fa-building-columns" style="color: var(--vbsp-green); margin-right: 6px;"></i> ${o.name}
              </div>
              <div style="font-size: 0.84rem; color: #475569; line-height: 1.5;">
                <div><i class="fa-solid fa-location-dot" style="width: 16px; color: #94a3b8;"></i> ${o.address}</div>
                <div><i class="fa-solid fa-phone" style="width: 16px; color: #94a3b8;"></i> Hotline: <strong>${o.phone}</strong></div>
                <div style="color: var(--vbsp-red); font-weight: 600; margin-top: 4px;"><i class="fa-solid fa-calendar-check" style="width: 16px;"></i> ${o.schedule}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function showOfficeSchedule(pId, office) {
    if (!resultBox) return;
    const prov = VBSP_DATA.locations.provinces.find(p => p.id === pId);
    const pName = prov ? prov.name : '';
    const s = VBSP_DATA.locations.schedules.default;

    resultBox.innerHTML = `
      <div style="flex: 1;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 2px solid var(--vbsp-green-light);">
          <div>
            <span class="badge badge-green" style="margin-bottom: 4px;">${pName}</span>
            <h3 style="font-size: 1.35rem; font-weight: 700; color: var(--vbsp-green-dark); margin: 0;">
              <i class="fa-solid fa-building-columns" style="color: var(--vbsp-green); margin-right: 8px;"></i>
              ${office.name}
            </h3>
          </div>
          <a href="tel:${office.phone.replace(/[^0-9]/g, '')}" class="btn btn-sm btn-outline-primary">
            <i class="fa-solid fa-phone"></i> Gọi hotline: ${office.phone}
          </a>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
          <!-- Thông tin trụ sở -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px;">
            <h4 style="font-size: 1rem; font-weight: 700; color: #1e293b; margin-bottom: 10px;">
              <i class="fa-solid fa-circle-info" style="color: var(--vbsp-green);"></i> Thông tin Phòng giao dịch
            </h4>
            <div style="font-size: 0.9rem; color: #475569; line-height: 1.6;">
              <p style="margin-bottom: 6px;">• <strong>Địa chỉ trụ sở:</strong> ${office.address}</p>
              <p style="margin-bottom: 6px;">• <strong>Điện thoại liên hệ:</strong> ${office.phone}</p>
              <p style="margin-bottom: 6px;">• <strong>Thời gian làm việc tại quầy:</strong> Thứ 2 - Thứ 6 (07h30 - 17h00)</p>
              <p style="margin-bottom: 0;">• <strong>Đơn vị quản lý:</strong> Chi nhánh NHCSXH ${pName}</p>
            </div>
          </div>

          <!-- Thông tin phiên giao dịch xã -->
          <div style="background: #f0fdf4; border: 1.5px solid var(--vbsp-green-border); border-radius: 8px; padding: 18px;">
            <h4 style="font-size: 1rem; font-weight: 700; color: var(--vbsp-green-dark); margin-bottom: 10px;">
              <i class="fa-solid fa-calendar-check" style="color: var(--vbsp-green);"></i> Phiên giao dịch cố định tại xã
            </h4>
            <div style="font-size: 0.9rem; color: #166534; line-height: 1.6;">
              <p style="margin-bottom: 6px;">• <strong>Địa điểm mở phiên:</strong> Hội trường UBND các xã, phường, thị trấn trực thuộc</p>
              <p style="margin-bottom: 6px;">• <strong>Ngày mở phiên:</strong> <span style="color: #b91c1c; font-weight: 700; font-size: 0.98rem;">${office.schedule}</span></p>
              <p style="margin-bottom: 6px;">• <strong>Khung giờ phục vụ:</strong> Sáng: 07h30 - 11h30 | Chiều: 13h30 - 17h00</p>
              <p style="margin-bottom: 0;">• <strong>Cán bộ phụ trách:</strong> ${s.officer}</p>
            </div>
          </div>
        </div>

        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px 18px; font-size: 0.88rem; color: #1e40af;">
          <strong><i class="fa-solid fa-handshake"></i> Tổ chức chính trị - xã hội nhận ủy thác:</strong> Hội Liên hiệp Phụ nữ, Hội Nông dân, Đoàn Thanh niên, Hội Cựu chiến binh phối hợp giám sát và bình xét vốn vay công khai tại thôn bản.
        </div>
      </div>
    `;
  }
}

/* --- MODAL POPUP CHO TIN TỨC (XEM CHI TIẾT TRỰC TIẾP) --- */
window.handleNewsClick = function(event, articleId) {
  // If user ctrl+clicks or wants new tab, allow default
  if (event.ctrlKey || event.metaKey || event.shiftKey) return;
  event.preventDefault();

  let item = null;
  if (VBSP_DATA.articles) {
    item = VBSP_DATA.articles.find(a => a.id === articleId || a.id === String(articleId));
  }
  if (!item && VBSP_DATA.news_noi_bat) {
    item = VBSP_DATA.news_noi_bat.find(a => a.id === articleId || a.id === `nb-${articleId}`);
  }
  if (!item && VBSP_DATA.news_hoat_dong) {
    item = VBSP_DATA.news_hoat_dong.find(a => a.id === articleId || a.id === `hd-${articleId}`);
  }
  if (!item && VBSP_DATA.news_dang_uy) {
    item = VBSP_DATA.news_dang_uy.find(a => a.id === articleId || a.id === `dang-${articleId}`);
  }
  if (!item && VBSP_DATA.news_cong_doan) {
    item = VBSP_DATA.news_cong_doan.find(a => a.id === articleId || a.id === `cd-${articleId}`);
  }
  if (!item && VBSP_DATA.news_doan_thanh_nien) {
    item = VBSP_DATA.news_doan_thanh_nien.find(a => a.id === articleId || a.id === `dtn-${articleId}`);
  }

  if (!item) {
    window.location.href = `chi-tiet-tin-tuc.html?id=${articleId}`;
    return;
  }

  const modal = document.getElementById('quickViewModal');
  const title = document.getElementById('modalServiceTitle');
  const content = document.getElementById('modalServiceContent');

  if (modal && title && content) {
    title.textContent = item.badge ? `[${item.badge}] Chi tiết tin tức` : 'Chi tiết tin tức NHCSXH';
    content.innerHTML = `
      <div style="font-family: inherit;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <span class="badge badge-green">${item.badge || 'Tin tức VBSP'}</span>
          <div style="font-size: 0.82rem; color: #64748b; display: flex; gap: 14px;">
            <span><i class="fa-regular fa-calendar"></i> ${item.date || item.time_tag || '18/10/2026'}</span>
            <span><i class="fa-regular fa-eye"></i> ${item.views || '3,450'} lượt xem</span>
          </div>
        </div>
        <h2 style="font-size: 1.35rem; font-weight: 700; color: var(--vbsp-green-dark); line-height: 1.4; margin-bottom: 14px;">
          ${item.title}
        </h2>
        ${item.image ? `
          <div style="border-radius: 8px; overflow: hidden; margin-bottom: 16px;">
            <img src="${item.image}" alt="${item.title}" style="width: 100%; max-height: 320px; object-fit: cover;">
          </div>
        ` : ''}
        <div style="font-size: 0.98rem; font-weight: 600; color: #334155; line-height: 1.6; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
          ${item.summary || item.brief || ''}
        </div>
        <div style="font-size: 0.92rem; color: #1e293b; line-height: 1.7; margin-bottom: 20px;">
          ${item.body || `
            <p style="margin-bottom: 12px;">Ngân hàng Chính sách xã hội (NHCSXH) tiếp tục khẳng định vai trò là công cụ tài chính sắc bén, nhân văn của Đảng và Nhà nước trong công cuộc giảm nghèo bền vững, xây dựng nông thôn mới và đảm bảo an sinh xã hội trên khắp mọi miền Tổ quốc.</p>
            <p style="margin-bottom: 12px;">Các chương trình tín dụng chính sách được thực hiện bình xét công khai, dân chủ từ cơ sở thôn, bản, tổ dân phố dưới sự giám sát chặt chẽ của các tổ chức chính trị - xã hội nhận ủy thác và chính quyền địa phương, đưa nguồn vốn ưu đãi đến tận tay người nghèo một cách nhanh chóng, minh bạch và an toàn.</p>
          `}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 14px;">
          <a href="chi-tiet-tin-tuc.html?id=${item.id}" class="btn btn-sm btn-outline-primary">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Mở trang bài viết đầy đủ
          </a>
          <button class="btn btn-sm" onclick="document.getElementById('quickViewModal').classList.remove('active')" style="background: #f1f5f9; color: #334155;">
            Đóng
          </button>
        </div>
      </div>
    `;
    modal.classList.add('active');
  } else {
    window.location.href = `chi-tiet-tin-tuc.html?id=${articleId}`;
  }
};

/* --- 6. SAVINGS INTEREST CALCULATOR --- */
function initSavingsCalculator() {
  const amountInput = document.getElementById('calcAmount');
  const termSelect = document.getElementById('calcTerm');
  const resultInterest = document.getElementById('calcResultInterest');
  const resultTotal = document.getElementById('calcResultTotal');

  if (!amountInput || !termSelect) return;

  function calculate() {
    const amount = parseFloat(amountInput.value.replace(/[^0-9]/g, '')) || 0;
    const termOpt = termSelect.options[termSelect.selectedIndex];
    const rate = parseFloat(termOpt.getAttribute('data-rate') || 0); // e.g. 5.2%
    const months = parseInt(termOpt.value || 0);

    let interest = 0;
    if (months === 0) {
      // Unfixed term (0.2%/year)
      interest = Math.round((amount * 0.002 * 30) / 365);
    } else {
      interest = Math.round((amount * (rate / 100) * months) / 12);
    }

    const total = amount + interest;

    if (resultInterest) resultInterest.textContent = interest.toLocaleString('vi-VN') + ' VND';
    if (resultTotal) resultTotal.textContent = total.toLocaleString('vi-VN') + ' VND';
  }

  amountInput.addEventListener('input', function () {
    // format as number with commas
    let val = this.value.replace(/[^0-9]/g, '');
    if (val) {
      this.value = parseInt(val, 10).toLocaleString('vi-VN');
    }
    calculate();
  });

  termSelect.addEventListener('change', calculate);
  calculate();
}

/* --- 7. MODALS --- */
function initModals() {
  const modalBackdrop = document.getElementById('quickViewModal');
  const modalTitle = document.getElementById('modalServiceTitle');
  const modalContent = document.getElementById('modalServiceContent');
  const modalCloseBtns = document.querySelectorAll('[data-close-modal]');

  // Quick view triggers
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-service-id]');
    if (btn) {
      e.preventDefault();
      const serviceId = btn.getAttribute('data-service-id');
      openServiceModal(serviceId);
    }
  });

  function openServiceModal(id) {
    if (!modalBackdrop) return;

    let serviceItem = null;
    for (const group of Object.values(VBSP_DATA.services)) {
      const match = group.items.find(i => i.id === id);
      if (match) {
        serviceItem = match;
        break;
      }
    }

    if (!serviceItem) return;

    modalTitle.innerHTML = `<i class="${serviceItem.icon}" style="color: var(--vbsp-green); margin-right: 8px;"></i> ${serviceItem.title}`;
    
    let html = `
      <div style="background: var(--vbsp-green-light); border-left: 4px solid var(--vbsp-green); padding: 12px 16px; border-radius: 4px; margin-bottom: 20px;">
        <h4 style="color: var(--vbsp-green-dark); margin-bottom: 4px; font-weight: 700;">Tóm tắt sản phẩm</h4>
        <p style="color: #334155; margin: 0;">${serviceItem.short_desc}</p>
      </div>

      <div style="margin-bottom: 18px;">
        <h4 style="font-weight: 700; color: var(--text-heading); margin-bottom: 6px;">
          <i class="fa-solid fa-users" style="color: var(--vbsp-green);"></i> Đối tượng áp dụng
        </h4>
        <p style="color: #475569;">${serviceItem.target_customers || 'Khách hàng cá nhân và tổ chức theo quy định.'}</p>
      </div>

      <div style="margin-bottom: 18px;">
        <h4 style="font-weight: 700; color: var(--text-heading); margin-bottom: 6px;">
          <i class="fa-solid fa-star" style="color: var(--vbsp-gold);"></i> Lợi ích vượt trội
        </h4>
        <ul style="list-style: none; padding: 0;">
          ${(serviceItem.key_benefits || []).map(b => `<li style="padding: 4px 0; color: #334155; display: flex; align-items: flex-start; gap: 8px;"><i class="fa-solid fa-check" style="color: var(--vbsp-green); margin-top: 5px;"></i> <span>${b}</span></li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 18px;">
        <h4 style="font-weight: 700; color: var(--text-heading); margin-bottom: 6px;">
          <i class="fa-solid fa-clipboard-check" style="color: var(--vbsp-green);"></i> Quy trình & Hồ sơ thủ tục
        </h4>
        <ul style="list-style: none; padding: 0;">
          ${(serviceItem.procedures || []).map(p => `<li style="padding: 4px 0; color: #334155; display: flex; align-items: flex-start; gap: 8px;"><i class="fa-solid fa-arrow-right" style="color: var(--vbsp-green); margin-top: 5px;"></i> <span>${p}</span></li>`).join('')}
        </ul>
      </div>

      ${serviceItem.fees ? `
      <div style="margin-bottom: 18px;">
        <h4 style="font-weight: 700; color: var(--text-heading); margin-bottom: 6px;">
          <i class="fa-solid fa-coins" style="color: var(--vbsp-gold);"></i> Biểu phí & Lãi suất
        </h4>
        <p style="color: #475569;">${serviceItem.fees}</p>
      </div>` : ''}

      ${serviceItem.interest_rate ? `
      <div style="margin-bottom: 18px;">
        <h4 style="font-weight: 700; color: var(--text-heading); margin-bottom: 6px;">
          <i class="fa-solid fa-percent" style="color: var(--vbsp-red);"></i> Lãi suất hiện hành
        </h4>
        <p style="color: var(--vbsp-red); font-weight: 600;">${serviceItem.interest_rate}</p>
      </div>` : ''}

      <div style="text-align: right; margin-top: 24px;">
        <a href="${serviceItem.link_detail}" class="btn btn-primary" style="display: inline-flex;">
          Xem trang chi tiết đầy đủ <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    `;

    modalContent.innerHTML = html;
    modalBackdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalBackdrop) modalBackdrop.classList.remove('show');
    document.body.style.overflow = '';
  }

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
}

/* --- 8. MOBILE NAV (STANDARD OFF-CANVAS DRAWER & SMART ACCORDION) --- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const closeBtn = document.querySelector('.mobile-drawer-close');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const navMenu = document.querySelector('.nav-menu');

  function setDrawerOpen(isOpen) {
    if (!navMenu) return;
    navMenu.classList.toggle('show', isOpen);
    if (backdrop) backdrop.classList.toggle('show', isOpen);
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('mobile-menu-open', isOpen);
  }

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function () {
      setDrawerOpen(!navMenu.classList.contains('show'));
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      setDrawerOpen(false);
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', function () {
      setDrawerOpen(false);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('show')) {
      setDrawerOpen(false);
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 992 && navMenu && navMenu.classList.contains('show')) {
      setDrawerOpen(false);
    }
  });

  // Submenu accordion on mobile (< 992px): first tap opens submenu, chevron toggles, second tap on label navigates
  const parentItems = document.querySelectorAll('.nav-item.has-children');
  parentItems.forEach(item => {
    const link = item.querySelector(':scope > .nav-link');
    if (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth < 992) {
          const clickedArrow = e.target.closest('.arrow-down');
          const href = (link.getAttribute('href') || '').trim();
          const isDummyHref = !href || href === '#' || href.startsWith('javascript:');

          if (clickedArrow || isDummyHref || !item.classList.contains('open')) {
            e.preventDefault();
            const willOpen = !item.classList.contains('open');
            parentItems.forEach(other => {
              if (other !== item) other.classList.remove('open');
            });
            item.classList.toggle('open', willOpen);
          }
        }
      });
    }
  });

  // Nested Sub-flyout accordion on mobile
  const flyoutItems = document.querySelectorAll('.dropdown-item.has-sub-flyout');
  flyoutItems.forEach(item => {
    const link = item.querySelector(':scope > .dropdown-link');
    if (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth < 992) {
          const clickedArrow = e.target.closest('.sub-flyout-arrow');
          const href = (link.getAttribute('href') || '').trim();
          const isDummyHref = !href || href === '#' || href.startsWith('javascript:');

          if (clickedArrow || isDummyHref || !item.classList.contains('open')) {
            e.preventDefault();
            item.classList.toggle('open');
          }
        }
      });
    }
  });

  // Close drawer when tapping hash links inside drawer
  if (navMenu) {
    navMenu.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function () {
        if (window.innerWidth < 992 && this.getAttribute('href') !== '#') {
          setDrawerOpen(false);
        }
      });
    });
  }
}

/* --- 9. MULTIMEDIA SECTION (THEO MẪU ẢNH 1) --- */
/* --- 9. MULTIMEDIA SECTION (THEO MẪU ẢNH 1: VIDEO CHÍNH Ở GIỮA PHÓNG ĐẠI, VỆ TINH MỜ ĐI TẠO CHIỀU SÂU) --- */
function initMultimediaSlider() {
  const track = document.getElementById('mediaTrack');
  const prevBtn = document.getElementById('mediaPrevBtn');
  const nextBtn = document.getElementById('mediaNextBtn');
  const pills = document.querySelectorAll('.media-pill-btn');

  if (!track) return;

  let currentType = 'all';
  let currentCenterIdx = 4; // Bắt đầu ở video tiêu điểm "Phim tài liệu VTV1"
  let currentItems = [];

  function updateCenterDepth() {
    const cards = track.querySelectorAll('.multimedia-card');
    cards.forEach((card, i) => {
      card.classList.remove('is-center', 'is-adjacent', 'is-distant');
      const dist = Math.abs(i - currentCenterIdx);
      if (dist === 0) {
        card.classList.add('is-center');
      } else if (dist === 1) {
        card.classList.add('is-adjacent');
      } else {
        card.classList.add('is-distant');
      }
    });
  }

  function updateTrackPosition() {
    const viewport = track.parentElement;
    if (!viewport) return;
    const viewportW = viewport.offsetWidth;
    const card = track.querySelector('.multimedia-card');
    const cardWidth = card ? card.offsetWidth : 248;
    const trackStyles = window.getComputedStyle(track);
    const gap = parseFloat(trackStyles.columnGap || trackStyles.gap) || 18;
    const step = cardWidth + gap;

    // Tọa độ đưa thẻ index currentCenterIdx vào đúng tâm giữa của viewport
    const centerOffset = (viewportW / 2) - (cardWidth / 2) - (currentCenterIdx * step);
    track.style.transform = `translateX(${centerOffset}px)`;
  }

  function updateCarousel() {
    updateCenterDepth();
    updateTrackPosition();
  }

  function renderCards(type) {
    currentType = type;
    let list = VBSP_DATA.multimedia || [];
    if (type !== 'all') {
      list = list.filter(m => m.type === type);
    }
    currentItems = list;

    // Tìm thẻ featured hoặc chọn thẻ giữa làm tâm
    const featIdx = list.findIndex(m => m.featured);
    if (featIdx !== -1) {
      currentCenterIdx = featIdx;
    } else {
      currentCenterIdx = Math.min(Math.floor(list.length / 2), list.length - 1);
    }
    if (currentCenterIdx < 0) currentCenterIdx = 0;

    track.innerHTML = list.map((item, idx) => {
      const detailUrl = `chi-tiet-bai-viet-multimedia.html?id=${item.id}`;
      return `
      <a href="${detailUrl}" class="multimedia-card" data-index="${idx}">
        <div class="multimedia-card-thumb">
          <img src="${item.thumb}" alt="${item.title}" loading="lazy">
          <div class="multimedia-card-play">
            <i class="${item.icon || 'fa-solid fa-play'}"></i>
          </div>
        </div>
        <div class="multimedia-card-info">
          <div class="multimedia-card-title">
            <span class="multimedia-card-icon-tag"><i class="${item.icon || 'fa-solid fa-play'}"></i></span>
            ${item.title}
          </div>
        </div>
      </a>
    `;
    }).join('');

    // Bắt sự kiện click: nếu là thẻ vệ tinh thì đưa vào giữa, nếu đã là thẻ giữa thì mở link
    track.querySelectorAll('.multimedia-card').forEach(card => {
      card.addEventListener('click', function (e) {
        const clickedIdx = parseInt(this.dataset.index, 10);
        if (clickedIdx !== currentCenterIdx) {
          e.preventDefault();
          currentCenterIdx = clickedIdx;
          updateCarousel();
        }
      });
    });

    updateCarousel();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      if (currentCenterIdx > 0) {
        currentCenterIdx--;
        updateCarousel();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      if (currentCenterIdx < currentItems.length - 1) {
        currentCenterIdx++;
        updateCarousel();
      }
    });
  }

  pills.forEach(pill => {
    // Nếu là thẻ button có data-type thì xử lý lọc; nếu là thẻ <a> chuyển trang thì để trình duyệt chuyển hướng tự nhiên
    if (pill.tagName === 'BUTTON' && pill.dataset.type) {
      pill.addEventListener('click', function () {
        pills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        renderCards(this.dataset.type);
      });
    }
  });

  // Hỗ trợ vuốt ngang (swipe) mượt mà trên thiết bị di động / cảm ứng
  const viewport = track.parentElement;
  if (viewport) {
    let touchStartX = 0;
    let touchStartY = 0;
    viewport.addEventListener('touchstart', function (e) {
      if (!e.touches || !e.touches.length) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    viewport.addEventListener('touchend', function (e) {
      if (!e.changedTouches || !e.changedTouches.length) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0 && currentCenterIdx < currentItems.length - 1) {
          currentCenterIdx++;
          updateCarousel();
        } else if (dx > 0 && currentCenterIdx > 0) {
          currentCenterIdx--;
          updateCarousel();
        }
      }
    }, { passive: true });
  }

  renderCards('all');

  window.addEventListener('resize', updateTrackPosition);
}

/* --- 10. VĂN BẢN CHỈ ĐẠO ĐIỀU HÀNH (TRANG CHỦ - THIẾT KẾ MỚI DẠNG KHUNG CUỘN SCROLLABLE) --- */
function initSteeringDocsHome() {
  const container = document.getElementById('steeringDocsList');
  const countBadge = document.getElementById('steeringDocCount');

  if (!container) return;

  const list = VBSP_DATA.steering_docs || [];
  if (countBadge) {
    countBadge.textContent = `${list.length} văn bản`;
  }

  if (!list.length) {
    container.innerHTML = `
      <div style="padding: 40px; text-align: center; color: #64748b;">
        <i class="fa-solid fa-folder-open" style="font-size: 2.2rem; margin-bottom: 12px; color: #cbd5e1; display: block;"></i>
        Chưa có văn bản chỉ đạo điều hành nào được cập nhật.
      </div>
    `;
    return;
  }

  const getAgencyIcon = (agencyId) => {
    switch (agencyId) {
      case 'dang': return '<i class="fa-solid fa-flag"></i>';
      case 'chinhphu': return '<i class="fa-solid fa-landmark"></i>';
      case 'hdqt': return '<i class="fa-solid fa-users-gear"></i>';
      case 'tgd': return '<i class="fa-solid fa-file-signature"></i>';
      case 'nhnn': return '<i class="fa-solid fa-building-columns"></i>';
      default: return '<i class="fa-solid fa-landmark"></i>';
    }
  };

  container.innerHTML = list.map(item => `
    <div class="steering-doc-row">
      <div class="doc-code-pill">
        <i class="fa-regular fa-file-lines"></i>
        <span>${item.code}</span>
      </div>
      <div class="doc-title-wrap">
        <a href="he-thong-van-ban.html" class="doc-title-link" title="${item.title}">
          ${item.title}
        </a>
      </div>
      <div class="doc-agency-wrap">
        <span class="agency-badge ${item.agency_id}">
          ${getAgencyIcon(item.agency_id)} ${item.agency_name}
        </span>
      </div>
      <div class="doc-date-wrap">
        <i class="fa-regular fa-calendar"></i> ${item.date}
      </div>
      <div class="doc-action-wrap">
        <a href="he-thong-van-ban.html" class="btn-doc-download-pill" title="Tải văn bản PDF (${item.file})">
          <i class="fa-solid fa-file-pdf"></i> PDF
        </a>
      </div>
    </div>
  `).join('');
}

/* --- 11. LIÊN KẾT WEBSITE (THEO MẪU ẢNH 3 - 3x3 LOGOS, CHI TIẾT BÊN PHẢI) --- */
const PARTNER_LOGOS_SVG = {
  'tap-chi-cong-san': `<svg viewBox="0 0 240 55" class="web-logo-svg"><g transform="translate(10, 8)"><polygon points="12,2 15,10 24,10 17,15 20,24 12,18 4,24 7,15 0,10 9,10" fill="#eab308"/><polygon points="28,4 30,10 36,10 31,14 33,20 28,16 23,20 25,14 20,10 26,10" fill="#eab308"/><text x="44" y="22" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#0284c7">Tạp chí</text><text x="44" y="42" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="900" fill="#0369a1">Cộng sản</text></g></svg>`,
  'ngan-hang-nha-nuoc': `<svg viewBox="0 0 240 55" class="web-logo-svg"><g transform="translate(90, 2)"><circle cx="26" cy="25" r="23" fill="none" stroke="#d97706" stroke-width="2.5"/><circle cx="26" cy="25" r="19" fill="#fef3c7"/><path d="M14 32h24v2H14zm2-8h20v2H16zm3-8h14v2H19zm4-4h6v2h-6z" fill="#b45309"/><text x="26" y="45" font-family="'Segoe UI', sans-serif" font-size="4" font-weight="bold" fill="#b45309" text-anchor="middle">STATE BANK OF VIETNAM</text></g></svg>`,
  'apraca': `<svg viewBox="0 0 240 55" class="web-logo-svg"><g transform="translate(90, 3)"><ellipse cx="26" cy="24" rx="20" ry="22" fill="#fdf2f8" stroke="#be185d" stroke-width="1.5"/><path d="M23 37c-4-8-2-16 4-22 4 8 2 16-4 22z" fill="#9d174d"/><path d="M26 37c2-6 7-12 11-15-4 5-8 10-11 15z" fill="#be185d"/><text x="26" y="13" font-family="'Segoe UI', sans-serif" font-size="6.5" font-weight="900" fill="#9d174d" text-anchor="middle" letter-spacing="1">APRACA</text></g></svg>`,
  'hoc-vien-ngan-hang': `<svg viewBox="0 0 240 55" class="web-logo-svg"><g transform="translate(10, 6)"><rect x="2" y="4" width="38" height="36" rx="4" fill="#1e3a8a"/><text x="21" y="22" font-family="'Segoe UI', sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">BAV</text><line x1="8" y1="26" x2="34" y2="26" stroke="#fbbf24" stroke-width="1.5"/><text x="48" y="20" font-family="'Segoe UI', sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">HỌC VIỆN</text><text x="48" y="34" font-family="'Segoe UI', sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">NGÂN HÀNG</text><text x="48" y="44" font-family="'Segoe UI', sans-serif" font-size="7" font-weight="600" fill="#64748b">BANKING ACADEMY OF VIETNAM</text></g></svg>`,
  'bao-phap-luat': `<svg viewBox="0 0 240 55" class="web-logo-svg"><g transform="translate(50, 6)"><path d="M20 28c-7-4-10-11-8-18 8 2 14 7 16 14-3 3-6 4-8 4z" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8"/><text x="70" y="27" font-family="'Times New Roman', serif" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">Pháp luật</text><text x="70" y="39" font-family="'Segoe UI', sans-serif" font-size="8" font-weight="bold" fill="#b91c1c" text-anchor="middle">VIỆT NAM</text></g></svg>`,
  'bao-dan-viet': `<svg viewBox="0 0 240 55" class="web-logo-svg"><g transform="translate(55, 6)"><rect x="0" y="2" width="130" height="38" rx="4" fill="#f1f5f9"/><circle cx="20" cy="21" r="10" fill="#16a34a"/><path d="M16 25c0-4 4-8 8-8 0 4-4 8-8 8z" fill="#ffffff"/><text x="38" y="27" font-family="'Segoe UI', sans-serif" font-size="17" font-weight="900" fill="#15803d">DÂN VIỆT</text><text x="38" y="36" font-family="'Segoe UI', sans-serif" font-size="6.5" font-weight="600" fill="#64748b">NÔNG THÔN NGÀY NAY</text></g></svg>`,
  'bao-nhan-dan': `<svg viewBox="0 0 240 55" class="web-logo-svg"><g transform="translate(55, 6)"><circle cx="20" cy="21" r="18" fill="#fef3c7" stroke="#d97706" stroke-width="1.2"/><polygon points="20,9 23,17 31,17 25,22 27,30 20,25 13,30 15,22 9,17 17,17" fill="#dc2626"/><text x="46" y="28" font-family="'Times New Roman', serif" font-size="22" font-weight="900" fill="#b91c1c">Nhân Dân</text></g></svg>`,
  'cong-thong-tin-chinh-phu': `<svg viewBox="0 0 240 55" class="web-logo-svg"><g transform="translate(55, 8)"><text x="18" y="26" font-family="'Segoe UI', sans-serif" font-size="24" font-weight="900" fill="#dc2626">V</text><text x="38" y="26" font-family="'Segoe UI', sans-serif" font-size="24" font-weight="900" fill="#0284c7">G</text><text x="62" y="26" font-family="'Segoe UI', sans-serif" font-size="24" font-weight="900" fill="#dc2626">P</text><text x="20" y="38" font-family="'Segoe UI', sans-serif" font-size="9" font-weight="700" fill="#0369a1">CHINHPHU.VN</text></g></svg>`,
  'bao-lao-dong': `<svg viewBox="0 0 240 55" class="web-logo-svg"><g transform="translate(30, 8)"><text x="10" y="32" font-family="'Segoe UI', sans-serif" font-size="26" font-weight="900" fill="#dc2626" letter-spacing="1">LAO ĐỘNG</text><polygon points="76,14 78,19 83,19 79,22 81,27 76,24 71,27 73,22 69,19 74,19" fill="#facc15"/></g></svg>`
};

function initWebsiteLinks() {
  const grid = document.getElementById('webLogosGrid');
  const titleEl = document.getElementById('partnerTitle');
  const descEl = document.getElementById('partnerDesc');
  const addressEl = document.getElementById('partnerAddress');
  const urlEl = document.getElementById('partnerUrl');
  const dotsContainer = document.getElementById('partnerDots');
  const prevBtn = document.getElementById('partnerPrevBtn');
  const nextBtn = document.getElementById('partnerNextBtn');
  const detailCard = document.getElementById('partnerDetailCard');

  if (!grid || !titleEl) return;

  const partners = VBSP_DATA.partners || [];
  if (!partners.length) return;

  // Selected APRACA (index 2) by default, matching Image 3!
  let currentIdx = 2;

  // Render 3x3 logos
  grid.innerHTML = partners.map((p, idx) => `
    <div class="web-logo-card ${idx === currentIdx ? 'active' : ''}" data-index="${idx}" title="${p.name}">
      ${PARTNER_LOGOS_SVG[p.id] || '<span style="font-weight:700; color:#1e3a8a;">' + p.name + '</span>'}
    </div>
  `).join('');

  // Render dots
  if (dotsContainer) {
    dotsContainer.innerHTML = partners.map((_, idx) => `
      <span class="web-detail-dot ${idx === currentIdx ? 'active' : ''}" data-index="${idx}"></span>
    `).join('');
  }

  function selectPartner(idx) {
    currentIdx = idx;
    const p = partners[currentIdx];

    // Update active on grid cards
    grid.querySelectorAll('.web-logo-card').forEach((card, i) => {
      card.classList.toggle('active', i === currentIdx);
    });

    // Update active on dots
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.web-detail-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIdx);
      });
    }

    // Animate detail card transition
    if (detailCard) {
      detailCard.style.opacity = '0.4';
      detailCard.style.transform = 'translateY(4px)';
    }

    setTimeout(() => {
      titleEl.textContent = p.name;
      descEl.textContent = p.desc;
      addressEl.textContent = p.address;
      urlEl.textContent = p.website;
      urlEl.href = p.website;

      if (detailCard) {
        detailCard.style.opacity = '1';
        detailCard.style.transform = 'translateY(0)';
      }
    }, 150);
  }

  // Click on cards
  grid.querySelectorAll('.web-logo-card').forEach(card => {
    card.addEventListener('click', function () {
      const idx = parseInt(this.dataset.index, 10);
      selectPartner(idx);
    });
  });

  // Click on dots
  if (dotsContainer) {
    dotsContainer.querySelectorAll('.web-detail-dot').forEach(dot => {
      dot.addEventListener('click', function () {
        const idx = parseInt(this.dataset.index, 10);
        selectPartner(idx);
      });
    });
  }

  // Prev / Next
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      const next = (currentIdx - 1 + partners.length) % partners.length;
      selectPartner(next);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      const next = (currentIdx + 1) % partners.length;
      selectPartner(next);
    });
  }

  // Initialize view
  selectPartner(currentIdx);
}

/* --- 12. AWARDS SHOWCASE SLIDER (CÁC PHẦN THƯỞNG CAO QUÝ - THEO TỪNG HẠNG MỤC) --- */
function initAwardsShowcaseSlider() {
  const slider = document.getElementById('simpleAwardSlider');
  if (!slider) return;

  const allSlides = Array.from(slider.querySelectorAll('.simple-award-slide'));
  const catButtons = document.querySelectorAll('.award-cat-btn');
  const prevBtn = document.getElementById('awardPrevBtn');
  const nextBtn = document.getElementById('awardNextBtn');
  const counter = document.getElementById('awardCounter');
  const catBadge = document.getElementById('awardCatBadge');
  const dotsContainer = document.getElementById('awardSliderDots');

  if (!allSlides.length) return;

  let activeSlideList = [];
  let currentIdx = 0;
  let autoTimer = null;

  function filterSlides(category) {
    if (category === 'all') {
      activeSlideList = allSlides;
    } else {
      activeSlideList = allSlides.filter(s => s.getAttribute('data-category') === category);
    }

    // Hide all slides first
    allSlides.forEach(s => {
      s.classList.remove('active');
      s.style.display = 'none';
    });

    // Make active category slides displayable
    activeSlideList.forEach(s => {
      s.style.display = 'flex';
    });

    // Rebuild dots
    if (dotsContainer) {
      dotsContainer.innerHTML = activeSlideList.map((_, i) => `
        <button class="simple-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Ảnh ${i + 1}"></button>
      `).join('');

      dotsContainer.querySelectorAll('.simple-dot').forEach(dot => {
        dot.addEventListener('click', function (e) {
          e.preventDefault();
          const idx = parseInt(this.getAttribute('data-index') || '0', 10);
          showSlide(idx);
          startAutoplay();
        });
      });
    }

    showSlide(0);
  }

  function showSlide(idx) {
    if (!activeSlideList.length) return;
    if (idx < 0) idx = activeSlideList.length - 1;
    if (idx >= activeSlideList.length) idx = 0;
    currentIdx = idx;

    activeSlideList.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIdx);
    });

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.simple-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIdx);
      });
    }

    if (counter) {
      counter.textContent = `${currentIdx + 1} / ${activeSlideList.length}`;
    }

    if (catBadge && activeSlideList[currentIdx]) {
      const currentSlide = activeSlideList[currentIdx];
      const title = currentSlide.getAttribute('data-cat-title') || 'Danh hiệu Khen thưởng';
      let icon = 'fa-solid fa-medal';
      const cat = currentSlide.getAttribute('data-category');
      if (cat === 'anh-hung') icon = 'fa-solid fa-crown';
      else if (cat && cat.startsWith('hc-dl')) icon = 'fa-solid fa-star';
      else if (cat === 'hc-ld-2') icon = 'fa-solid fa-award';
      
      catBadge.innerHTML = `<i class="${icon}"></i> ${title}`;
    }
  }

  function nextSlide() {
    showSlide(currentIdx + 1);
  }

  function prevSlide() {
    showSlide(currentIdx - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoTimer = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      startAutoplay();
    });
  }

  catButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      catButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.getAttribute('data-category');
      filterSlides(cat);
      startAutoplay();
    });
  });

  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  // Keyboard navigation when this page is active
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      startAutoplay();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      startAutoplay();
    }
  });

  filterSlides('anh-hung');
  startAutoplay();
}

/* --- 13. INTERACTIVE FLIPBOOK READER (ẤN PHẨM & BÁO CÁO THƯỜNG NIÊN) --- */
function initFlipbookReader() {
  const container = document.querySelector('.flipbook-container');
  if (!container) return;

  const spreads = container.querySelectorAll('.flipbook-spread-wrap');
  const thumbs = container.querySelectorAll('.flipbook-mini-thumb');
  const prevBtn = container.querySelector('.flipbook-nav-arrow.prev');
  const nextBtn = container.querySelector('.flipbook-nav-arrow.next');
  const pageInput = container.querySelector('.flipbook-page-input');
  const totalPagesEl = container.querySelector('.flipbook-total-pages');
  const zoomInBtn = container.querySelector('.btn-zoom-in');
  const zoomOutBtn = container.querySelector('.btn-zoom-out');
  const zoomResetBtn = container.querySelector('.btn-zoom-reset');
  const fullscreenBtn = container.querySelector('.btn-fullscreen');

  if (!spreads.length) return;

  let currentSpreadIdx = 0;
  let currentZoom = 1.0;

  function updateSpread(idx) {
    if (idx < 0) idx = 0;
    if (idx >= spreads.length) idx = spreads.length - 1;
    currentSpreadIdx = idx;

    spreads.forEach((spread, i) => {
      if (i === currentSpreadIdx) {
        spread.style.display = 'block';
        spread.style.transform = `scale(${currentZoom})`;
      } else {
        spread.style.display = 'none';
      }
    });

    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === currentSpreadIdx);
    });

    if (pageInput) {
      // Each spread contains 2 pages (or 1 page on cover)
      const currentStartPage = currentSpreadIdx === 0 ? 1 : (currentSpreadIdx * 2);
      pageInput.value = currentStartPage;
    }

    if (totalPagesEl) {
      const totalPages = (spreads.length - 1) * 2 + 1;
      totalPagesEl.textContent = `/ ${totalPages}`;
    }

    const activeThumb = thumbs[currentSpreadIdx];
    if (activeThumb && activeThumb.scrollIntoViewIfNeeded) {
      activeThumb.scrollIntoViewIfNeeded({ behavior: 'smooth', inline: 'nearest' });
    }
  }

  function applyZoom(delta) {
    currentZoom = Math.min(Math.max(currentZoom + delta, 0.75), 1.6);
    const activeSpread = spreads[currentSpreadIdx];
    if (activeSpread) {
      activeSpread.style.transform = `scale(${currentZoom})`;
      activeSpread.style.transformOrigin = 'center top';
    }
    if (zoomResetBtn) {
      zoomResetBtn.textContent = `${Math.round(currentZoom * 100)}%`;
    }
  }

  function resetZoom() {
    currentZoom = 1.0;
    const activeSpread = spreads[currentSpreadIdx];
    if (activeSpread) {
      activeSpread.style.transform = 'scale(1)';
    }
    if (zoomResetBtn) {
      zoomResetBtn.textContent = '100%';
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateSpread(currentSpreadIdx + 1));
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateSpread(currentSpreadIdx - 1));
  }

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', function () {
      const idx = parseInt(this.getAttribute('data-spread') || '0', 10);
      updateSpread(idx);
    });
  });

  if (pageInput) {
    pageInput.addEventListener('change', function () {
      const p = parseInt(this.value, 10);
      if (!isNaN(p)) {
        const spreadIdx = p <= 1 ? 0 : Math.floor(p / 2);
        updateSpread(spreadIdx);
      }
    });
  }

  if (zoomInBtn) zoomInBtn.addEventListener('click', () => applyZoom(0.15));
  if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => applyZoom(-0.15));
  if (zoomResetBtn) zoomResetBtn.addEventListener('click', resetZoom);

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', function () {
      if (!document.fullscreenElement) {
        container.requestFullscreen().catch(() => {});
        this.innerHTML = '<i class="fa-solid fa-compress"></i> Thu nhỏ';
      } else {
        document.exitFullscreen().catch(() => {});
        this.innerHTML = '<i class="fa-solid fa-expand"></i> Toàn màn hình';
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      updateSpread(currentSpreadIdx + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      updateSpread(currentSpreadIdx - 1);
    }
  });

  // Init
  updateSpread(0);
}


