import axios from 'axios';
import Header from '../../components/header';
import styles from '../../css/lotto/lotto.module.css';
import { useState } from 'react';

const Lotto = () => {
    const [cnt,setCnt] = useState(1);
    const [lottoBall,setLottoBall] = useState(
    [
    [1,2,3,4,5,6,7],
    [3,4,5,6,7,8,9],
    [1,39,28,45,42,23,10]
    ]
    );
    const upCnt = () => {
        if(cnt >= 100){
            setCnt(100);
            return;
        }
        setCnt(cnt + 1);
    }

    const downCnt = () => {
        if(cnt <= 1){
            setCnt(1);
            return;
        }
        setCnt(cnt - 1);
    }

    const changeNum = (e:React.ChangeEvent<HTMLInputElement>) => {
        const num = Number(e.target.value);
        if(num > 100){
            setCnt(100);
            return;
        }else if(num < 1){
            setCnt(1);
            return;
        }else{
            setCnt(num);
        }
    }

    const colorList = [
        "#fbc400",
        "#69c8f2",
        "#ff7272",
        "#aaa",
        "#aaa",
        "#b0d840",
        "#fbc400"
    ]

    const handleOnclick = () => {
        axios.post(`/api/lotto`,{
            num: cnt
        })
        .then((res)=>{
            console.log(res.data)
            setLottoBall(res.data);
        }).catch((err)=>{
            console.log(err.response);
        })
    }
    return(
        <div>
            <div className={styles.lottoContainer}>
                <h1 className={styles.title}>로또번호 추첨기</h1>
                <div className={styles.inputContainer}>
                    <div className={styles.cnt}>
                        <input type="number" max={100} min={1} value={cnt} onChange={changeNum} className={styles.inputNum}/>
                        <label className={styles.dog}>개</label>
                        <div className={styles.upAndDown}>
                            <div className={styles.up} onClick={upCnt}>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg>
                            </div>
                            <div className={styles.down} onClick={downCnt}>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <button className={styles.btn} onClick={handleOnclick}>
                    추첨하기
                    </button>
                </div>
            </div>
            <div className={styles.lottoOutputContainer}>
                <div className={styles.lottocenter}>
                    {
                        lottoBall.map((it)=>{
                            return(
                                <div className={styles.lottoList}>
                                {
                                    it.map((it,idx)=>{
                                        
                                        return(
                                            <>
                                            {
                                                idx == 6 ? <div className={styles.num7}>+</div> : ""
                                            }
                                            <div className={styles.ball} style={{
                                                backgroundColor: colorList[idx]
                                            }}>{it}</div>
                                            </>
                                        )
                                    }
                                    
                                    )
                                }
                                </div>
                            )
                        })
                    }          
                </div>
            </div>
        </div>
    )
}

export default Lotto;