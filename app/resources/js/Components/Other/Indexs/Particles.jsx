import {useEffect} from 'react'
import app3 from '@/Libs/particles/app3'
import particles from '@/Libs/particles/particles'

const Particles = props => {
    const style = {
        position:'absolute',
        top:0,
        left:0,
        width: '100%',
        height: '100%',
        opacity: 0.5,
        ...props.style,
    }

    // scriptタグを入れる変数
    let script = null
    useEffect(() => {
        // すでに同じidのscriptタグがあれば処理しない
        if (document.getElementById('script') === null) {
            // scriptタグを生成
            script = document.createElement('script')
            script.id = 'script'

            // scriptタグ内に、入れたいコードを埋め込む
            script.innerHTML = `
            ${particles}
            ${app3}
        `
        setTimeout(() => {
            document.body.appendChild(script)
        }, 120)
       }
    }, [])

    return (<>
        {/* パーティクルを描画するコンテナ */}
        <div id="particles-js" style={style}
            ref={props.particleRef}
        ></div>
    </>)
}

export default Particles
