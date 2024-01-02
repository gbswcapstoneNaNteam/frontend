import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import styles from '../../css/sora/Question.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Output = () => {
    const {id} = useParams();
    const [question, setQuestion] = useState('');
    useEffect(()=>{
        axios.get(`/api/random`)
        .then((res)=>{
            console.log(res.data)
            setQuestion(res.data[0].text);
        }).catch((err)=>{
            console.log(err.response);
        })
    },[])

    return (
        <div>
            <Header />
            <div className={styles.img}></div>
            <div className={styles.textbox2}>{id}</div>
            <div className={styles.textbox}>
                <input type='text' className={styles.input} readOnly value={question}/>
                <div className={styles.text2}>입력하신 정보는 이 용도 이외에 사용되지 않습니다.</div>
                <Link className={styles.input} to={'/sora'}>다시하기</Link>
            </div>
        </div>
    );
};

export default Output;
