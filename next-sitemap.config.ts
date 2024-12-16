import { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://askarconstruction.com', // ضع رابط موقعك الأساسي
  generateRobotsTxt: true, // لإنشاء ملف robots.txt
  changefreq: 'daily', // معدل تحديث الصفحات
  priority: 0.7, // أولوية الصفحات
  alternateRefs: [
    {
      href: 'https://askarconstruction.com/ar', // رابط النسخة العربية
      hreflang: 'ar', // اللغة العربية
    },
    {
      href: 'https://askarconstruction.com/en', // رابط النسخة الإنجليزية
      hreflang: 'en', // اللغة الإنجليزية
    },
  ],
};

export default config;
