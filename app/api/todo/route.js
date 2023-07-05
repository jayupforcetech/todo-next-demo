'server-only';

import { NextResponse } from 'next/server';

const list = [];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) return NextResponse.json({ data: list });

  const todoById = list.find(item => item.id == id);
  if (todoById) return NextResponse.json({ status: 'success', data: todoById });

  return NextResponse.json({ status: 'failed' }, { status: 400 });
}

export async function POST(request) {
  const body = await request.json();
  list.push(body);
  return NextResponse.json({ status: 'success', data: body });
}
