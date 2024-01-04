import React, { useState } from 'react';
import styles from '../../css/tree/treeInput.module.css';
import Header from '../../components/header';
import Ad from '../../components/ad';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const TreeInput = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = () => {
    axios.post("/api/tree/create",{
      title,
      content,
      name: userName,
      password: userPassword,
      wirtetime: date
    }).then((res)=>{
      alert("등록에 성공하였습니다.");
      navigate("/tree");
    }).catch((err)=>{
      alert("등록에 실패하였습니다.");
      navigate("/tree");

    })
  };

  return (
    <>
    <Header/>
    <div className={styles.layout}>
    <div className={styles.left}>
    <div className={styles.bamboo}></div>
    </div>
    <div className={styles.main}>
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
        <input type="date" id="date" readOnly name="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <button className={styles.btn} type="submit" onClick={handleSubmit}>등록</button>
      </div>
    </div>
    <div className={styles.right}>
      <Ad/>
    </div>
    </div>
    </>
  );
};

export default TreeInput;