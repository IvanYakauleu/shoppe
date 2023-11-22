import styles from './ProductCard.module.css';

import Image from 'next/image';
import Link from 'next/link';

import { IMassCard } from '@/app/page';

export interface IProductCardProps extends IMassCard {
  width: 300 | 380;
  height: 300 | 380;
  id: string;
}

const ProductCard = ({ id, img, title, price, width, height }: IProductCardProps) => {
  return (
    <div className={styles.card} style={{ width: `${width}px` }}>
      <div className={styles.wrapper}>
        <Image src={img} width={width} height={height} alt={title} className={styles.img} />
        <div className={styles.hover}>
          <Image
            src="/cart.svg"
            width={25}
            height={25}
            alt="add item to cart"
            className={styles.icon}
          />
          <Link href={`/shop/${id}`}>
            <Image src="/eye.svg" width={25} height={25} alt="show item" className={styles.icon} />
          </Link>
          <Image
            src="/heart.svg"
            width={25}
            height={25}
            alt="add item in like"
            className={styles.icon}
          />
        </div>
      </div>
      <Link href={`/shop/${id}`}>
        <div className={styles.title}>{title}</div>
      </Link>
      <div className={styles.price}>$ {price}</div>
    </div>
  );
};

export default ProductCard;
