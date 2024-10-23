// Import yt-dlp package
import ytDlp from '@yemreak/yt-dlp';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    // Fetch video data from yt-dlp
    const mediaInfo = await ytDlp.retrieveMediaInfoList(url);
    return NextResponse.json({ success: true, data: mediaInfo });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
