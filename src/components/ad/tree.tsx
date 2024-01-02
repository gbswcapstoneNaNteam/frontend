import styles from "../../css/ad/sora.module.css";
import { Link } from "react-router-dom";
const Tree = () => {
    return(
        <Link to={"/tree"} className={styles.main}>
            <div className={styles.tree}></div>
            <div className={styles.title}>
            경소고 대나무숲
            </div>
            <div className={styles.content}>
            당신의 스트레스를 해결해보세요! 익명성을 보장시켜드립니다.
            </div>
        </Link>
    )
}


export default Tree;