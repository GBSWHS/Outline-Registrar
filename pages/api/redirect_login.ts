import { NextApiRequest, NextApiResponse } from 'next'

export default function RedirectLoginApi (_: NextApiRequest, res: NextApiResponse) {
  const loginUrl = new URL('/auth', 'https://auth.gbsw.hs.kr')

  loginUrl.searchParams.append('client_id', process.env.OAUTH2_CLIENT_ID)
  loginUrl.searchParams.append('redirect_uri', process.env.OAUTH2_REDIRECT_URI)
  loginUrl.searchParams.append('response_type', 'code')

  res.redirect(loginUrl.toString())
}