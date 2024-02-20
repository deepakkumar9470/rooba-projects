import express from 'express'
const router  = express.Router()
import {addUser,getUsers,getAggregateUsers} from '../controllers/user.js'


//@  /api/user/add
router.post('/add' ,addUser)

//@  /api/user/get
router.get('/get', getUsers)

//@  /api/user/get/aggregate
router.get('/get/aggregate', getAggregateUsers)


export default router