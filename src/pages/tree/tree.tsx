import axios from "axios";
import Ad from "../../components/ad";
import Header from "../../components/header";
import TreeItem from "../../components/tree/treeItem";
import styles from "../../css/tree/tree.module.css";
import { useState,useEffect } from "react";
const Tree = () => {
    const [list,setList] = useState([
        {
            code: 1,
            title: "왜 전병우는  JBW가 되었는가",
            wirtetime: "2024-01-01", 
            name: "김찬민"
        },
        
        
    ])

    useEffect(()=>{
        axios.get(`/api/tree`)
        .then((res)=>{
            console.log(res.data)
            setList(res.data)
        }).catch((err)=>{
            console.log(err.response);
        })
    },[])
    return(
        <>
        <Header/>
        <div className={styles.layout}>
            <div className={styles.left}>
            <div className={styles.bamboo}></div>
            </div>
            <div className={styles.main}>
              <div className={styles.btnContainer}>
                <button className={styles.btn}>쓰기</button>
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