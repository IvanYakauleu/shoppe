import Rewiew from '../../../models/Rewiew';
import connect from '../../../utils/db';

import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    await connect();
    const reviews = await Rewiew.find();
    return new NextResponse(JSON.stringify(reviews), { status: 200 });
  } catch (error) {
    return new NextResponse('Error in response of DB', { status: 500 });
  }
}

export async function POST(req) {
  const body = await req.json();

  const newPost = new Rewiew(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse('POST request processed successfully', { status: 200 });
  } catch (error) {
    return new NextResponse('Error in response of DB', { status: 500 });
  }
}
