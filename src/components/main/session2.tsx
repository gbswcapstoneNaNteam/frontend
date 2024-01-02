import styles from '../../css/main/session2.module.css'; 
import vedio1 from '../../videos/랜덤사이트.mp4';
import { Link } from 'react-router-dom';
const Session2 = () => {
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
                    <span>둘째,</span>
                    <br />
                    <span>경소고 대나무숲</span>
                </p>
                <p className={styles.description}>
                    당신의 스트레스를 해결해보세요! 익명성을 보장시켜드립니다.
                </p>
                <p className={styles.link}>
                <strong><Link to='/tree'>보러 가기</Link></strong> 
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
            </div>
        </div>
      );
}

export default Session2;