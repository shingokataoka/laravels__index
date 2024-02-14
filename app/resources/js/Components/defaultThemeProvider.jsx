// MUIの本当のデフォのthemeを使わず、多分CSSリセットしてる。
// このCssBaseLineを先頭に書かないとバグる
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme } from "@mui/material";
import { ThemeProvider } from '@mui/material';


// breakpointsを設定（レスポンシブなどに対応するためのもの）
// mui公式のものをコピペした。
// mui公式リンク「https://mui.com/material-ui/customization/breakpoints/#:~:text=Feel%20free%20to%20have%20as%20few%20or%20as%20many%20breakpoints%20as%20you%20want%2C%20naming%20them%20in%20whatever%20way%20you%27d%20prefer%20for%20your%20project.」
const breakpointsObj = {
    breakpoints: {
        values: {
          mobile: 0,        // スマホ幅以上（タブレット幅未満）
          tablet: 640,      // タブレット幅以上（ノートPC幅未満）
          laptop: 1024,     // ノートPC幅以上（デスクトップPC幅未満）
          desktop: 1200,    // デスクトップPC幅以上
        },
      },
}





// 自作デフォルトthemeを返す関数
export function defaultTheme() {
    return createTheme({
        ...breakpointsObj,
    })
}


// ●DefaultThemeProviderコンポーネントを返す
// このコンポーネントで囲むと、中身は自作デフォルトthemeの配色になる。
// laravel+breeze+Reactでは、トップの<App>を囲めない（バグる）から、
// Layout系コンポーネントを囲むなどで、全てに適用させる
export function DefaultThemeProvider(props) {
    const theme = defaultTheme()

    return (<>
        <ThemeProvider theme={ theme }>
            {/* CssBaseLine(MUIのリセットCSS)をしないと一部適用されない */}
            <CssBaseline />
                { props.children }
        </ThemeProvider>
        </>)
}
