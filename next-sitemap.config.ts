import { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://askargroups.com', // ضع رابط موقعك الأساسي
  generateRobotsTxt: true, // لإنشاء ملف robots.txt
  changefreq: 'daily', // معدل تحديث الصفحات
  priority: 0.7, // أولوية الصفحات
  alternateRefs: [
    {
      href: 'https://askargroups.com/ar', // رابط النسخة العربية
      hreflang: 'ar', // اللغة العربية
    },
    {
      href: 'https://askargroups.com/en', // رابط النسخة الإنجليزية
      hreflang: 'en', // اللغة الإنجليزية
    },
  ],
};

export default config;
