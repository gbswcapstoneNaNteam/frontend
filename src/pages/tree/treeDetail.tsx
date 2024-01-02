import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../../css/tree/treeDetail.module.css";
import Header from "../../components/header";
import Ad from "../../components/ad";
import axios from "axios";
const TreeDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({
        title: "전병우는 어떻게 JBW가 되었는가",
        content: "전병우가 JBW가 된 이유는 코렌예거가 기억을 개변 시켰기 때문이다.",
        wirtetime: "2024-01-01",
        name: "김찬민"
    });
    useEffect(()=>{
        axios.get(`/api/tree/${id}`)
        .then((res)=>{
            console.log(res.data)
            setDetail(res.data[0]);
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
                <div className={styles.title}>
                    {detail.title}
                </div>
                <div className={styles.middleLine}>
                    <div>{detail.name}</div>
                    <div>{detail.wirtetime}</div>
                </div>
                <div className={styles.content}>
                    {detail.content}
                </div>
            </div>
            <div className={styles.right}>
                <Ad/>
            </div>
        </div>
        </>
    )
}


export default TreeDetail;