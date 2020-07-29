export default () => {
  window.$crisp = []
  window.CRISP_WEBSITE_ID = '64e48c18-1956-42f7-a5c0-ad6f5768af27'
  ;(function() {
    const d = document
    const s = d.createElement('script')

    s.src = 'https://client.crisp.chat/l.js'
    s.async = 1
    d.getElementsByTagName('head')[0].appendChild(s)
  })()
}
