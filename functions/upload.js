export async function onRequest({ request }) {
  // const { method, headers, body } = request
  // const { file, ...bd } = body
  // const newUrl = new URL(url)
  // console.log(newUrl)
  // const res = await fetch(`https://api.imgur.com/3/upload`, { method, headers: { ...headers, Authorization: 'Client-ID 546c25a59c58ad7' }, body: { ...bd, image: file } })
  // const resText = await res.text()
  // return resText

  return fetch('https://upload.cc/image_upload', {
    headers: {
      accept: 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7,ja;q=0.6,fr;q=0.5,id;q=0.4,ar;q=0.3,hi;q=0.2,ko;q=0.1,th;q=0.1,fil;q=0.1,vi;q=0.1,ru;q=0.1,zh-TW;q=0.1',
      'cache-control': 'no-cache',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundarynalIFW9fBhwEQhlE',
      pragma: 'no-cache',
      priority: 'u=1, i',
      'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'x-requested-with': 'XMLHttpRequest',
      cookie: '__ddgid_=7jLzBrFEfQIgmyAW; __ddgmark_=qRQWO2zFPZSQsRCm; __ddg5_=zLb12g6WxB4Xx2td; __ddg2_=nITI7CrUf5pm5AXu; __ddg1_=sBY231sonEQhWLJjRJcH',
      Referer: 'https://upload.cc/'
    },
    body: request.body,
    method: 'POST'
  })
}

// const client_id = () => `${Array.from({ length: 15 }, () => Math.random().toString(36).slice(2)).join('')}`
// console.log(client_id)
