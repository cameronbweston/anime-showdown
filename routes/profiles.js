import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/edit', checkAuth, profilesCtrl.edit)
router.get('/userProfile', checkAuth, profilesCtrl.userProfile)
router.get('/:id', checkAuth, profilesCtrl.getProfileDetails)
router.get('/', checkAuth, profilesCtrl.index)
router.patch('/friend/:id', checkAuth, profilesCtrl.friend)
router.patch('/unfriend/:id', checkAuth, profilesCtrl.unfriend)