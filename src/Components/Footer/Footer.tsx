import styles from './Footer.module.css';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>
              CONTACT
            </Link>
            <Link href="/" className={styles.link}>
              TERMS OF SERVICES
            </Link>
            <Link href="/" className={styles.link}>
              SHIPPING AND RETURNS
            </Link>
          </div>
          <form action="#" className={styles.form}>
            <input
              type="email"
              name="email"
              required
              placeholder="Give an email, get the newsletter."
              className={styles.input}
            />
            <button type="submit" className={styles.submit}></button>
          </form>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.privacy}>
            <span>© 2021 Shelly</span>. Terms of use <span>and</span> privacy policy.
          </div>
          <div className={styles.social}>
            <Link href="/">
              <Image src="/linkedin.svg" width={19} height={19} alt="linkedin" />
            </Link>
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
        </div>
      </footer>
  );
};

export default Footer;
