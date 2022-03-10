import { Router } from "express"
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)

router.get('/:id', isLoggedIn, profilesCtrl.show)

// router.delete('/:id/plans/:planId', isLoggedIn, profilesCtrl.deletePlan)

export {
  router
}