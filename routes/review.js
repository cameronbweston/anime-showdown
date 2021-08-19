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
router.get('anime/', reviewsCtrl.index)
router.post('anime?:id', reviewsCtrl.create)
router.put('anime/:id', reviewsCtrl.update)
router.delete('anime/:id', reviewsCtrl.delete)