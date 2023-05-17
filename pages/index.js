import Head from 'next/head'
import clsx from "clsx";
import styles from './index.module.css';
import YFButton from '../components/YFButton';

export default function Home() {
  return (
    <div className={styles.home}>
      <YFButton>按钮</YFButton>
     
    <div className="tw-text-blue-600">
      111 哈哈哈
      <YFButton size="big">11</YFButton>
      <YFButton size="small">11</YFButton>
    </div>
    <div className="tw-text-gray-400 tw-font-kaiti">
      222 哈哈哈
    </div>
    <div className="tw-text-link-color">
      333 哈哈哈
    </div>
    <div>
      444
      <span className={clsx("icon iconfont icon-close-circle-fill", styles.icon)}></span>
    </div>
    
    </div>
  )
}
