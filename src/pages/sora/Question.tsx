import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import styles from '../../css/sora/Question.module.css';

const Question = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <Header />
            <div className={styles.img}></div>
            <div className={styles.textbox2}>당신의 고민이나 소원을 말해주세요! (단, 20자 내외)</div>
            <div className={styles.textbox}>
                <input type='text' className={styles.input} value={inputValue} onChange={handleInputChange}
                />
                <div className={styles.text2}>입력하신 정보는 이 용도 이외에 사용되지 않습니다.</div>
                <Link className={styles.input} to={`/sora/Question/output/${inputValue}`}>확인</Link>
            </div>
        </div>
    );
};

export default Question;
