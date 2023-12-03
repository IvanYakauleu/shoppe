'use client';

import styles from './page.module.css';

import Link from 'next/link';
import Image from 'next/image';
import DescItem from '@/Components/DescItem/DescItem';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { IJewelry } from '@/app/page';

import dynamic from 'next/dynamic';
import ProductCard from '@/Components/ProductCard/ProductCard';

const StarRatings = dynamic(() => import('react-star-ratings'), {
  ssr: false,
});

import ItemSlider from '@/Components/itemSlider/itemSlider';

const ItemCard = () => {
  const [dataItem, setDataItem] = useState<IJewelry>();
  const [jewelryItems, setJewelryItems] = useState<IJewelry[]>();
  const [count, setCount] = useState(0);
  const { id } = useParams();

  const dec = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };
  const inc = () => {
    if (count != dataItem?.count) {
      setCount((count) => count + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/items/${id}`);
        const res = await fetch(`http://localhost:3000/api/items`);
        const data = await response.json();
        const dataItems = await res.json();
        setDataItem(data);
        setJewelryItems(dataItems);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <main className={styles.container}>
      {dataItem && (
        <>
          <div className={styles.wrapper}>
            <ItemSlider img={dataItem.img} />
            <div>
              <div className={styles.title}>{dataItem.name}</div>
              <div className={styles.price}>$ {dataItem.price}</div>
              <div className={styles.ratingWrapper}>
                <StarRatings
                  rating={+dataItem.rating}
                  starRatedColor="black"
                  numberOfStars={5}
                  starDimension="18px"
                  starSpacing="2px"
                  name={'ratingId'}
                />
                <div className={styles.ratings}>1 customer review</div>
              </div>
              <p className={styles.descr}>{dataItem.desc}</p>
              <div className={styles.ratingWrapper}>
                <div className={styles.counter}>
                  <button className={styles.btn} onClick={dec}>
                    -
                  </button>
                  <div className={styles.count}>{count}</div>
                  <button className={styles.btn} onClick={inc}>
                    +
                  </button>
                </div>
                <button className={styles.add}>ADD TO CART</button>
              </div>
              <div className={styles.media}>
                <Image
                  src="/heart.svg"
                  width={19}
                  height={19}
                  alt="add item in like"
                  className={styles.icon}
                />
                <div className={styles.line}></div>
                <Link href="/">
                  <Image src="/facebook.svg" width={19} height={19} alt="facebook" />
                </Link>
                <Link href="/">
                  <Image src="/instagram.svg" width={19} height={19} alt="instagram" />
                </Link>
                <Link href="/">
                  <Image src="/twitter.svg" width={19} height={19} alt="twitter" />
                </Link>
              </div>
              <div className={styles.sku}>
                SKU: <span>{dataItem.count}</span>
              </div>
              <div className={styles.categories}>
                Categories: <span>{dataItem.categories}</span>
              </div>
            </div>
          </div>
          <DescItem
            desc={dataItem.desc}
            id={dataItem._id}
            weight={dataItem.weight}
            dimensions={dataItem.dimensions}
            colours={dataItem.colors}
            material={dataItem.material}
            name={dataItem.name}
          />
          <div className={styles.title}>Similar Items</div>
          <div className={styles.cardWrapper}>
            {jewelryItems?.slice(0, 3).map((item, i) => (
              <ProductCard
                id={item._id}
                key={item._id}
                img={item.img}
                title={item.name}
                price={item.price}
                width={380}
                height={380}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default ItemCard;
