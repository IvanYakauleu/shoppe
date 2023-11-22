import Rewiew from '../../../models/Rewiew';
import connect from '../../../utils/db';

import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    await connect();
    const rewiews = await Rewiew.find();

    return new NextResponse(JSON.stringify(rewiews), { status: 200 });
  } catch (error) {
    return new NextResponse('Error in response of DB', { status: 500 });
  }
}
