import React from 'react'

export default function App() {
  const [status, setStatus] = React.useState<string>('ready')

  async function pingBackground() {
    try {
      const response = await chrome.runtime.sendMessage({ type: 'PING' })
      setStatus(`bg: ${response?.pong ?? 'no response'}`)
    } catch (e) {
      setStatus('bg: error')
    }
  }

  return (
    <div style={{ minWidth: 320, padding: 12, fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
      <h1 style={{ margin: 0 }}>🛡️ PhishingGuard</h1>
      <p style={{ marginTop: 8 }}>Multimodal phishing shield (Phase 2 scaffold)</p>
      <button onClick={pingBackground}>Test Background</button>
      <div style={{ marginTop: 8, fontSize: 12, opacity: 0.8 }}>Status: {status}</div>
    </div>
  )
}
