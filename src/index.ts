import Application from './server/application'

import environment from './config/environment'

Application().then(server => {
  server.listen(+environment.PORT, environment.HOST, () => {
    console.log(`Server running on port ${environment.HOST}:${environment.PORT}`)
  })
}).catch(err => { throw err })
