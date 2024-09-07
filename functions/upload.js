export async function onRequest({ request }) {
  // const { method, headers, body } = request
  // const { file, ...bd } = body
  // const newUrl = new URL(url)
  // console.log(newUrl)
  // const res = await fetch(`https://api.imgur.com/3/upload`, { method, headers: { ...headers, Authorization: 'Client-ID 546c25a59c58ad7' }, body: { ...bd, image: file } })
  // const resText = await res.text()
  // return resText

  return fetch('https://api.imgur.com/3/upload', {
    headers: {
      ...request.headers,
      cookie:
        'postpagebeta=1; _ga=GA1.1.276418670.1723690053; frontpagebetav2=1; pp=8128487286645176; ana_id=f3d485ab-801c-4d05-a602-e5453dbe810c; is_emerald=0; is_authed=0; user_id=0; mp_d7e83c929082d17b884d6c71de740244_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A19153eee42513f1-09865a851a3408-26001e51-384000-19153eee42513f1%22%2C%22%24device_id%22%3A%20%2219153eee42513f1-09865a851a3408-26001e51-384000-19153eee42513f1%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.v2ex.com%2Ft%2F1064448%22%2C%22%24initial_referring_domain%22%3A%20%22www.v2ex.com%22%2C%22__mps%22%3A%20%7B%22%24os%22%3A%20%22Windows%22%2C%22%24browser%22%3A%20%22Chrome%22%2C%22%24browser_version%22%3A%20128%2C%22assembly_uid%22%3A%20%22f3d485ab-801c-4d05-a602-e5453dbe810c%22%2C%22Ad%20Blocker%20Used%22%3A%20false%2C%22Show%20Mature%22%3A%20false%7D%2C%22__mpso%22%3A%20%7B%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.v2ex.com%2Ft%2F1064448%22%2C%22%24initial_referring_domain%22%3A%20%22www.v2ex.com%22%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22imgur_platform%22%3A%20%22desktop%20web%22%2C%22version_name%22%3A%20%2212c46d6%22%2C%22user%20agent%22%3A%20%22Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F128.0.0.0%20Safari%2F537.36%22%2C%22assembly_uid%22%3A%20%22f3d485ab-801c-4d05-a602-e5453dbe810c%22%2C%22signed_in%22%3A%20false%7D; _ga_1HL8WM6LBS=GS1.1.1725678705.5.1.1725678708.0.0.0; IMGURSESSION=a0e111cee3e7542b2d3feabba2f88bc2; _awl=2.1725678751.5-d5e323853c19055707f649c0dbbef513-6763652d617369612d6561737431-0',
      Authorization: 'Client-ID 546c25a59c58ad7'
    },
    body: request.body,
    method: 'POST'
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
