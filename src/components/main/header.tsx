import styles from '../../css/main/header.module.css'; 
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
function Header() {
  const location = useLocation();
  const [isurl,setIsUrl] = useState('');

  useEffect(()=>{
    const hash = location.hash;
    setIsUrl(hash);
  },[location])
 
  return (
    <div>
        <header style={isurl == "#sectionOne" || isurl == '' ? {color: 'white'} : {color: 'black'}}>
            <div className={styles.NaN}>NaN</div>
            <div className={styles.ABOUT}>ABOUT</div>
            <div className={styles.CS}>Contact or Support</div>
            <div className={styles.HS}>History</div>
        </header>
    </div>
  );
}

export default Header;
