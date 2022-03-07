import { Router } from "express"
// import { isLoggedIn } from '../middleware/middleware.js'
import * as plansCtrl from "../controllers/plans.js"

const router = Router()

router.get("/", plansCtrl.index)

router.get('/new', plansCtrl.new)

export {
  router
}