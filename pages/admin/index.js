import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const submit = async (event) => {
    event.preventDefault();
    axios.post('/api/blog', {
      title: event.target.title.value,
      content: event.target.content.value,
      readTime: event.target.readTime.value,
      writer: 'me',
    });
  };
  return (
    <div>
      <div>관리자 페이지 입니다.</div>
      <form onSubmit={submit}>
        <div>
          제목 : <input name='title' />
        </div>
        <div>
          <div>글 내용</div>
          <textarea name='content' />
        </div>
        <div>
          읽는 시간 : <input type='number' name='readTime' min='1' max='100' />
        </div>
        <input type='submit' value='제출' />
      </form>
    </div>
  );
}
