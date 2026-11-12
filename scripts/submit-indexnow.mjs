// Submit all live sitemap URLs to IndexNow (Bing, Yandex, Seznam, Yep, Naver)
import fs from 'node:fs';
import path from 'node:path';

const HOST = 'www.evstartups.com';
const KEY = 'c7f93a1e28b449bca5d67e8910f132e4';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function submitIndexNow() {
  const sitemapPath = path.resolve('dist/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('Error: dist/sitemap.xml not found. Please run "npm run build" first.');
    process.exit(1);
  }

  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
  const locMatches = [...sitemapXml.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)];
  const urls = locMatches.map((m) => m[1]);

  console.log(`Found ${urls.length} URLs in sitemap to submit to IndexNow.`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    console.log(`IndexNow API Response Status: ${response.status} ${response.statusText}`);
    if (response.status === 200 || response.status === 202) {
      console.log('✓ Successfully submitted URLs to IndexNow!');
    } else {
      const text = await response.text();
      console.warn('IndexNow response body:', text);
    }
  } catch (err) {
    console.error('Failed to submit to IndexNow:', err.message);
  }
}

submitIndexNow();

