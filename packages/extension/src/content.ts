console.log('[PhishingGuard] content script loaded')
chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg?.type === 'SCAN_PAGE') {
    // placeholder for future detection logic
    const result = { ok: true, found: false }
    sendResponse(result)
  }
})
