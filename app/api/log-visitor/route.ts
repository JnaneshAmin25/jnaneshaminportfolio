// app/api/log-visitor/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  const data = await request.json();
  
  const logEntry = {
    ip: request.headers.get('x-forwarded-for') || 'localhost',
    timestamp: new Date().toISOString(),
    page: data.page || '/', // Track visited page
    userAgent: request.headers.get('user-agent'),
    referrer: request.headers.get('referer')
  };

  const logPath = path.join(process.cwd(), 'visitors.log');
  
  await fs.promises.appendFile(
    logPath,
    JSON.stringify(logEntry) + '\n'
  );

  return NextResponse.json({ success: true });
}