import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import NavHeader from '../NavHeader/NavHeader';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link href="/">
        <h1 className={styles.logo}>
          <span>S</span>HOPPE
        </h1>
      </Link>
      <div className={styles.menuWrapper}>
        <NavHeader />
        <div className={styles.line} />
        <Link className={styles.icon} href="/">
          <Image src="/search.svg" width={19} height={19} alt="search" />
        </Link>
        <Link className={styles.icon} href="/">
          <Image src="/cart.svg" width={19} height={19} alt="cart" />
        </Link>
        <Link className={styles.icon} href="/">
          <Image src="/user.svg" width={19} height={19} alt="user" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
