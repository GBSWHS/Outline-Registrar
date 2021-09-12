import Head from 'next/head'
import Image from 'next/image'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Outline Registrar</title>
        <link rel="shortcut icon" href="/outline.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Outline Registrar" />
        <meta property="og:title" content="아웃라인 접속주소 생성기" />
        <meta property="og:description" content="아웃라인 접속 주소를 자동으로 생성해 줍니다!" />
        <meta property="og:image" content="https://outline.gbsw.hs.kr/outline.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="logo-container">
        <a target="_blank" rel="noreferrer" href="https://github.com/GBSWHS">
          <Image src="/logo.png" width="150" height="150" className="logo"/>
        </a>
      </div>
      <Component {...pageProps} />
      <footer>
        좋으면 스타나 박아라! 스타 10개 뚫으면 한달 10기가 제한 풀어줌~&nbsp;
        <a href="https://github.com/GBSWHS/Outline-Registrar">스타 박으로 가기</a>
      </footer>
    </>
  )
}

export default MyApp
