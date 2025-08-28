/// <reference types="chrome" />

console.log('[PhishingGuard] service worker active')

chrome.runtime.onInstalled.addListener(() => {
  console.log('[PhishingGuard] installed')
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === 'PING') {
    sendResponse({ pong: 'PONG' })
    return true
  }
  if (message?.type === 'SCAN_ACTIVE_TAB') {
    // future: invoke detection pipeline via backend API
    sendResponse({ ok: true })
    return true
  }
})
