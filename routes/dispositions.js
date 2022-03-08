import { Router } from "express"
import { isLoggedIn } from '../middleware/middleware.js'
import * as dispositionsCtrl from "../controllers/dispositions.js"

const router = Router()

router.get('/new', isLoggedIn, dispositionsCtrl.new)

router.post('/', isLoggedIn, dispositionsCtrl.create)

export {
  router
}