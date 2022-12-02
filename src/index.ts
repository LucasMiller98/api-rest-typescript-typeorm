import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes/routes'

// Depois que o database inicializar o express inicializa
AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())

  app.use(routes)
  
  app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
})
