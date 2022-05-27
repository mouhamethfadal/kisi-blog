import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => window.open('https://www.getkisi.com', '_blank') }>About Kisi</div>
      <div onClick={() => window.open('https://www.getkisi.com/how-it-works', '_blank')}>Learn how Kisi works</div>
    </div>
  );
};
