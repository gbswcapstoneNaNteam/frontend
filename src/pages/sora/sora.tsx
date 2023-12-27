import Header from '../../components/header';
import styles from '../../css/sora/sora.module.css';
import { Link } from 'react-router-dom';

const Sora = () => {

    return (
        <div>
            <Header></Header>
            <div className={styles.img}></div>
            <div className={styles.textbox}>
                <div className={styles.text}>[마법의 소라고동]당신의 고민을 여기 털어놓아봐요!</div>
                <div className={styles.button}><Link to={'/sora/Question'}>시작하기 -{">"}</Link></div>
            </div>
        </div>
    );
};

export default Sora;