export async function onRequest({ request }) {
  // const { method, headers, body } = request
  // const { file, ...bd } = body
  // const newUrl = new URL(url)
  // console.log(newUrl)
  // const res = await fetch(`https://api.imgur.com/3/upload`, { method, headers: { ...headers, Authorization: 'Client-ID 546c25a59c58ad7' }, body: { ...bd, image: file } })
  // const resText = await res.text()
  // return resText
  return fetch('https://catbox.moe/user/api.php', {
    headers: {
      accept: 'application/json',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7,ja;q=0.6,fr;q=0.5,id;q=0.4,ar;q=0.3,hi;q=0.2,ko;q=0.1,th;q=0.1,fil;q=0.1,vi;q=0.1,ru;q=0.1,zh-TW;q=0.1',
      cookie: 'PHPSESSID=hl9bavb2ko2akpkvgoiu3o15d8',
      Referer: 'https://catbox.moe/'
    },
    body: request.body,
    method: request.method
  })
}

// const client_id = () => `${Array.from({ length: 15 }, () => Math.random().toString(36).slice(2)).join('')}`
// console.log(client_id)
