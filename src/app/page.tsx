import styles from './page.module.css';

import Slider from '@/Components/Slider/Slider';

import ProductCard from '@/Components/ProductCard/ProductCard';

import Link from 'next/link';

export interface IMassCard {
  img: string;
  title: string;
  price: number;
}

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/items', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export interface IJewelry {
  _id: string;
  name: string;
  img: string;
  desc: string;
  count: number;
  material: string;
  weight: string;
  price: number;
  dimensions: string;
  colors: string[];
  categories: string;
  rating: number;
}

const Home = async () => {
  const data: IJewelry[] = await getData();

  return (
    <>
      <div className="main-slider">
        <Slider />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title}>Shop The Latest</div>
        <Link href="/shop" className={styles.link}>
          View All
        </Link>
      </div>
      <div className={styles.cardWrapper}>
        {data.map((item, i) => (
          <ProductCard
            id={item._id}
            key={i}
            img={item.img}
            title={item.name}
            price={+item.price}
            width={380}
            height={380}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
