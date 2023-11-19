import app from './app'

const { APP_PORT } = process.env

const port: number = Number(APP_PORT)

app.listen(port, (): void => {
  console.log(`Server ping: http://localhost:${port}/ping`)
})
