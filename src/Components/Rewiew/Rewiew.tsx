import styles from './Rewiew.module.css';

import dynamic from 'next/dynamic';

const StarRatings = dynamic(() => import('react-star-ratings'), {
  ssr: false,
});

interface IRewiewProps {
  name: string;
  date: string;
  rating: number;
  desc: string;
}

const Rewiew = ({ name, date, rating, desc }: IRewiewProps) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <StarRatings
        rating={rating}
        starRatedColor="black"
        numberOfStars={5}
        starDimension="18px"
        starSpacing="2px"
        name={'ratingId'}
      />
      <p className={styles.desc}>{desc}</p>
    </>
  );
};

export default Rewiew;
