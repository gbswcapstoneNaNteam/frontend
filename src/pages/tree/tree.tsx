import axios from "axios";
import Ad from "../../components/ad";
import Header from "../../components/header";
import TreeItem from "../../components/tree/treeItem";
import styles from "../../css/tree/tree.module.css";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface List {
    code:number,
    title:string,
    wirtetime: string,
    name: string
}
const Tree = () => {
    const navigate = useNavigate();
    const [list,setList] = useState<List[]>([])

    useEffect(()=>{
        axios.get(`/api/tree`)
        .then((res)=>{
            console.log(res.data)
            setList(res.data)
        }).catch((err)=>{
            console.log(err.response);
        })
    },[]);

    const handleNavigate = () => {
        navigate('/tree/create');
    }

    return(
        <>
        <Header/>
        <div className={styles.layout}>
            <div className={styles.left}>
            <div className={styles.bamboo}></div>
            </div>
            <div className={styles.main}>
              <div className={styles.btnContainer}>
                <button className={styles.btn} onClick={handleNavigate}>쓰기</button>
              </div>
                {
                    list.map((it)=>{
                        return (
                            <TreeItem id={it.code} title={it.title} date={it.wirtetime} name={it.name}/>
                        )
                    })
                }
            </div>
            <div className={styles.right}>
                <Ad/>
            </div>
        </div>
        </>
    )
}


export default Tree;