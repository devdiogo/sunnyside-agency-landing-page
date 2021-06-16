import type { AppProps } from "next/app"
import { createGlobalStyle } from "styled-components"
import { layout_size } from "../styles/style-guide"

const GlobalStyle = createGlobalStyle`
  html, body, p, ol, ul, li, hr, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button, input, select {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  img, video {
    height: auto;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .menu-active {
    display: block !important;
  }

  @media (max-width: ${layout_size.mobile}) {
    .menu-arrow-active {
      display: block !important;
    }
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
