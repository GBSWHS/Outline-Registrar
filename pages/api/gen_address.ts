import { NextApiRequest, NextApiResponse } from 'next'

export default async function RedirectLoginApi (req: NextApiRequest, res: NextApiResponse) {
  const { key } = req.query
  if (!key) return res.send({ success: false, message: '통합로그인 결과를 받지 못했습니다.' })
  
  const resp = await fetch('https://auth.gbsw.hs.kr/api/ident', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code: key,
      grant_type: 'authorization_code',
      client_id: process.env.OAUTH2_CLIENT_ID,
      client_secret: process.env.OAUTH2_CLIENT_SECRET,
      redirect_uri: process.env.OAUTH2_REDIRECT_URI
    })
  }).then((res) => res.json())
    .catch((error) => res.send({ sucess: false, message: error.message }))

  if (!resp) return
  if (!resp.success) return res.send({ success: false, message: '통합로그인 시스템에서 오류를 반환했습니다: ' + resp.message })

  const outlineRes = await fetch(process.env.OUTLINE_ACCESS_KEYS_ENDPOINT, {
    method: 'POST'
  }).then((res) => res.json())
    .catch((error) => res.send({ success: false, message: error.message }))

  if (!outlineRes) return
  res.send({ success: true, address: outlineRes.accessUrl })
}