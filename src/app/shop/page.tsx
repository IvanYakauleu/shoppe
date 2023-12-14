'use client';

import styles from './page.module.css';

import { useState, useEffect, useRef } from 'react';

import ProductCard from '@/Components/ProductCard/ProductCard';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { IJewelry } from '../page';
import { FormEvent } from 'react';

const Shop = () => {
  const [range, setRange] = useState<number | number[]>([0, 5000]);
  const [saleToggle, setSaleToggle] = useState<Boolean>(false);
  const [stockToggle, setStockToggle] = useState<Boolean>(false);
  const [dataItems, setDataItems] = useState<IJewelry[]>();
  const [sortBy, setSortBy] = useState<string>('none');
  const [filterBy, setFilterBy] = useState<string>('none');

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (Array.isArray(range)) {
          const response = await fetch(
            `/api/items?sortBy=${sortBy}&filter=${filterBy}&priceMin=${range[0]}&priceMax=${range[1]}`,
          );
          const data = await response.json();
          setDataItems(data);
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };
    fetchData();
  }, [sortBy, filterBy]);

  const handleSliderChange = (value: number | number[]) => {
    setRange(value);
  };

  const fillerByPrice = async () => {
    if (Array.isArray(range)) {
      try {
        const response = await fetch(
          `/api/items?sortBy=${sortBy}&filter=${filterBy}&priceMin=${range[0]}&priceMax=${range[1]}`,
        );
        const data = await response.json();
        setDataItems(data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }
  };

  const searchSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Array.isArray(range)) {
      try {
        if (searchRef.current) {
          const response = await fetch(
            `/api/items?searchBy=${searchRef.current.value}&sortBy=${sortBy}&filter=${filterBy}&priceMin=${range[0]}&priceMax=${range[1]}`,
          );
          const data = await response.json();
          setDataItems(data);
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.title}>Shop The Latest</div>
      <div className={styles.wrapper}>
        <div className={styles.forms}>
          <form action="#" className={styles.form} onSubmit={(e) => searchSubmit(e)}>
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className={styles.search}
              ref={searchRef}
            />
            <button type="submit" className={styles.submit}></button>
          </form>
          <select
            name="shop by"
            className={styles.sort}
            onChange={(event) => setFilterBy(event.target.value)}>
            <option value="none">Shop By</option>
            <option value="Rings">Rings</option>
            <option value="Earrings">Earrings</option>
            <option value="Necklaces">Necklaces</option>
            <option value="Bracelets">Bracelets</option>
            <option value="Piercings">Piercings</option>
          </select>
          <select
            name="Sort by"
            className={styles.sort}
            onChange={(event) => setSortBy(event.target.value)}>
            <option value="none">Sort By</option>
            {/* <option value="popularity">Popularity</option>
            <option value="newness">Newness</option> */}
            <option value="priceW">Price -</option>
            <option value="priceQ">Price +</option>
            <option value="ratingW">Rating -</option>
            <option value="ratingQ">Rating +</option>
          </select>
          <Slider
            range
            min={0}
            max={5000}
            step={10}
            value={range}
            onChange={handleSliderChange}
            className={styles.slider}
          />
          <div className={styles.priceWrapper}>
            <div className={styles.price}>
              Price: ${Array.isArray(range) ? range[0] : null} - $
              {Array.isArray(range) ? range[1] : null}
            </div>
            <button className={styles.filter} onClick={fillerByPrice}>
              Filter
            </button>
          </div>
          <div className={styles.toggleWrapper}>
            <div className={styles.text}>On sale</div>
            <div className={styles.toggle} onClick={() => setSaleToggle(!saleToggle)}>
              <div
                className={styles.ball}
                style={saleToggle ? { right: '4px' } : { left: '4px' }}></div>
            </div>
          </div>
          <div className={styles.toggleWrapper}>
            <div className={styles.text}>In stock</div>
            <div className={styles.toggle} onClick={() => setStockToggle(!stockToggle)}>
              <div
                className={styles.ball}
                style={stockToggle ? { right: '4px' } : { left: '4px' }}></div>
            </div>
          </div>
        </div>
        <div className={styles.cardWrapper}>
          {dataItems?.map((item) => (
            <ProductCard
              id={item._id}
              key={item._id}
              img={item.img}
              title={item.name}
              price={+item.price}
              width={300}
              height={300}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
