import useSWR from 'swr'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
export default function CallbackPage () {
  const router = useRouter()

  useEffect(() => {
    const cleanUri = location.protocol + '//' + location.host + location.pathname
    window.history.replaceState({}, document.title, cleanUri)
  })

  const { data, error } = useSWR('/api/gen_address?key='+router.query.code, fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount:false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0
  })

  function copyAddress (event) {
    navigator.clipboard.writeText(data.address)
    event.target.innerText = '복사하였습니다!'

    setTimeout(() => {
      event.target.innerText = '주소 복사'
    }, 1000)
  }

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

      {!data && !error ? <p>접속 주소를 발급중입니다</p>: <></>}
      {error ? <p>접속 주소 발급중 에러가 발생했습니다.<br />{error.toString()}</p>: <></>}

      {data && !error && data.success ? (
        <div>
          <p>발급된 Outline 접속 주소:</p>
          <pre className="address">{data?.address || '오류! 다시 시도하세요'}</pre>
          <button className="login" onClick={copyAddress}>주소 복사</button>

          <br />

          <h3>접속방법</h3>
          <p>1. Outline-client를 다운로드 받으세요</p>
          <br />
          <a className="login" href="https://s3.ap-northeast-2.amazonaws.com/outline.gbsw.hs.kr/outline-downloads/Outline-Client.exe">클라이언트 다운로드</a>

          <br />
          <br />
          <br />
          <p>2. + 버튼을 누른후 접속 주소를 입력한후 추가하세요</p>
          <Image src="/screenshot.png" width="300" height="550"/>

          <br />
          <br />
          <p>3. Connect!</p>
          <p>끝~</p>
        </div>
      ): <></>}

      {data && !error && !data.success ? (
        <div>
          <p>접속 주소 발급중 에러가 발생했습니다.</p>
          <p>{data.message} (다시시도하세요)</p>
          <a href="/">돌아가기</a>
        </div>
      ): <></>}
    </div>
  )
}