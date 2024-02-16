import {useEffect} from 'react'
import ReactPlayer from 'react-player'


const Video = () => {

    const shineDivStyle = {
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '24px',
        padding: '4px',
        whiteSpace: 'nowrap',
        textAlign:'center',
    }

    // 一文字ずつの配列にした文字列。
    const str = [
        ...`プログラミング技術を磨き
    人々の日々に貢献したい

    片岡慎吾 ポートフォリオサイト`
    ].map(row => {
        return (row === `\n`) ? <br /> : row
    })


    // 文字一つ一つに時間差をつけて、アニメメーションのclassを付ける。
    let delay = 0
    const start = () => {
        str.map((row, index) => {
        delay =(typeof row !== "string")? delay + 0.35 : delay + 0.02
        const elem = document.getElementById(`shine${index}`)
        setTimeout(() => {
            elem.classList.add('shine_anime')
        }, 1000 * delay)
        })
    }

    // アニメーションを付ける関数を開始。
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            start()
        }, 500)
        // return clearTimeout(timeoutID)
    }, [])



  return (<>
    <style>{`
      @keyframes glow_anime_on{
        0% { opacity:0; text-shadow: 0 0 0 #fff,0 0 0 #fff;}
        30% {
            opacity:1;
            text-shadow:
              0 0 2px #fff,
              0 0 4px #fff,
              0 0 6px #fff,
              0 0 8px #fff,
              0 0 15px #fff;
        }
        100% {
          opacity:1;
          text-shadow:
            0 0 2px #ffc,
            0 0 7px #ffc,
            0 0 7px #ffc,
            0 0 8px #ffc;
            0 0 15px #ffc;
        }
      }
      span.shine {
        opacity: 0;
        color: rgba(255,255,220,0.5) !important;
        font-family: "ヒラギノ明朝 ProN";
      }
      span.shine_anime {
        animation: glow_anime_on 1.6s ease-out forwards;
      }
    `}</style>


     <div style={{position:'relative', outline:'red 1px saolid', padding:0, margin:0}}>

      <ReactPlayer url="./movies/building_night.mp4" id="MainPlay" playing={true} muted={true} loop controls={false} width="100%" height="auto" />

        {/* 光るテキストの背景色。微妙に暗くする。 */}
        <div style={{
            ...shineDivStyle,
            filter:'blur(7px)',
            background:'rgba(0,0,0,0.3)',
            color: 'transparent',
        }}>{str.map((row, index) => (
            <span key={index} style={{color:'#0000'}}>{row}</span>
        ))}</div>

        {/* 光る文字本体。 */}
        <div style={shineDivStyle}>{str.map((row, index) => (
            <span key={index} id={`shine${index}`}  className={`shine`}>{row}</span>
        ))}</div>

    </div>
  </>)
}

export default Video
