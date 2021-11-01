import {Router} from 'express'
const router = Router()

import {CreateUserController} from './Controllers/CreateUserController'
import {ListUserController} from './Controllers/ListUserController'
import { UpdateUserController } from './Controllers/UpdateUserController'
import { DeleteUserController } from './Controllers/DeleteUserController'

router.post('/user'  , new CreateUserController().handle )

router.post('/list/user' , new ListUserController().handle )

router.put('/update/user' , new UpdateUserController().handle )

router.post('/delete/user' , new DeleteUserController().handle )

export {router}