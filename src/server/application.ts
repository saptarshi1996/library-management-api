import express, {
  type Application
} from 'express'

import cors from 'cors'

const Application = async (): Promise<Application> => {
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({
    extended: false
  }))

  app.use(cors())

  return app
}

export default Application
