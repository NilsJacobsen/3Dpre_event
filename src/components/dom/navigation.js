import styles from '../../styles/navigation.module.css'

export default function Navigation (){
  return <div className={styles.navigationItem}>
    <div className={styles.logo}></div>
    <div className={styles.leftContainer}>
      <div className={styles.listItems}>EVENTS</div>
      <div className={styles.listItems}>SCHEDULES</div>
      <div className={styles.listItems}>STATIONS</div>
      <div className={styles.listItems}>ABOUT</div>
    </div>
  </div>
}