import Image from 'next/image'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <div className="logo-container">
        <a target="_blank" href="https://github.com/GBSWHS">
          <Image src="/logo.png" width="150" height="150" className="logo"/>
        </a>
      </div>
      <Component {...pageProps} />
      <footer>
        좋으면 스타나 박아라! 스타 10개 뚫으면 일일 10기가 제한 풀어줌~&nbsp;
        <a href="https://github.com/GBSWHS/Outline-Registrar">스타 박으로 가기</a>
      </footer>
    </>
  )
}

export default MyApp
