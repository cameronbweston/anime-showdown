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
router.get('/search/:title', checkAuth,animeCtrl.searchAnime)
router.get('getRandomShowsForGameStart', checkAuth,animeCtrl.getRandomShowsForGameStart)