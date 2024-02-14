import { css } from "@mui/material"
import { defaultTheme, DefaultThemeProvider } from "@/Components/defaultThemeProvider"
import { Stack } from "@mui/material"

/** @jsxImportSource @emotion/react */
export default function SiteLink(props) {
    const {imageFilename, siteUrl, children} = props

    const bp = defaultTheme().breakpoints

    return (<a href={siteUrl}>
    {/* スマホ幅で表示 */}
    <MobileJsx allProps={{bp, ...props}} />
     {/* タブレット幅で表示 */}
     <TabletJsx allProps={ {bp, ...props} } />
    </a>)

}


function MobileJsx({allProps}) {
    const {bp, imageFilename, siteUrl, children} = allProps

    return(<Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        css={css`
            ${bp.up('tablet')}{ display:none; }
            max-width:300px;
            background: #555;
            border: 1px #888 solid;
            border-radius:8px;
            padding:12px;
            &:hover{
                background:#777;
                color:white;
            }
        `}
    >
        <div>{ children }</div>
        <img src={ `/images/thumbnails/${imageFilename}` } />
    </Stack>)
}


// タブレット幅で表示のJSX
function TabletJsx({allProps}) {
    const {bp, imageFilename, siteUrl, children} = allProps

    return (<Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        css={css`
            ${bp.down('tablet')}{ display:none; }
            max-width:600px;
            background: #555;
            border: 1px #888 solid;
            border-radius: 8px;
            padding: 8px;
            &:hover{
                background:#777;
                color:white;
            }
        `}
    >
        <div css={css`width:50%; text-align:center;`}>{children}</div>
        <div css={css`width:50%;`}>
            <img src={`/images/thumbnails/${imageFilename}`} />
        </div>
    </Stack>)
}
