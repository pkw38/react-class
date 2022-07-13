import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>Next 만들 때 : npx create-next-app@latest . </div>
      <div>Next 실행 : npm run dev</div>
    </div>
  );
}
