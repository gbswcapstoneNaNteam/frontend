import styles from "../../css/ad/sora.module.css";
import { Link } from "react-router-dom";
const Sora = () => {
    
    return(
        <Link to={"/sora"} className={styles.main}>
            <div className={styles.sora}></div>
            <div className={styles.title}>
            마법의 소라고동
            </div>
            <div className={styles.content}>
            당신의 고민거리를 해결해보세요! 좋은 해답을 얻을지도 모르겠습니다.
            </div>
        </Link>
    )
}


export default Sora;