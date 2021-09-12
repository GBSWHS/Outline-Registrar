import Image from 'next/image'

export default function Home () {
  return (
    <div className="container">
      <div className="logo-container">
        <a target="_blank" href="https://github.com/GBSWHS">
          <Image src="/logo.png" width="150" height="150" className="logo"/>
        </a>
      </div>

      <div className="head">
        <Image src="/outline.png" width="70" height="70"/>
        <div>
          <h1>Outline Registrar</h1>
          <p className="hide-phone">교육청 검열 역겨워;; 아웃라인 접속주소 생성기</p>
        </div>
      </div>

      <br />
      <br />

      <p>접속 주소를 생성하려면 로그인 하세요</p>
      <br />
      <a href="/api/redirect_login" className="login">통합 계정으로 로그인</a>
    </div>
  )
}
