import {useEffect} from 'react'
import ReactPlayer from 'react-player'


const VideoImage = () => {

    const shineDivStyle = {
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '17px',
        padding: '4px',
        whiteSpace: 'nowrap',
        textAlign:'center',
    }

    // 一文字ずつの配列にした文字列。
    const strArr = [
        [...`プログラミング技術を磨き`], <br />,
        [...`人々の日々に貢献したい`], <br />,
        <br />,
        [...`片岡慎吾 ポートフォリオサイト`]
    ]
    // 上記文字列を文字数lenごとに区切った配列を取得。
    const len = 4
    const str = []
    let strI = 0
    strArr.map(rows => {
        let count = 0
        // 文字列配列なら、len文字ごとに配列strに入れる。
        if ( Array.isArray(rows) ) {
            rows.map(row => {
                if (str[strI] === undefined) str[strI] = ''
                str[strI] += row
                // len文字ごとに配列strのキーを次にする。
                if (count % len === 0) strI++
                count++
            })
            // 終われば配列strのキーを次　にする。
            strI++
        // <br />なら、配列strに<br />を入れて次のキーにする。
        } else {
            str[strI] = <br />
            strI++
            return
        }

    })


    // 文字一つ一つに時間差をつけて、アニメメーションのclassを付ける。
    let delay = 0
    const start = () => {
        str.map((row, index) => {
        delay =(typeof row !== "string")? delay + 0.35 : delay + 0.02*len
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

      <img src="/images/video.png" />

        {/* 光るテキストの背景色。微妙に暗くする。 */}
        <div style={{
            ...shineDivStyle,
            filter:'blur(7px)',
            background:'rgba(0,0,0,0.3)',
            color: 'transparent',
        }}>{str.map((row, index) => (
            <span key={index}>{row}</span>
        ))}</div>

        {/* 光る文字本体。 */}
        <div style={shineDivStyle}>{str.map((row, index) => (
            <span key={index} id={`shine${index}`}  className={`shine`}>{row}</span>
        ))}</div>

    </div>
  </>)
}

export default VideoImage
