export async function onRequest({ request }) {
  // const { method, headers, body } = request
  // const { file, ...bd } = body
  // const newUrl = new URL(url)
  // console.log(newUrl)
  // const res = await fetch(`https://api.imgur.com/3/upload`, { method, headers: { ...headers, Authorization: 'Client-ID 546c25a59c58ad7' }, body: { ...bd, image: file } })
  // const resText = await res.text()
  // return resText

  return fetch('https://api.imgur.com/3/image', {
    headers: {
      ...request.headers,
      cookie:
        'postpagebeta=1; ana_id=fc438548-05ad-432c-8b7a-6daced2f674d; is_authed=0; user_id=0; mp_d7e83c929082d17b884d6c71de740244_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A191cb2010abc11-0d720d1f6f1c9f-26001151-384000-191cb2010abc12%22%2C%22%24device_id%22%3A%20%22191cb2010abc11-0d720d1f6f1c9f-26001151-384000-191cb2010abc12%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22__mps%22%3A%20%7B%22%24os%22%3A%20%22Windows%22%2C%22%24browser%22%3A%20%22Chrome%22%2C%22%24browser_version%22%3A%20128%2C%22assembly_uid%22%3A%20%22fc438548-05ad-432c-8b7a-6daced2f674d%22%2C%22Ad%20Blocker%20Used%22%3A%20false%2C%22Show%20Mature%22%3A%20false%7D%2C%22__mpso%22%3A%20%7B%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22imgur_platform%22%3A%20%22desktop%20web%22%2C%22version_name%22%3A%20%2212c46d6%22%2C%22user%20agent%22%3A%20%22Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F128.0.0.0%20Safari%2F537.36%22%2C%22assembly_uid%22%3A%20%22fc438548-05ad-432c-8b7a-6daced2f674d%22%2C%22signed_in%22%3A%20false%7D; _awl=2.1725689764.5-41d427bfc8b9b08831f9117d2fc55f1b-6763652d617369612d6561737431-0; is_emerald=0; _ga_1HL8WM6LBS=GS1.1.1725689763.1.0.1725689763.0.0.0; _ga=GA1.1.1901620507.1725689764; IMGURSESSION=d753244ce965492b11b56f6fbd2174ae',
      Authorization: 'Client-ID 546c25a59c58ad7'
    },
    body: request.body,
    method: request.method
  })
  //   if (!resText.data.success) {
  //     return 'Failed'
  //   }
  //   const newRes = new Response(`https://${newUrl.hostname}/v2/${String(resText.data.link).replace('https://i.imgur.com/', '')}`)
  //   newRes.headers.set('Access-Control-Allow-Origin', '*')
  //   return newRes
}

// const client_id = () => `${Array.from({ length: 15 }, () => Math.random().toString(36).slice(2)).join('')}`
// console.log(client_id)
