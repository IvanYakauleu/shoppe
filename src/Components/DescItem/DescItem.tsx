'use client';

import styles from './DescItem.module.css';
import Rewiew from '../Rewiew/Rewiew';

import dynamic from 'next/dynamic';

const StarRatings = dynamic(() => import('react-star-ratings'), {
  ssr: false,
});

import { useState } from 'react';

interface IDescItemProps {
  desc: string;
  weight: string;
  dimensions: string;
  colours: string[];
  material: string;
  name: string;
}

const DescItem = ({ desc, weight, dimensions, colours, material, name }: IDescItemProps) => {
  const [activeItem, setActiveItem] = useState('Desc');
  const [rating, setRating] = useState<number>(0);

  return (
    <div className={styles.wrap}>
      <ul className={styles.nav}>
        <li
          className={activeItem === 'Desc' ? styles.liActive : styles.li}
          onClick={() => setActiveItem('Desc')}>
          Description
        </li>
        <li
          className={activeItem === 'Info' ? styles.liActive : styles.li}
          onClick={() => setActiveItem('Info')}>
          Aditional information
        </li>
        <li
          className={activeItem === 'Rew' ? styles.liActive : styles.li}
          onClick={() => setActiveItem('Rew')}>
          Reviews(0)
        </li>
      </ul>
      {activeItem === 'Desc' && <p className={styles.desc}>{desc}</p>}
      {activeItem === 'Info' && (
        <div className={styles.info}>
          <div className={styles.item}>
            <span>Weight:</span> {weight}
          </div>
          <div className={styles.item}>
            <span>Dimensions:</span> {dimensions}
          </div>
          <div className={styles.item}>
            <span>Colours:</span> {colours.map((item) => `${item} `)}
          </div>
          <div className={styles.item}>
            <span>Material:</span> {material}
          </div>
        </div>
      )}
      {activeItem === 'Rew' && (
        <div className={styles.wrapper}>
          <div>
            <div className={styles.title}>2 Reviews for {name}</div>

            <Rewiew
              name="Scarlet withch"
              rating={3}
              date="6 May, 2020"
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. "
            />
            <Rewiew
              name="Scarlet withch"
              rating={3}
              date="6 May, 2020"
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. "
            />
          </div>
          <div>
            {' '}
            <div className={styles.title}>Add a Review</div>
            <div className={styles.text}>
              Your email address will not be published. Required fields are marked *
            </div>
            <form action="#" className={styles.form}>
              <textarea
                required
                name="rewiew"
                id="rewiew"
                className={styles.textarea}
                placeholder="Your Review*"></textarea>
              <input required className={styles.input} type="name" placeholder="Enter your name*" />
              <input
                required
                className={styles.input}
                type="email"
                placeholder="Enter your Email*"
              />
              <div className={styles.label}>Your Rating*</div>
              <StarRatings
                rating={rating}
                starRatedColor="black"
                numberOfStars={5}
                starDimension="18px"
                changeRating={setRating}
                starSpacing="2px"
                name={'ratingId'}
              />
              <button type="submit" className={styles.submit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescItem;
