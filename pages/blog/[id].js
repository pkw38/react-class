import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './id.module.css';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState();

  const fetchData = async () => {
    const result = await axios.get(`/api/blog/${id}`);
    setBlog(result.data);
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  if (!blog) {
    return <div>로딩중 입니다......</div>;
  }

  return (
    <div className={styles.blog}>
      <div className={styles.title}>{blog.title}</div>
      <div className={styles.content}>{blog.content}</div>
      <div className={styles.writerWrapper}>
        <div className={styles.writer}>{blog.writer}</div>
        <div className={styles.readtime}>readtime : {blog.readTime}</div>
      </div>
    </div>
  );
}
