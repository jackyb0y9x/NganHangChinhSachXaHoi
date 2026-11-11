const fs = require('fs');
const { getUnifiedHeader } = require('./unified_header.js');

const pageMenuMap = {
  'index.html': 'trang-chu',
  'gioi-thieu-san-pham-dich-vu.html': 'gioi-thieu',
  'y-nghia-bieu-trung-logo.html': 'gioi-thieu',
  'lich-su-hinh-thanh.html': 'gioi-thieu',
  'cac-phan-thuong-cao-quy.html': 'gioi-thieu',
  'co-cau-to-chuc.html': 'gioi-thieu',
  'chi-tiet-chuyen-tien.html': 'gioi-thieu',
  'chi-tiet-tien-gui-tiet-kiem.html': 'gioi-thieu',
  'chi-tiet-quy-trinh-cho-vay.html': 'gioi-thieu',
  'tin-tuc-su-kien.html': 'thong-tin-hoat-dong',
  'chi-tiet-tin-tuc.html': 'thong-tin-hoat-dong',
  'tin-noi-bat.html': 'thong-tin-hoat-dong',
  'tin-moi-cap-nhat.html': 'thong-tin-hoat-dong',
  'nguoi-tot-viec-tot.html': 'thong-tin-hoat-dong',
  'chi-tiet-multimedia.html': 'thong-tin-hoat-dong',
  'chi-tiet-bai-viet-multimedia.html': 'thong-tin-hoat-dong',
  'phong-su-anh.html': 'thong-tin-hoat-dong',
  'xem-video.html': 'thong-tin-hoat-dong',
  'nghe-audio.html': 'thong-tin-hoat-dong',
  'he-thong-van-ban.html': 'he-thong-van-ban',
  'tra-cuu-diem-giao-dich.html': 'trang-chu',
  'chuyen-de-nghien-cuu-khoa-hoc.html': 'dao-tao-va-nckh',
  'nghien-cuu-trao-doi.html': 'dao-tao-va-nckh',
  'cong-tac-dang.html': 'chuyen-muc-khac',
  'hoat-dong-cong-doan.html': 'chuyen-muc-khac',
  'doan-thanh-nien.html': 'chuyen-muc-khac',
  'an-pham-thong-tin-nhcsxh.html': 'chuyen-muc-khac',
  'an-pham-bao-cao-thuong-nien.html': 'chuyen-muc-khac',
  'chung-tay-vi-cong-dong.html': 'chuyen-muc-khac',
  'so-tay-vbsp-smartbanking.html': 'chuyen-muc-khac',
  'giao-duc-so-go-digital.html': 'chuyen-muc-khac',
  'thuc-hien-chi-thi-40.html': 'thong-tin-hoat-dong',
  'cuoc-thi-truc-tuyen-chi-thi-39.html': 'thong-tin-hoat-dong',
  'cuoc-thi-viet-tin-dung-chinh-sach-xa-hoi-y-dang-long-dan.html': 'thong-tin-hoat-dong',
  'hoi-dap.html': 'hoi-dap'
};

const regexHeader = /<!--\s*====================\s*TOP BAR\s*====================\s*-->[\s\S]*?<\/nav>/i;

let updatedCount = 0;

for (const [filename, menuKey] of Object.entries(pageMenuMap)) {
  if (fs.existsSync(filename)) {
    let content = fs.readFileSync(filename, 'utf8');
    const headerHtml = getUnifiedHeader(menuKey);
    if (regexHeader.test(content)) {
      content = content.replace(regexHeader, headerHtml);
      fs.writeFileSync(filename, content, 'utf8');
      console.log(`[UPDATED] Header in ${filename} (active: ${menuKey})`);
      updatedCount++;
    } else {
      console.log(`[WARN] Header marker not found in ${filename}`);
    }
  } else {
    console.log(`[NOT FOUND] ${filename}`);
  }
}

console.log(`Finished applying unified standard header to ${updatedCount} pages.`);
