import { Router } from "express"
import { isLoggedIn } from '../middleware/middleware.js'
import * as plansCtrl from "../controllers/plans.js"

const router = Router()

router.get("/", isLoggedIn, plansCtrl.index)

router.get('/new', isLoggedIn, plansCtrl.new)

router.post('/', isLoggedIn, plansCtrl.create)

router.get('/:id', isLoggedIn, plansCtrl.show)

router.get('/:id/edit', isLoggedIn, plansCtrl.edit)

router.delete('/:id', isLoggedIn, plansCtrl.delete)

export {
  router
}