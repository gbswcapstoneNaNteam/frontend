import { useState } from "react";
import styles from "../../css/tree/treeDel.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const TreeDel = (props:{code:string | undefined,onClose:any | undefined}) => {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const handleOnClick = () => {
        setName("");
        setPassword("");
        props.onClose(false);
    }

    const handleOnClickDelete = () => {
        axios.delete(`/api/tree/${props.code}/delete`)
        .then((res)=>{
            alert("삭제에 성공했습니다.")
            setName("");
            setPassword("");
            props.onClose(false);
            navigate("/tree");
        }).catch((err)=>{
            alert("삭제에 실패했습니다.")
            setName("");
            setPassword("");
            props.onClose(false);
            navigate("/tree");
        })
    }
    return(
        <div className={styles.container}>
        <div className={styles.close}><svg onClick={handleOnClick} className={styles.x} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path></svg></div>
        <div className={styles.inputs}>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="username"></input>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder=" userpassword"></input>
        </div>
        <div className={styles.deletes}>
            <button className={styles.btnDelete} onClick={handleOnClickDelete}>삭제</button>
        </div>
        </div>
    )
}


export default TreeDel;