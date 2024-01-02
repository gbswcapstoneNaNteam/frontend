import styles from '../../css/main/session1.module.css'; 
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';

const Title = () => {
  const location = useLocation();
  const [isurl,setIsUrl] = useState('');

  useEffect(()=>{
    const hash = location.hash;
    if(location.pathname === "/"){
      setIsUrl(hash);
    }else{
      setIsUrl("123");
    }

  },[location])

  return (
    <div>
        <p className={styles.title} style={isurl == "#sectionOne" || isurl == '' ? {display: 'none'} : {color: 'black'}}>
            <span><strong>Direct</strong></span>
            <br/>
            <span><strong>Load</strong></span>
          </p>
    </div>
  );
}

export default Title;
