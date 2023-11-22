import Item from '../../../models/Item';
import connect from '../../../utils/db';

import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    await connect();

    const url = new URL(req.url);
    const sortBy = url.searchParams.get('sortBy');
    const filterBy = url.searchParams.get('filter');
    const priceMin = url.searchParams.get('priceMin');
    const priceMax = url.searchParams.get('priceMax');

    let sortOption = {};
    let filterOption = {};

    if (priceMin && priceMax) {
      filterOption = { price: { $gte: Number(priceMin), $lte: Number(priceMax) } };
    }

    switch (sortBy) {
      case 'priceW':
        sortOption = { price: -1 };
        break;
      case 'priceQ':
        sortOption = { price: 1 };
        break;
      case 'ratingW':
        sortOption = { rating: -1 };
        break;
      case 'ratingQ':
        sortOption = { rating: 1 };
        break;
      default:
        sortOption = {};
    }

    switch (filterBy) {
      case 'Rings':
        filterOption.categories = 'Rings';
        break;
      case 'Earrings':
        filterOption.categories = 'Earrings';
        break;
      case 'Necklaces':
        filterOption.categories = 'Necklaces';
        break;
      case 'Bracelets':
        filterOption.categories = 'Bracelets';
        break;
      case 'Piercings':
        filterOption.categories = 'Piercings';
        break;
      default:
        break;
    }
    const items = await Item.find(filterOption).sort(sortOption);

    return new NextResponse(JSON.stringify(items), { status: 200 });
  } catch (error) {
    return new NextResponse('Error in response of DB', { status: 500 });
  }
}
