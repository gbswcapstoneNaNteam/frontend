import styles from "../css/ad.module.css";
import Lotto from "./ad/lotto";
import Sora from "./ad/sora";
const list = [
    "sora",
    "lotto"
]
const Ad = () => {
    const rand = Math.floor(Math.random() * list.length);
    
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