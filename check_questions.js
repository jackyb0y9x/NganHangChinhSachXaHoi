const fs = require('fs');

function findQuestions(filename) {
  const html = fs.readFileSync(filename, 'utf8');
  console.log('=== QUESTIONS IN ' + filename + ' ===');
  
  // Search for questions/answers or list items
  const matches = [...html.matchAll(/<tr[^>]*>[\s\S]*?<\/tr>/gi)];
  console.log('Total tr:', matches.length);

  // Search for div classes
  const divs = [...html.matchAll(/<div[^>]+class=["']([^"']+)["']/gi)].map(m => m[1]);
  console.log('Div classes:', [...new Set(divs)].filter(c => c.toLowerCase().includes('question') || c.toLowerCase().includes('answer') || c.toLowerCase().includes('faq') || c.toLowerCase().includes('hoi') || c.toLowerCase().includes('dap')));

  // Look for any links with text
  const links = [...html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
    .map(m => ({ href: m[1], text: m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') }))
    .filter(l => l.text.length > 15 && !l.text.includes('Ngân hàng') && !l.text.includes('Cổng thông tin'));
  console.log('Long links count:', links.length);
  links.slice(0, 10).forEach(l => console.log('Link:', l.text));
}

findQuestions('raw_chinhsach.html');
findQuestions('raw_quytrinh.html');
findQuestions('raw_khac.html');
