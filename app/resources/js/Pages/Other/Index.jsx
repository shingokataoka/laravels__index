import React from "react"

import { usePage } from "@inertiajs/react"
import { css } from "@emotion/react"
import { useMediaQuery } from "@mui/material"
import { defaultTheme, DefaultThemeProvider } from "@/Components/defaultThemeProvider"
import nl2br from "@/Functions/nl2br"

import VideoImage from "@/Components/Other/Indexs/VideoImage"
import Video from "@/Components/Other/Indexs/Video"
import Particles from "@/Components/Other/Indexs/Particles"
import SiteLink from "@/Components/Other/Indexs/SiteLink"
import { Stack } from "@mui/material"


/** @jsxImportSource @emotion/react */
export default function Index () {
	const bp = defaultTheme().breakpoints
	// max-widthなので、tablet幅未満はtrueを返す。つまり、mobile幅ならtrue。
    const isMobile = useMediaQuery(`(max-width:${(bp.values.tablet - 0.001)}px)`);

    const domain = usePage().props.domain


    const aborts = [
        [`2008年 3月`, `近畿大学理工学部機械工学科を卒業。`],

        [`2008年 4月`, `自動二輪車パーツの製造会社に就職する。`],

        [`2008年 8月`, `音楽家を目指すために退社し、音楽活動を始める。`],

        [`2010年 3月`, `貯金が尽きたためスポーツ量販店に臨時社員として就職し、並行して音楽活動を続ける。
        主に自転車の整備や修理と販売を担当し、後に自転車整備士・自転車技士の資格を取る。

        この時期、インターネット上に音楽や演奏動画などを公開したり交流を持ったことで、webの凄さと可能性を感じ、興味を持ち始めるきっかけとなる。`],

        [`2015年10月`, `音楽を諦め、簡単なwebサイト制作の練習を始める。`],

        [`2016年 3月`, `スポーツ量販店を退社。自分の力で収益を上げることを目標に、webサービス制作を個人で始める。`],

        [`2018年 6月`, `貯金が尽きたため切削工具の製造会社に就職。並行してwebサービス制作を続ける。`],

        [`2019年 2月`, `業務上 避けられない危険性へのリスクを感じたため転職、前回勤めていたスポーツ量販店に再び臨時社員として務める。
        webサービス制作も継続していく。`],

        [`2019年12月`, `複数作ったwebサイトで十分な収益を上げられず挫折、自分には特別な才能は一つもないことをようやく確信する。`],

        [`2020年 1月`, `スキル学習・実践を堅実に積み重ねるほど結果がでるプログラミングの性質が、自分の性に合っている事に気づく。

        プログラマとして就職する事を目標に、基礎から学習をやり直す。`],

        [`2022年 1月`, `Dockerやgithub、Laravel+Inertia+vue3までの基礎学習を終え、腕試しに職場の業務を効率化するwebアプリの制作を始める。`],

        [`2022年12月`, `業務アプリが完成。自分や同僚の業務の効率が1/3になり、意味のあるwebアプリを制作できたと実感する。`],

        [`2023年 1月`, `未学習だったReactを中心に、学習を続ける。`],

        [`2023年 6月`, `学習を続けつつ、徐々にポートフォリオの作成も始める。`],

        [`2024年 3月`, `ポートフォリオが完成し、プログラマになるため就活の準備やエージェントの方へ相談などを始める。
        が、「基礎を学んだ上で自分でも使いたいと思うサイトやアプリ（ポートフォリオ）作成」がまだのため、これでは弱いと考え直す。`],

        [`2024年 同月`, `プログラミング能力向上のために二年前から英語学習をしていたので、「もっと簡単に好きな英語フレーズ練習ができるアプリがあれば良い」と思い webアプリ「英会話めもっく」の開発に取り掛かる。`],

        [`2024年 8月`, `英会話めもっく完成。最初は「好きな英語フレーズをメモして発音も練習」程度に考えていたが、英語に興味のある職場仲間・親友などから貰ったアドバイスや、製作中に自分でも気づいた機能の物足りなさを追加していった事で想定以上に時間がかかる。
        そのことに驚くも知り合いから良い評価をもらい、作ってよかったと実感する。
        この時 仕事の区切りが丁度よかったのもあり、就活を見据え月末に退職。
        `],
        [`2024月 9月`, `やっとの思いで就活に取り掛かる。`],
    ]


    return (<DefaultThemeProvider>
        <style>{`
            body {
                margin:0 !important;
                padding:0 !important;
                background:#222;
            }
            *:not(.shine) {
                font-family:sans-serif;
                color: #eee;
                font-size:18px;
            }
        `}
        </style>

        <div css={css`
            margin:0 auto;
            background: #333;
            max-width: 800px;
        `}>


            {/* 動画と光る文字とパーティクル */}
            <div css={css`
                position:relative;
                margin:0 auto;
            `}>
                { isMobile?
                    <VideoImage />
                : <>
                    <Video />
                    <Particles />
                </> }

            </div>



            {/* サイト説明 */}
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={4}
                css={css`
                    padding:32px 16px;
                    background: linear-gradient(90deg, #333, #555);
                `}
            >
                <h2>作成したサイト 一覧</h2>

                <SiteLink
                    imageFilename={'english_memoc_thumbnail.png'}
                    siteUrl={route('english_memoc_description')}
                >
                    英会話の練習webアプリ
                    <hr css={css`
                        border-color: #fff2;
                    `} />
                    <span css={css`
                        font-size: 0.9rem !important;
                    `}>
                        「セリフをメモして練習しまくりたい」と思い、私自身も使いたいアプリを目指し作りました。<br />
                        一番見て欲しいサイトです。
                    </span>
                </SiteLink>
                <SiteLink
                    imageFilename={'sk_marche_thumbnail.png'}
                    siteUrl={`https://sk-marche.${domain}`}
                >
                    Stripe（テスト環境）を<br />決済導入したECサイト
                </SiteLink>
                <SiteLink
                    imageFilename={'ucrm_thumbnail.png'}
                    siteUrl={`https://ucrm.${domain}`}
                >
                uCRM（顧客管理）サイト
                </SiteLink>
            </Stack>



            {/* 各サイトのgithubへのリンク */}
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                css={css`
                    padding:32px 16px;
                    background: linear-gradient(90deg, #555, #333);
                    * { text-align:center; }
                    a {
                        max-width:630px;
                        width:100%;
                        background: #333;
                        border: 1px #888 solid;
                        border-radius: 8px;
                        padding: 8px;
                        font-size:0.9rem;
                        :hover {
                            background: #505050;
                        }
                    }
                `}
            >

                <h2>ポートフォリオのgithub</h2>

                <p>当サイトは全てdockerを用いて作成しています。</p>

                <a href="https://github.com/shingokataoka/laravels__index">
                    laravels__index<br />
                    現在ページのgithubです。
                </a>

                <a href="https://github.com/shingokataoka/laravels__english_memoc">
                    laravels__english_memoc<br />
                    上記「英会話の練習webアプリ」の<br />
                    guthubです。
                </a>
                <a href="https://github.com/shingokataoka/laravels__sk_marche">
                    laravels__sk_marche<br />
                    上記「Stripe（テスト環境）を 決済導入したECサイト」の<br />
                    guthubです。
                </a>
                <a href="https://github.com/shingokataoka/laravels__ucrm">
                    laravels__ucrm<br />
                    上記「uCRM（顧客管理）サイト」の<br />
                    guthubです。
                </a>
                <a href="https://github.com/shingokataoka/laravels__db_web_ssl">
                    laravels__db_web_ssl<br />
                    上記の複数サイトは、一つのDBコンテナとWEBコンテナを共有で使っています。<br/>
                    （vpsのメモリ制約対策です。）<br />
                    <br />
                    この「DBコンテナとWEBコンテナとSSL化」のgithubです。
                </a>
            </Stack>



            {/* 経歴 */}
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                css={css`
                    padding:32px 16px;
                    background: linear-gradient(90deg, #333, #346);
                `}
            >

                <h2>経歴</h2>

                {/* スマホでの経歴表示 */}
                { !isMobile? '' :
                    <Stack
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                        css={css`
                            text-align: center;
                            .date {
                                width:calc(100% - 32px);
                                border-top: 1px #fff3 solid;
                            }
                        `}
                    >
                        { aborts.map( (row, index) => (<React.Fragment key={index}>
                            <div className="date">{ row[0] }</div>
                            <div>{ nl2br(row[1]) }</div>
                        </React.Fragment>) ) }
                    </Stack>
                }


                {/* パソコンでの経歴表示 */}
                { isMobile? '' :
                    <table>
                        <tbody css={css`
                            td {
                                // border: 1px #555 solid;
                                padding:16px 0px;
                                vertical-align:top;
                            }
                            td.date{
                                width: 130px;
                            }
                        `}>
                        { aborts.map( (row, index) => (<tr key={index}>
                                <td className="date">{row[0]}</td>
                                <td>{ nl2br(row[1]) }</td>
                            </tr>) ) }
                        </tbody>
                    </table>
                }

            </Stack>

        </div>






    </DefaultThemeProvider>)
}
