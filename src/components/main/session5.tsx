import styles from '../../css/main/session5.module.css'; 
import vedio1 from '../../videos/뾰로로롱.mp4';

const Session5 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.video}>
                    <video muted autoPlay loop>
                        <source src={vedio1} type="video/mp4"/>
                        <strong>Your browser does not support the video tag.</strong>
                    </video>
                </div>
                <div className={styles.moem}>
                <p className={styles.subtitle}>
                    <span>첫째,</span>
                    <br />
                    <span>마법의 소라고동</span>
                </p>
                <p className={styles.description}>
                    당신의 고민거리를 해결해보세요! 좋은 해답을 얻을지도 모르겠습니다.
                </p>
                <p className={styles.link}>
                <strong><a href='asdasd'>보러 가기</a></strong> 
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

export default Session5;