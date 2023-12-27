import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import styles from '../../css/sora/Question.module.css';

const Output = () => {

    const {id} = useParams();
    console.log(id)
    return (
        <div>
            <Header />
            <div className={styles.img}></div>
            <div className={styles.textbox2}>{id}</div>
            <div className={styles.textbox}>
                <input type='text' className={styles.input} readOnly/>
                <div className={styles.text2}>입력하신 정보는 이 용도 이외에 사용되지 않습니다.</div>
                <Link className={styles.input} to={'/sora'}>다시하기</Link>
            </div>
        </div>
    );
};

export default Output;
