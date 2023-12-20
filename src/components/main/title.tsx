import styles from '../../css/main/session1.module.css'; 

const Title = () => {
  return (
    <div>
        <p className={styles.title}>
            <span><strong>Direct</strong></span>
            <br/>
            <span><strong>Load</strong></span>
          </p>
    </div>
  );
}

export default Title;
