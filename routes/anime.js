import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as animeCtrl from '../controllers/anime.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/search/:title', animeCtrl.searchAnime)
router.get('/getRandomShowsForGameStart', animeCtrl.getRandomShowsForGameStart)
router.post('/addToUserCollection', checkAuth, animeCtrl.addToUserCollection)
router.delete('/removeFromUserCollection/:id', checkAuth, animeCtrl.removeFromUserCollection)