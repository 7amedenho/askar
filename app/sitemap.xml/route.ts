import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://askarconstruction.com'; // ضع رابط موقعك الأساسي

  // الروابط المدعومة
  const pages = [
    { loc: '/en', lang: 'en' },
    { loc: '/ar', lang: 'ar' },
  ];

  // إنشاء XML للـ Sitemap
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${pages
        .map(
          (page) => `
        <url>
          <loc>${baseUrl}${page.loc}</loc>
          <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar" />
          <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en" />
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
      `
        )
        .join('')}
    </urlset>
  `;

  // إرجاع الـ XML
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
