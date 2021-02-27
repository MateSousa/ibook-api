const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('db.json')

const port = process.env.PORT || 3333

app.db = router.db

app.use(auth)
app.use(router)
app.listen(port)
