import {Router} from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
    router
  }

  const router = Router();

  /*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.post('/:id', reviewsCtrl.create)