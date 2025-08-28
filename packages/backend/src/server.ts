import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json({ limit: '1mb' }))
app.use(morgan('tiny'))

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'phishingguard-backend', ts: new Date().toISOString() })
})

app.post('/scan/url', (req, res) => {
  const { url } = req.body || {}
  // placeholder: wire VLM/RL pipeline later
  const verdict = url?.includes('phish') ? 'suspicious' : 'unknown'
  res.json({ verdict })
})

app.listen(PORT, () => {
  console.log(`[backend] listening on :${PORT}`)
})
