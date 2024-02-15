import { usePage } from "@inertiajs/react"
import { css } from "@emotion/react"
import { useMediaQuery } from "@mui/material"
import { defaultTheme, DefaultThemeProvider } from "@/Components/defaultThemeProvider"

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
            padding:64px 16px 64px 16px;
            max-width: 800px;
        `}>
            {/* 動画と光る文字とパーティクル */}
            <div css={css`
                position:relative;
                margin:0 auto;
            `}>
                { isMobile? <VideoImage /> : <Video /> }

                <Particles style={{
                    position:'absolute',
                    top:0,
                    left:0,
                }} />
            </div>

            {/* サイト説明 */}
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={4}
                css={css`
                    margin-top:32px;
                `}
            >
                <h2>作成したサイト 一覧</h2>

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



        </div>



        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            css={css`
                margin-top:32px;
               padding:16px 16px 64px 16px;
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

    </DefaultThemeProvider>)
}
