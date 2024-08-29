import {usePage} from '@inertiajs/react'
import { Link, Head } from '@inertiajs/react';

import { css } from '@mui/material';

import { Stack } from '@mui/material';
import {Button} from '@mui/material';
import nl2br from '@/Functions/nl2br';




/** @jsxImportSource @emotion/react */
export default function EnglishMemocDescription({}) {


    const domain = usePage().props.domain




    return (<div css={css`
        background: #121212;
        color: #eee;
    `}>
            <Head title="英会話めもっくの説明" />



            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                css={css`
                    margin:0 auto;
                    max-width: 1200px;
                    padding:32px 16px 16px 16px;
                `}
            >

                <div css={css`font-size:1.5rem;`}>英語練習アプリ「英会話めもっく」の説明</div>

                <div css={css`text-align:center;`}>{ nl2br(`
                    主な機能
                    ・英語か日本語のセリフをメモする
                    ・英語なら自動和訳、日本語なら自動英訳ができる
                    ・再生ボタンかスロー再生ボタンで英語を聴く事ができる
                    ・覚えたら「和訳」「英訳」「聴き取り」モードで習得できているか確認できる
                    ・「AIと英会話」ができる

                    以下リンクで「英会話めもっく」に移動します。
                `) }</div>

            </Stack>


            <div css={css`
                text-align:center;
                width:400px;
                max-width:100%;
                background: #424242;
                text-align:center;
                margin: 0 auto;
                margin-bottom:32px;
                padding:16px;
            `}>
                <span css={css`font-size:1.5rem;`}>テスト用ユーザー</span><br/ >
                <br/ >
                当サイトはポートフォリオです。<br/ >
                <span css={css`text-decoration:underline;`}>遠慮なくログイン</span>していただければ幸いです。<br/ >
                <br/ >
                <div>テスト用ユーザー</div>
                メールアドレス : user5@test.com<br/ >
                パスワード : user5555<br/ >

                <hr css={css` margin:8px 0; border-color: rgb(117, 117, 117); `} />

                mailserverというdockerイメージで自作メールサーバーを立ち上げたので、実際に<span css={css`
                    text-decoration: underline;
                `}>ご自身のメールアドレスで登録して使用も可能</span>です。<br />


                <hr css={css` margin:8px 0; border-color: rgb(117, 117, 117); `} />
                <a href={`https://english-memoc.${domain}`}>
                    <Button variant="contained">英会話めもっくへ</Button>
                </a>



            </div>



    </div>);

}
