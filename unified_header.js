function getUnifiedHeader(activeMenu = 'trang-chu') {
  return `  <!-- ==================== TOP BAR ==================== -->
  <div class="vbsp-topbar">
    <div class="vbsp-container">
      <div class="topbar-wrapper">
        <div class="topbar-left">
          <span class="topbar-portal-title">
            <i class="fa-solid fa-landmark"></i>
            <span class="portal-title-full">CỔNG THÔNG TIN ĐIỆN TỬ NGÂN HÀNG CHÍNH SÁCH XÃ HỘI</span>
            <span class="portal-title-short">NHCSXH - VBSP</span>
          </span>
        </div>
        <div class="topbar-right">
          <span class="topbar-item" id="liveClock">
            <i class="fa-regular fa-clock"></i> Hà Nội: Thứ Năm, 22/10/2026 - 16:52
          </span>
          <div class="topbar-links">
            <a href="#footer"><i class="fa-solid fa-sitemap"></i> Sơ đồ cổng</a>
            <a href="#footer"><i class="fa-solid fa-envelope"></i> Liên hệ</a>
          </div>
          <div class="lang-switch" title="Ngôn ngữ / Language">
            <i class="fa-solid fa-globe lang-icon"></i>
            <a href="index.html" class="active" title="Tiếng Việt">VN</a>
            <a href="en-news-highlights.html" title="English">English</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== MAIN BRAND HEADER ==================== -->
  <header class="vbsp-main-header">
    <div class="vbsp-container">
      <div class="header-wrapper">
        <div class="header-brand">
          <a href="index.html" class="header-brand-link">
            <img src="https://storage-vnportal.vnpt.vn/tw-nhcsxh/8053/banner/logo.png" alt="Logo NHCSXH" class="brand-logo-img">
            <div class="brand-text-block">
              <span class="brand-title-vn">Ngân hàng Chính sách xã hội</span>
              <span class="brand-title-en">Vietnam Bank for Social Policies</span>
            </div>
          </a>
        </div>
        <div class="header-quick-tools">
          <form class="header-search-form" onsubmit="event.preventDefault(); window.location.href='tin-tuc-su-kien.html';">
            <input type="text" class="header-search-input" placeholder="Tìm kiếm dịch vụ, chính sách...">
            <button type="submit" class="header-search-btn" aria-label="Tìm kiếm"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </div>
    </div>
  </header>

  <!-- ==================== MAIN NAVIGATION BAR (7 TOP MENUS - DESKTOP & MOBILE DRAWER) ==================== -->
  <nav class="vbsp-navbar" aria-label="Điều hướng chính">
    <div class="vbsp-container nav-container">
      <div class="mobile-nav-bar">
        <button type="button" class="mobile-nav-toggle" aria-label="Mở menu danh mục" aria-expanded="false">
          <i class="fa-solid fa-bars"></i>
          <span>Danh mục</span>
        </button>
        <a href="tel:1900638586" class="mobile-hotline-chip">
          <i class="fa-solid fa-phone-volume"></i>
          <span>1900 638 586</span>
        </a>
      </div>

      <div class="mobile-nav-backdrop" aria-hidden="true"></div>

      <ul class="nav-menu">
        <!-- Mobile Drawer Top Header & Search (Hidden on Desktop) -->
        <li class="mobile-drawer-top">
          <div class="mobile-drawer-brand-row">
            <a href="index.html" class="mobile-drawer-brand">
              <img src="https://storage-vnportal.vnpt.vn/tw-nhcsxh/8053/banner/logo.png" alt="VBSP">
              <div>
                <strong>NHCSXH Việt Nam</strong>
                <span>Danh mục Cổng thông tin</span>
              </div>
            </a>
            <button type="button" class="mobile-drawer-close" aria-label="Đóng menu">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <form class="mobile-drawer-search" onsubmit="event.preventDefault(); window.location.href='tin-tuc-su-kien.html';">
            <input type="text" placeholder="Tìm kiếm tin tức, chính sách..." aria-label="Tìm kiếm">
            <button type="submit" aria-label="Tìm"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </li>

        <!-- 1. TRANG CHỦ -->
        <li class="nav-item ${activeMenu === 'trang-chu' ? 'active' : ''}">
          <a href="index.html" class="nav-link">
            <span>Trang chủ</span>
          </a>
        </li>

        <!-- 2. GIỚI THIỆU -->
        <li class="nav-item has-children ${activeMenu === 'gioi-thieu' ? 'active' : ''}">
          <a href="gioi-thieu-san-pham-dich-vu.html" class="nav-link">
            <span>Giới thiệu</span>
            <i class="fa-solid fa-chevron-down arrow-down"></i>
          </a>
          <div class="dropdown-panel dropdown-w-md">
            <div class="dropdown-item">
              <a href="y-nghia-bieu-trung-logo.html" class="dropdown-link">
                <span>Ý nghĩa biểu trưng (Logo)</span>
              </a>
            </div>
            <div class="dropdown-item">
              <a href="lich-su-hinh-thanh.html" class="dropdown-link">
                <span>Lịch sử hình thành</span>
              </a>
            </div>
            <div class="dropdown-item">
              <a href="cac-phan-thuong-cao-quy.html" class="dropdown-link">
                <span>Các phần thưởng cao quý</span>
              </a>
            </div>
            <div class="dropdown-item">
              <a href="co-cau-to-chuc.html" class="dropdown-link">
                <span>Cơ cấu tổ chức, đăng ký hoạt động</span>
              </a>
            </div>
            <div class="dropdown-item has-sub-flyout dropdown-divider-top">
              <a href="gioi-thieu-san-pham-dich-vu.html" class="dropdown-link dropdown-link-featured">
                <span>Các sản phẩm dịch vụ</span>
                <i class="fa-solid fa-chevron-right sub-flyout-arrow"></i>
              </a>
              <div class="sub-flyout-panel">
                <div class="flyout-grid">
                  <!-- Cột 1: Thanh toán chuyển tiền -->
                  <div class="flyout-col">
                    <div class="flyout-col-title">Thanh toán chuyển tiền</div>
                    <ul class="flyout-list">
                      <li><a href="chi-tiet-chuyen-tien.html?tab=den" class="flyout-link">Chuyển tiền đến trong nước</a></li>
                      <li><a href="chi-tiet-chuyen-tien.html?tab=di" class="flyout-link">Chuyển tiền đi trong nước</a></li>
                      <li><a href="chi-tiet-chuyen-tien.html?tab=kieuhoi" class="flyout-link">Dịch vụ chuyển tiền kiều hối</a></li>
                    </ul>
                  </div>

                  <!-- Cột 2: Nhận tiền gửi tiết kiệm -->
                  <div class="flyout-col">
                    <div class="flyout-col-title">Nhận tiền gửi tiết kiệm</div>
                    <ul class="flyout-list">
                      <li><a href="chi-tiet-tien-gui-tiet-kiem.html?tab=cokyhan" class="flyout-link">Gửi tiết kiệm có kỳ hạn</a></li>
                      <li><a href="chi-tiet-tien-gui-tiet-kiem.html?tab=khongkyhan" class="flyout-link">Gửi tiết kiệm không kỳ hạn</a></li>
                      <li><a href="chi-tiet-tien-gui-tiet-kiem.html#calc" class="flyout-link">Công cụ tính lãi tiết kiệm</a></li>
                    </ul>
                  </div>

                  <!-- Cột 3: Cho vay & Ngân quỹ -->
                  <div class="flyout-col">
                    <div class="flyout-col-title">Cho vay &amp; Ngân quỹ</div>
                    <ul class="flyout-list">
                      <li><a href="chi-tiet-quy-trinh-cho-vay.html?tab=tiengui" class="flyout-link">Tiền gửi có kỳ hạn</a></li>
                      <li><a href="chi-tiet-quy-trinh-cho-vay.html?tab=thanhtoan" class="flyout-link">Tiền gửi thanh toán</a></li>
                      <li><a href="chi-tiet-quy-trinh-cho-vay.html?tab=chovay" class="flyout-link">Quy trình cho vay chính sách</a></li>
                    </ul>
                  </div>
                </div>

                <div class="sub-flyout-footer">
                  <a href="gioi-thieu-san-pham-dich-vu.html" class="flyout-footer-link">
                    <span>Xem toàn bộ thông tin sản phẩm &amp; dịch vụ</span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- 3. THÔNG TIN HOẠT ĐỘNG -->
        <li class="nav-item has-children ${activeMenu === 'thong-tin-hoat-dong' ? 'active' : ''}">
          <a href="tin-tuc-su-kien.html" class="nav-link">
            <span>Thông tin hoạt động</span>
            <i class="fa-solid fa-chevron-down arrow-down"></i>
          </a>
          <div class="dropdown-panel dropdown-w-lg">
            <div class="dropdown-item"><a href="tin-noi-bat.html" class="dropdown-link"><span>Tin nổi bật</span></a></div>
            <div class="dropdown-item"><a href="tin-moi-cap-nhat.html" class="dropdown-link"><span>Tin mới cập nhật</span></a></div>
            <div class="dropdown-item"><a href="nguoi-tot-viec-tot.html" class="dropdown-link"><span>Người tốt - Việc tốt</span></a></div>
            <div class="dropdown-item"><a href="chi-tiet-multimedia.html" class="dropdown-link"><span>Chuyên trang Multimedia</span></a></div>
            <div class="dropdown-item"><a href="phong-su-anh.html" class="dropdown-link"><span>Phóng sự ảnh</span></a></div>
            <div class="dropdown-item"><a href="xem-video.html" class="dropdown-link"><span>Xem / Video</span></a></div>
            <div class="dropdown-item"><a href="nghe-audio.html" class="dropdown-link"><span>Nghe / Audio</span></a></div>
            <div class="dropdown-item dropdown-divider-top"><a href="thuc-hien-chi-thi-40.html" class="dropdown-link"><span>Thực hiện Chỉ thị số 40-CT/TW</span></a></div>
            <div class="dropdown-item"><a href="cuoc-thi-truc-tuyen-chi-thi-39.html" class="dropdown-link"><span>Cuộc thi trực tuyến Chỉ thị số 39-CT/TW</span></a></div>
            <div class="dropdown-item"><a href="cuoc-thi-viet-tin-dung-chinh-sach-xa-hoi-y-dang-long-dan.html" class="dropdown-link"><span>Cuộc thi viết "Tín dụng chính sách xã hội - ý Đảng, lòng Dân"</span></a></div>
          </div>
        </li>

        <!-- 4. HỆ THỐNG VĂN BẢN -->
        <li class="nav-item has-children ${activeMenu === 'he-thong-van-ban' ? 'active' : ''}">
          <a href="he-thong-van-ban.html" class="nav-link">
            <span>Hệ thống văn bản</span>
            <i class="fa-solid fa-chevron-down arrow-down"></i>
          </a>
          <div class="dropdown-panel dropdown-w-sm">
            <div class="dropdown-item"><a href="he-thong-van-ban.html#trunguong" class="dropdown-link"><span>Văn bản Bộ, ngành Trung ương</span></a></div>
            <div class="dropdown-item"><a href="he-thong-van-ban.html#hdqt" class="dropdown-link"><span>Văn bản của Hội đồng quản trị</span></a></div>
            <div class="dropdown-item"><a href="he-thong-van-ban.html#tgd" class="dropdown-link"><span>Văn bản của Tổng giám đốc</span></a></div>
            <div class="dropdown-item dropdown-divider-top">
              <a href="he-thong-van-ban.html" class="dropdown-link dropdown-link-accent">
                <span>Tra cứu tất cả văn bản chỉ đạo</span>
              </a>
            </div>
          </div>
        </li>

        <!-- 5. ĐÀO TẠO VÀ NCKH -->
        <li class="nav-item has-children ${activeMenu === 'dao-tao-va-nckh' ? 'active' : ''}">
          <a href="chuyen-de-nghien-cuu-khoa-hoc.html" class="nav-link">
            <span>Đào tạo và NCKH</span>
            <i class="fa-solid fa-chevron-down arrow-down"></i>
          </a>
          <div class="dropdown-panel dropdown-w-sm">
            <div class="dropdown-item"><a href="chuyen-de-nghien-cuu-khoa-hoc.html" class="dropdown-link"><span>Nghiên cứu khoa học</span></a></div>
            <div class="dropdown-item"><a href="nghien-cuu-trao-doi.html" class="dropdown-link"><span>Nghiên cứu &amp; trao đổi</span></a></div>
            <div class="dropdown-item"><a href="chuyen-de-nghien-cuu-khoa-hoc.html?tab=daotao" class="dropdown-link"><span>Chuyên đề đào tạo</span></a></div>
            <div class="dropdown-item"><a href="chuyen-de-nghien-cuu-khoa-hoc.html?tab=canbo" class="dropdown-link"><span>Đào tạo cán bộ trong hệ thống</span></a></div>
          </div>
        </li>

        <!-- 6. CHUYÊN MỤC KHÁC -->
        <li class="nav-item has-children ${activeMenu === 'chuyen-muc-khac' ? 'active' : ''}">
          <a href="cong-tac-dang.html" class="nav-link">
            <span>Chuyên mục khác</span>
            <i class="fa-solid fa-chevron-down arrow-down"></i>
          </a>
          <div class="dropdown-panel dropdown-2col">
            <div class="dropdown-col-group">
              <div class="mega-col-title mega-col-title-compact">Công tác Đảng &amp; Đoàn thể</div>
              <div class="dropdown-item"><a href="cong-tac-dang.html" class="dropdown-link"><span>Công tác Đảng</span></a></div>
              <div class="dropdown-item"><a href="hoat-dong-cong-doan.html" class="dropdown-link"><span>Hoạt động Công đoàn/An sinh xã hội</span></a></div>
              <div class="dropdown-item"><a href="doan-thanh-nien.html" class="dropdown-link"><span>Đoàn thanh niên</span></a></div>
              <div class="dropdown-item"><a href="chung-tay-vi-cong-dong.html" class="dropdown-link"><span>Chung tay vì cộng đồng</span></a></div>
            </div>
            <div class="dropdown-col-group">
              <div class="mega-col-title mega-col-title-compact">Ấn phẩm &amp; Cẩm nang số</div>
              <div class="dropdown-item"><a href="an-pham-thong-tin-nhcsxh.html" class="dropdown-link"><span>Mời đọc ấn phẩm “Thông tin NHCSXH”</span></a></div>
              <div class="dropdown-item"><a href="an-pham-bao-cao-thuong-nien.html" class="dropdown-link"><span>Mời đọc ấn phẩm Báo cáo thường niên</span></a></div>
              <div class="dropdown-item"><a href="so-tay-vbsp-smartbanking.html" class="dropdown-link"><span>Sổ tay VBSP SmartBanking</span></a></div>
              <div class="dropdown-item"><a href="giao-duc-so-go-digital.html" class="dropdown-link"><span>Giáo dục số cơ bản - GO DIGITAL</span></a></div>
            </div>
          </div>
        </li>

        <!-- 7. HỎI - ĐÁP -->
        <li class="nav-item has-children ${activeMenu === 'hoi-dap' ? 'active' : ''}">
          <a href="hoi-dap.html" class="nav-link">
            <span>Hỏi - Đáp</span>
            <i class="fa-solid fa-chevron-down arrow-down"></i>
          </a>
          <div class="dropdown-panel dropdown-w-sm">
            <div class="dropdown-item"><a href="hoi-dap.html?type=chinh-sach" class="dropdown-link"><span>Hỏi đáp chính sách</span></a></div>
            <div class="dropdown-item"><a href="hoi-dap.html?type=quy-trinh" class="dropdown-link"><span>Hỏi đáp quy trình nghiệp vụ</span></a></div>
            <div class="dropdown-item"><a href="hoi-dap.html?type=khac" class="dropdown-link"><span>Hỏi đáp khác</span></a></div>
            <div class="dropdown-item dropdown-divider-top">
              <a href="hoi-dap.html?type=gui-cau-hoi" class="dropdown-link dropdown-link-accent">
                <span>Gửi câu hỏi trực tuyến</span>
              </a>
            </div>
          </div>
        </li>

        <!-- Mobile Drawer Bottom Quick Links (Hidden on Desktop) -->
        <li class="mobile-drawer-bottom">
          <div class="mobile-drawer-lang">
            <a href="index.html" class="active"><i class="fa-solid fa-check"></i> Tiếng Việt</a>
            <a href="en-news-highlights.html"><i class="fa-solid fa-globe"></i> English Portal</a>
          </div>
          <a href="tra-cuu-diem-giao-dich.html" class="mobile-drawer-cta">
            <i class="fa-solid fa-location-dot"></i> Tra cứu Điểm giao dịch &amp; Lãi suất
          </a>
        </li>
      </ul>
    </div>
  </nav>`;
}

module.exports = { getUnifiedHeader };
