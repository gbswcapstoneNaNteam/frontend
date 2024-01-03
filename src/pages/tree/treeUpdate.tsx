import React, { useEffect, useState } from 'react';
import styles from '../../css/tree/treeInput.module.css';
import Header from '../../components/header';
import Ad from '../../components/ad';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const TreeUpdate = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const [detail, setDetail] = useState({
    title: "전병우는 어떻게 JBW가 되었는가",
    content: "전병우가 JBW가 된 이유는 코렌예거가 기억을 개변 시켰기 때문이다.",
    wirtetime: "2024-01-01",
    name: "김찬민"
});
  useEffect(()=>{
    axios.get(`/api/tree/${id}`)
    .then((res)=>{
        setTitle(res.data[0].title);
        setContent(res.data[0].content);
        setDate(res.data[0].wirtetime);
    }).catch((err)=>{
        console.log(err.response);
    })
},[])


  const handleSubmit = () => {
    axios.post(`/api/tree/${id}/update`,{
      title,
      content,
      name: userName,
      password: userPassword,
      wirtetime: date
    }).then((res)=>{
      console.log("등록에 성공하였습니다.");
      navigate("/tree");
    }).catch((err)=>{
      console.log("등록에 실패하였습니다.");
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
      <div className={styles.form}>
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

        <button className={styles.btn} type="button" onClick={handleSubmit}>수정</button>
      </div>
    </div>
    <div className={styles.right}>
      <Ad/>
    </div>
    </div>
    </>
  );
};

export default TreeUpdate;