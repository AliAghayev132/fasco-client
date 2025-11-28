import styles from "./ProgressBar.module.css"
export const ProgressBar = ({total,current}) =>{
      const percentage = total * current / 100
    return(
        <div className={styles.stock__bar}  >
            <div className={styles.color__bar} style={{width:percentage + "%" }}></div>
        </div>
    )
}