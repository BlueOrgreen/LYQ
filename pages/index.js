import { useEffect, useRef, useState } from 'react';
import clsx from "clsx";
import styles from './index.module.css';
import { selectModalState, setMessageType, setCardItem } from "../store/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { labelMap, bgColorMap } from '../utils/data';
import ReactRotatingText from "react-rotating-text";
import NoteCard from '../components/NoteCard';
import { useTransition, animated } from "@react-spring/web";
import { note } from '../mock/index'
import YFModal from '../components/YFModal';
import CreateCard from '../components/CreateCard';
import ModifyCard from '../components/ModifyCard';


export default function Home(props) {
  const modalRef = useRef();
  const { cardData } = props;
  const [activeKey, setActiveKey] = useState()
  const [bottom, setBottom] = useState(30)
  const [openType, setOpenType] = useState() // 打开卡片的类型
  const modalState = useSelector(selectModalState);
  const messageType = modalState.messageType;
  const dispatch = useDispatch();
  const cardsRef = useRef();
  const transition = useTransition(true, {
    from: { opacity: 0, transform: 'translate3d(0, 30%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    config: {
      duration: 500,
    },
    delay: 300,
  })

  const handleClickMessageType = (type) => {
    dispatch(setMessageType(type))
  }

  const handleScrollBottom = () => {
    // 距离顶部高度
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 屏幕高度
    const clientHeight = document.documentElement.clientHeight;
    // 内容高度
    const scrollHeight = document.documentElement.scrollHeight;
    if (scrollTop + clientHeight + 200 >= scrollHeight) {
      setBottom(scrollTop + clientHeight + 250 - scrollHeight)
    } else if(bottom !== 30) {
      setBottom(30)
    } else {
      return;
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollBottom)

    return () => {
      window.removeEventListener("scroll", handleScrollBottom)
    }
  }, [])

  const openModal = (type) => {
    const { setVisible } = modalRef.current;
    if(type === "create") {
      // 创建卡片
      setOpenType("create")
      setActiveKey("")
    } else {
      // 修改卡片

      setOpenType("detail")
    }
    setVisible(true)
  }

  const closeModal = () => {
    const { setVisible } = modalRef.current;
    setVisible(false)
  }

  const onHandClickNote = (props) => {
    const { id, myKey } = props;
    // console.log('查看详情 ', id);
    openModal("detail")
    setActiveKey(myKey)
  }

  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <div>留言墙</div>
        <div>
          <ReactRotatingText
            typingInterval={100}
            items={[
              "欢迎进来的朋友",
              "可以的话 ",
              "帮忙在我的草坪踩一踩 ",
              "踩一踩的朋友今年一定能暴富! "
            ]}
          />
        </div>
      </div>
      {transition((style, i) => (
        <animated.div style={{
          ...style,
        }}> 
          <div className={styles.label}>
                  {labelMap[0].map((item) => (
                    <p
                      className={item.key === messageType ? styles.selected : ""}
                      onClick={() => handleClickMessageType(item.key)}  
                    >{item.name}</p>
                  ))}
            </div>
          <div ref={cardsRef} className={styles.cards}>
              {cardData.map((item, index) => {
                return (
                  <NoteCard
                    handClickNote={onHandClickNote}
                     {...item}
                     activeKey={activeKey}
                    />
                )
              })}
          </div>
        </animated.div>
      ))}
          <YFModal ref={modalRef}>
            {openType === "create" ? 
              <CreateCard handleClickClose={closeModal} />
              : <ModifyCard handleClickClose={closeModal} />}
          </YFModal>
      <div className={styles.add} onClick={() => openModal("create")} style={{ bottom }}>
        <div className={clsx("icon iconfont icon-add")}></div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('https://.../posts');
  // const posts = await res.json();
  console.log('noteData', note.data);
  return {
    props: {
      cardData: JSON.parse(JSON.stringify(note.data.map((item, index) => {
        return {
          ...item,
          bgColor: bgColorMap[index % 6],
        }
      }))),
    },
  };
}
