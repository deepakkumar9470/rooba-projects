import express from 'express'
const router  = express.Router()
import {addUserProfile,
    getUsersProfile,
    getSingleUserProfile,
    editUserProfile,
    deleteUserProfile } from '../controllers/user.js'
import upload from '../multerfileupload/fileUpload.js'


//@  /api/user/add
router.post('/add',upload.single('profile') ,addUserProfile)

//@  /api/user/get
router.get('/get', getUsersProfile)

//@  /api/user/get/1234
router.get('/get/:id', getSingleUserProfile)

//@  /api/user/edit/1234
router.put('/edit/:id',upload.single('profile'),editUserProfile )


//@ /api/user/:id
router.delete('/:id', deleteUserProfile)

export default router