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
      ...request.headers,
      accept: 'application/json',
      'accept-language': 'zh-CN,zh;q=0.9',
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      priority: 'u=1, i',
      'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'x-requested-with': 'XMLHttpRequest',
      cookie: 'PHPSESSID=5hjbtnp53scmc0hkg8uml38kcp',
      Referer: 'https://catbox.moe/',
      'Referrer-Policy': 'same-origin'
    },
    body: request.body,
    method: request.method
  })
}

// const client_id = () => `${Array.from({ length: 15 }, () => Math.random().toString(36).slice(2)).join('')}`
// console.log(client_id)
