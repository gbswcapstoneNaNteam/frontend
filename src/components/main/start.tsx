import styles from '../../css/main/start.module.css'; 

const Start = () => {
  return (
    <div className={styles.container}>   
      <div className={styles.contentContainer}>
        <div className={styles.web}>
          <div className={styles.webTitle}>
            Web
          </div>
        </div>
        <div className={styles.treasure}>
          <div>Treasure</div>
        </div>
        <div className={styles.find}>
          <div>Find</div>
        
        <div className={styles.text}>
          <div className={styles.textTitle}>
            WE'RE ON A MISSION TO LEAD<br/>
            PEOPLE TO A BETTER TOMORROW<br/>
            THROUGH OUR STORIES.
          </div>
        </div>
        <div className={styles.text2}>NaN은 양질의 콘텐트를 제작하는 것을 넘어<br></br>
          다양한 이야기로 라이프스타일을 제안하며,<br></br>
          사람들의 세상을 더욱 진취적으로 이끌어갑니다.</div>
      </div>
      </div>
    </div>
  );
};

export default Start;