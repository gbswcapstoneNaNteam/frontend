import styles from "../../css/tree/treeItem.module.css";
import { useNavigate } from "react-router-dom";

const TreeItem = (props : {id:number,title:string,name:string,date:string}) => {
    const navigate = useNavigate();
    const handleLinkOnClick = () => {
        navigate(`/tree/${props.id}`);
    }
    console.log(props.id)
    return(
        <div className={styles.item} onClick={handleLinkOnClick}>
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.bottomItem}>
                <div>{props.name}</div>
                <div>{props.date}</div>
            </div>
        </div>
    )
}

export default TreeItem;