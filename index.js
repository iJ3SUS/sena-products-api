
import * as ProductController from './controllers/product.controller.js'
import * as UserController from './controllers/user.controller.js'
import * as AuthController from './controllers/auth.controller.js'
import { authHook } from './hooks/auth.js'

import fastify from 'fastify'

const app = fastify({
  logger: {
    level: 'error'
  }
})

app.addHook('preHandler', authHook)

app.get('/products', ProductController.browse)
app.get('/products/:id', ProductController.show)
app.post('/products', ProductController.create)
app.put('/products/:id', ProductController.update)
app.delete('/products/:id', ProductController.remove)

app.get('/users', UserController.browse)
app.get('/users/:id', UserController.show)
app.post('/users', UserController.create)
app.put('/users/:id', UserController.update)
app.delete('/users/:id', UserController.remove)

app.post('/login', AuthController.login)

app.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {

  if (err) {
    app.log.error(err)
    process.exit(1)
  }

  console.log(`Server listening at ${address}`)

})



