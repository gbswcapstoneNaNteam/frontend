import styles from '../../css/main/session3.module.css'; 
import vedio1 from '../../videos/lotto.mp4';
import { Link } from 'react-router-dom';
const Session3 = () => {
    return (
        <div className={styles.container}>
            <div >
                <div className={styles.video}>
                    <video muted autoPlay loop>
                        <source src={vedio1} type="video/mp4"/>
                        <strong>Your browser does not support the video tag.</strong>
                    </video>
                </div>
                <div className={styles.moem}>
                <p className={styles.subtitle}>
                    <span>셋째,</span>
                    <br />
                    <span>로또번호 추첨</span>
                </p>
                <p className={styles.description}>
                    당신의 행운을 테스트해보세요! 큰 행운엔 큰 책임이 따른 다는건 명심 해야겠죠?
                </p>
                <p className={styles.link}>
                <strong><Link to='/lotto'>보러 가기</Link></strong> 
                </p>
                </div>
                <svg
                    width="2"
                    height="337"
                    viewBox="0 0 2 337"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.svg}
                    preserveAspectRatio="none"
                >
                    <path d="M0.822998 0L0.88973 336.381" stroke="black"></path>
                </svg>
                <p className={styles.number1}>
                    06
                </p>
                <p className={styles.number2}>
                    01
                </p>
            </div>
        </div>
      );
}

export default Session3;