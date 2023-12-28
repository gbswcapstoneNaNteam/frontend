import styles from '../css/main/header.module.css'; 
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
function Header() {
  const location = useLocation();
  const naviagte = useNavigate();
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
      <header className={styles.header} style={isurl == "#sectionOne" || isurl == '' ? {color: 'white'} : {color: 'black'}}>
          <div className={styles.NaN} onClick={()=>{window.location.href = "/"}}>NaN</div>
          <div className={styles.ABOUT}>ABOUT</div>
          <div className={styles.CS}>Contact or Support</div>
          <div className={styles.HS}>History</div>
      </header>
  );
}

export default Header;
