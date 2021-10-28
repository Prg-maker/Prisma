import { response } from 'express'
import {prismaClient} from '../prisma'


class CreateUserService{
  async execute(name , email  , password){

    const User = await prismaClient.user.create({
      data:{
        name,
        email,
        password
      }
    })


    return User
  }
}

export {CreateUserService}