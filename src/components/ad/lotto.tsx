import styles from "../../css/ad/sora.module.css";
import { Link } from "react-router-dom";
const Lotto = () => {
    return(
        <Link to={"/lotto"} className={styles.main}>
            <div className={styles.lotto}>?</div>
            <div className={styles.title}>
            로또번호 추첨
            </div>
            <div className={styles.content}>
            당신의 행운을 테스트해보세요! 큰 행운엔 큰 책임이 따른 다는건 명심 해야겠죠?
            </div>
        </Link>
    )
}


export default Lotto;