import styles from './SliderItem.module.css';

import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface ISliderItemProps {
  img: StaticImageData;
  title: string;
  price: number;
}

const SliderItem = ({ img, title, price }: ISliderItemProps) => {
  return (
    <>
      <article className={styles.item}>
        <Image src={img} width={1248} height={646} alt="slider Image" className={styles.img} />
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>$ {price.toFixed(2)}</div>
        <button className={styles.button}>View Product</button>
      </article>
    </>
  );
};

export default SliderItem;
