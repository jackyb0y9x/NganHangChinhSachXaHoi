/**
 * VBSP English Portal - Shared Interaction Script
 * Supports Mobile Nav, Category Tab Filtering, Live Search, and Newsletter Toast
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Standard Off-Canvas Mobile Drawer & Backdrop
  const toggleBtn = document.querySelector('.vbsp-nav-toggle');
  const closeBtn = document.querySelector('.vbsp-drawer-close');
  const backdrop = document.querySelector('.vbsp-nav-backdrop');
  const navList = document.querySelector('.vbsp-nav-list');

  function setDrawerOpen(isOpen) {
    if (!navList) return;
    navList.classList.toggle('open', isOpen);
    if (backdrop) backdrop.classList.toggle('open', isOpen);
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('mobile-menu-open', isOpen);
  }

  if (toggleBtn && navList) {
    toggleBtn.addEventListener('click', function () {
      setDrawerOpen(!navList.classList.contains('open'));
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
    if (e.key === 'Escape' && navList && navList.classList.contains('open')) {
      setDrawerOpen(false);
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024 && navList && navList.classList.contains('open')) {
      setDrawerOpen(false);
    }
  });

  // 2. Smart Accordion Dropdown handling for mobile / tablet (<= 1024px)
  const navItemsWithDropdown = document.querySelectorAll('.vbsp-nav-item.has-dropdown');
  navItemsWithDropdown.forEach(item => {
    const link = item.querySelector(':scope > .vbsp-nav-link');
    if (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 1024) {
          const clickedChevron = e.target.closest('.fa-chevron-down');
          const href = (link.getAttribute('href') || '').trim();
          const isDummyHref = !href || href === '#' || href.startsWith('javascript:');

          if (clickedChevron || isDummyHref || !item.classList.contains('open')) {
            e.preventDefault();
            const willOpen = !item.classList.contains('open');
            navItemsWithDropdown.forEach(other => {
              if (other !== item) other.classList.remove('open');
            });
            item.classList.toggle('open', willOpen);
          }
        }
      });
    }
  });

  // Close drawer when tapping hash links inside drawer
  if (navList) {
    navList.querySelectorAll('a[href*="#"]').forEach(anchor => {
      anchor.addEventListener('click', function () {
        if (window.innerWidth <= 1024) {
          setDrawerOpen(false);
        }
      });
    });
  }

  // Mobile Drawer Search Form
  const drawerSearchForm = document.querySelector('.vbsp-drawer-search');
  if (drawerSearchForm) {
    drawerSearchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = this.querySelector('input');
      const kw = input ? input.value.trim() : '';
      window.location.href = kw
        ? 'en-news-highlights.html?keyword=' + encodeURIComponent(kw)
        : 'en-news-highlights.html';
    });
  }

  // 3. Category Tab Filter
  const filterPills = document.querySelectorAll('.baac-filter-pill');
  const filterableItems = document.querySelectorAll('[data-category]');

  if (filterPills.length > 0) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', function () {
        filterPills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');

        const selectedCat = this.getAttribute('data-filter') || 'all';

        filterableItems.forEach(item => {
          const itemCat = item.getAttribute('data-category') || '';
          if (selectedCat === 'all' || itemCat.includes(selectedCat)) {
            item.style.display = '';
            item.classList.add('animate-fadeIn');
          } else {
            item.style.display = 'none';
          }
        });

        // Update count badge if exists
        const countSpan = document.getElementById('resultsCount');
        if (countSpan) {
          const visibleCount = Array.from(filterableItems).filter(el => el.style.display !== 'none').length;
          countSpan.textContent = visibleCount;
        }
      });
    });
  }

  // 4. Live Search Input Filter
  const searchInput = document.getElementById('pageSearchInput');
  if (searchInput && filterableItems.length > 0) {
    searchInput.addEventListener('input', function () {
      const query = this.value.trim().toLowerCase();
      filterableItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });

      const countSpan = document.getElementById('resultsCount');
      if (countSpan) {
        const visibleCount = Array.from(filterableItems).filter(el => el.style.display !== 'none').length;
        countSpan.textContent = visibleCount;
      }
    });
  }

  // 5. Header Search Form
  const headerSearchInput = document.getElementById('vbspHeaderSearch');
  if (headerSearchInput) {
    headerSearchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const kw = this.value.trim();
        if (kw) {
          window.location.href = 'en-news-highlights.html?keyword=' + encodeURIComponent(kw);
        }
      }
    });
  }

  // 6. Newsletter Subscription Toast
  const nlForms = document.querySelectorAll('.baac-nl-form, .vbsp-footer__subscribe-row');
  nlForms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = this.querySelector('input[type="email"]');
      if (input && input.value) {
        alert('Thank you for subscribing to VBSP Quarterly English Bulletin! We will send updates to: ' + input.value);
        input.value = '';
      }
    });
  });
});
