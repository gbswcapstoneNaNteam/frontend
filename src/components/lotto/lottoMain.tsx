import styles from '../../css/lotto/lotto.module.css';
const LottoMain = () =>{
    return(
        <div>
            <div className={styles.bannerImg}/>
            <div className={styles.movingTextContainer}>
                <div className={styles.movingText}>Web Treasure Find</div>
            </div>
            <div className={styles.bottomBanner}>
                <div className={styles.lottoTitle}>LOTTO</div>
                <div className={styles.titleLotto}>로또번호 생성기</div>
            </div>
        </div> 
    )
}


export default LottoMain;