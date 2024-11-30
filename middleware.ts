import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // تحقق من المسار الأساسي فقط
  if (url.pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') || 'en';
    const userLang = acceptLanguage.split(',')[0].startsWith('ar') ? 'ar' : 'en';

    // إعادة التوجيه إلى المسار المناسب
    url.pathname = `/${userLang}`;
    return NextResponse.redirect(url);
  }

  // السماح بالوصول إذا لم يكن المسار "/"
  return NextResponse.next();
}

// تكوين المسارات التي تُطبق عليها Middleware
export const config = {
  matcher: '/', // فقط المسار الأساسي
};
