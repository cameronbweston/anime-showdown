import {Router} from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as reviewsCtrl from '../controllers/review.js'

export {
    router
  }

  const router = Router();

  /*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth,reviewsCtrl.index)
router.post('/:id', checkAuth,reviewsCtrl.create)
router.put('/:id', checkAuth,reviewsCtrl.update)
router.delete('/:id', checkAuth,reviewsCtrl.delete)