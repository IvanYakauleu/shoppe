import styles from './page.module.css';
import Image from 'next/image';

const OurStory = () => {
  return (
    <main className={styles.container}>
      <div className={styles.about}>About</div>
      <div className={styles.title}>Who we are and why we do what we do!</div>
      <p className={styles.text}>
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida
        arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna
        maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
        lacus, ac sodales lectus placerat quis.{' '}
      </p>
      <div className={styles.leftTitle}>Top trends</div>
      <Image src="/about1.jpg" width={670} height={300} alt="some image" className={styles.img} />
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat
        hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris
        eget arcu facilisis consequat sed eu felis.{' '}
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>consectetur adipiscing elit. Aliquam placerat</li>
        <li className={styles.listItem}>Lorem ipsum dolor sit amet consectetur </li>
      </ul>
      <div className={styles.leftTitle}>Produced with care</div>
      <Image src="/about2.jpg" width={670} height={300} alt="some image" className={styles.img} />
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat
        hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris
        eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
        in molestie diam bibendu.
      </p>
    </main>
  );
};

export default OurStory;
