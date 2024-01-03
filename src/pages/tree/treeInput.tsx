import React, { useState } from 'react';
import styles from '../../css/tree/treeInput.module.css';

const TreeInput = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = () => {
    console.log('제목:', title);
    console.log('내용:', content);
    console.log('작성자:', userName);
    console.log('비밀번호:', userPassword);
    console.log('등록일:', date);
  };

  return (
    <div className={styles.container}>
      <h2>게시글 등록 폼</h2>
      <div className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="title">제목:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label htmlFor="content">내용:</label>
        <textarea id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)} required />

        <label htmlFor="userName">작성자:</label>
        <input type="text" id="userName" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} required />

        <label htmlFor="userPassword">비밀번호:</label>
        <input type="password" id="userPassword" name="userPassword" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} required />

        <label htmlFor="date">등록일:</label>
        <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <button className={styles.btn} type="submit" onClick={handleSubmit}>등록</button>
      </div>
    </div>
  );
};

export default TreeInput;