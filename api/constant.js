//
module.exports = Object.freeze({
  FETCH_INIT: {
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,fr;q=0.7,ja;q=0.6,zh-TW;q=0.5,es;q=0.4',
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      cookie:
        'ASP.NET_SessionId=ykku1clmjiesjjp2ldjvnp53; _ga=GA1.2.950779462.1659792619; cf_clearance=9y5387FELe5rVq7n91EqyXZfWzX4yPJOQsvAM2916cU-1660768192-0-250; __cflb=02DiuFnsSsHWYH8WqVXcJWaecAw5gpnmegqBvrDh6tfuW; _gid=GA1.2.123884563.1661844074; __cf_bm=R2zcqaRBRgzcbnGvf_0_U3dAgdZ_RsqxN.L4OpLMnOY-1661846520-0-AVAGeMUFU1/s/6wD+ddLNvcTw377Tlgi8TtN2/RMgV9pxlp3BJ/P6tfJyJPwPmprkz4cHMmWa/7Wil6qPPiKNzkMpWP/7/cKLUAr+kzNI0EWdHQ9JElZ4pUpKWWSHsC6uA==',
    },
  },
  ETHERSCAN_URL: 'https://cn.etherscan.com/txs',
  ROW_SELECTOR: '#paywall_mask > table > tbody',
  TOTAL_SELECTOR: '#ContentPlaceHolder1_topPageDiv > p > span',
});
