import styles from './index.module.css';
import clsx from 'clsx';
import NewCard from '../NewCard';

const CreateCard = ({ handleClickClose }) => {

    return (
        <div>
        <div className={styles.head}>
            <div className={styles.modalName}>写留言</div>
            <div className={clsx("icon iconfont close icon-close", styles.iconClose)} onClick={handleClickClose}></div>
        </div>
            <div className={styles.main}>
                <NewCard onHandleClose={handleClickClose} />
            </div>
        </div>
    )
}

export default CreateCard;