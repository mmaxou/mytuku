export async function onRequest({ request }) {
  const { url, method, headers, body } = request
  const { file, ...bd } = body
  const newUrl = new URL(url)
  console.log(newUrl)
  const res = await fetch(`https://api.imgur.com/3/upload?client_id=546c25a59c58ad7`, { method, headers, body: { ...bd, image: file } })
  const resText = await res.json()
  return resText
  //   if (!resText.data.success) {
  //     return 'Failed'
  //   }
  //   const newRes = new Response(`https://${newUrl.hostname}/v2/${String(resText.data.link).replace('https://i.imgur.com/', '')}`)
  //   newRes.headers.set('Access-Control-Allow-Origin', '*')
  //   return newRes
}

// const client_id = () => `${Array.from({ length: 15 }, () => Math.random().toString(36).slice(2)).join('')}`
// console.log(client_id)
