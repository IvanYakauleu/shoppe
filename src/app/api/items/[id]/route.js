import Item from '../../../../models/Item';
import connect from '../../../../utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();
    const item = await Item.findById(id);

    return new NextResponse(JSON.stringify(item), { status: 200 });
  } catch (error) {
    return new NextResponse('Error in response of DB', { status: 500 });
  }
};
