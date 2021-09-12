import Link from 'next/link'
import Image from 'next/image'

export default function Home () {
  return (
    <div className="container">
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
      <p className="login"><Link href="/api/redirect_login">통합 계정으로 로그인</Link></p>
    </div>
  )
}
