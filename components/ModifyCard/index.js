import NoteCard from '../NoteCard';
import YFButton from '../YFButton';
import styles from './index.module.css';
import clsx from 'clsx';

const ModifyCard = ({ handleClickClose }) => {

    return (
        <div className={styles.modifyCard}>
             <div className={styles.head}>
            <div className={styles.modalName}>联系墙主撕掉该便签</div>
            <div className={clsx("icon iconfont close icon-close", styles.iconClose)} onClick={handleClickClose}></div>
        </div>
            <div className={styles.main}>
                <div className={styles.card}>card</div>
                <div className={styles.comment}>
                    <textarea placeholder="请输入内容..." className={styles.message} maxLength={96}></textarea>
                    <div>
                        <input placeholder='可以输入你的名称😌' />
                        <YFButton>评论</YFButton>
                    </div>
                </div>
                <div className={styles.commentContent}>
                    <div><span>评论 &nbsp;</span><span>123</span></div>
                    <div className={styles.content}>
                        <li>
                            <div className='tw-mr-[10px]'>
                                <div className={styles.avator} />
                            </div>
                            <div className='tw-flex tw-justify-between tw-flex-col'>
                                <div className={styles.title}>
                                    <span>匿名</span>
                                    <span>2022.08.24 14:32</span>
                                </div>
                                <div className={styles.inner}>
                                    顾名思义,方便粘贴在书本墙上以及家中办公室等地方,
                                    上面可以记录一些备忘录文字,主要就是提示(警示鼓舞)作用,
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='tw-mr-[10px]'>
                                <div className={styles.avator} />
                            </div>
                            <div className='tw-flex tw-justify-between tw-flex-col'>
                                <div className={styles.title}>
                                    <span>匿名</span>
                                    <span>2022.08.24 14:32</span>
                                </div>
                                <div className={styles.inner}>
                                    顾名思义,方便粘贴在书本墙上以及家中办公室等地方,
                                    上面可以记录一些备忘录文字,主要就是提示(警示鼓舞)作用,
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='tw-mr-[10px]'>
                                <div className={styles.avator} />
                            </div>
                            <div className='tw-flex tw-justify-between tw-flex-col'>
                                <div className={styles.title}>
                                    <span>匿名</span>
                                    <span>2022.08.24 14:32</span>
                                </div>
                                <div className={styles.inner}>
                                    顾名思义,方便粘贴在书本墙上以及家中办公室等地方,
                                    上面可以记录一些备忘录文字,主要就是提示(警示鼓舞)作用,
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModifyCard;