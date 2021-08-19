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
router.get('/', reviewsCtrl.index)
router.post('/:id', reviewsCtrl.create)
router.put('/:id', reviewsCtrl.update)