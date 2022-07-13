import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const [blogList, setBlogList] = useState([]);
  const router = useRouter();

  const fetchData = async () => {
    const result = await axios.get('/api/blog');
    setBlogList(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickBlog = (id) => () => {
    router.push(`/blog/${id}`);
  };

  return (
    <div>
      블로그 목록입니다.
      {blogList.map((blog) => {
        return (
          <div
            className={styles.blog}
            key={blog.id}
            onClick={clickBlog(blog.id)}
          >
            <div>{blog.title}</div>
          </div>
        );
      })}
    </div>
  );
}
