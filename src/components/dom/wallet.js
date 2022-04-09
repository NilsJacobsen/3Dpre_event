import styles from '../../styles/wallet.module.css'
import Avatar from 'react-avatar';

export default function Wallet ({collectedUser}) {
    return <div className={styles.walletContainer}>
        {collectedUser.map((user, index) => (
            <a href={"https://ww.youtube.com"} key={index} className={styles.walletCard}>
                <div className={styles.firstContainer}>
                    <div className={styles.profilImage}>
                        <Avatar name={user.replace("_", " ")} />
                    </div>
                </div>
                <div className={styles.secondContainer}>
                    <div className={styles.name}>{user}</div>
                    <div className={styles.desc}>Firstname: Peter</div>
                    <div className={styles.desc}>Lastname: Lustig</div>
                </div>
            </a>
        ))}
    </div>  
}