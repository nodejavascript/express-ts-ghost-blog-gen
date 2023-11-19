// routes.ts
import { Router } from 'express'
import getPing from './ping'
import ghostJwt from './ghost-jwt'

const router = Router()

router.use('/ping', getPing)
router.use('/ghost-jwt', ghostJwt)

export default router
