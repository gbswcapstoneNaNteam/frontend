import { useEffect, useState } from "react";
import styles from "../css/ad.module.css";
import Lotto from "./ad/lotto";
import Sora from "./ad/sora";
const list = [
    "sora",
    "lotto"
]
const Ad = () => {
    const [rand, setRand] = useState(0);
    
    useEffect(()=>{
        setRand( Math.floor(Math.random() * list.length));
    },[])
    
    return(
        list[rand] === "sora" ?
        <Sora/>
        :
        list[rand] === "lotto" ?
        <Lotto/>
        :
        ""

    )
}

export default Ad;