import styles from '../css/main/header.module.css'; 
import { Link, useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
function Header() {
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
      <header className={styles.header} style={isurl == "#main" || isurl == '' ? {color: 'white'} : {color: 'black'}}>
          <div className={styles.NaN} onClick={()=>{window.location.href = "/"}}>NaN</div>
          <div className={styles.ABOUT}><Link to={"/sora"}>SORA</Link></div>
          <div className={styles.CS}><Link to={"/tree"}>BAMBOO</Link></div>
          <div className={styles.HS}><Link to={"/lotto"}>LOTTO</Link></div>
      </header>
  );
}

export default Header;
