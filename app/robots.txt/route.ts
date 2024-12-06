import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `
    User-agent: *
    Disallow:

    Sitemap: https://askargroups.com/sitemap.xml
  `;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
