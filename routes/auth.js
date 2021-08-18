import { Router } from 'express'
import * as authCtrl from '../controllers/auth.js'
import { checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router()

/*---------- Public Routes ----------*/
router.post('/signup', checkAuth, authCtrl.signup)
router.post('/login', checkAuth, authCtrl.login)
/*---------- Protected Routes ----------*/
