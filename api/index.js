import express from 'express'

const router = express.Router()
const TOKEN = 'example-token'

// res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.post('/login', (req, res) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    return res.json({
      token: TOKEN
    })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

router.get('/secretData', (req, res) => {
  const headerValue = req.get('Authorization')
  if (headerValue && headerValue === ('Bearer ' + TOKEN)) {
    return res.json({
      message: 'secret data here'
    })
  }
  res.status(401).json({ message: 'Token Invalid' })
})

export default {
  path: '/api',
  handler: router
}
