import {prismaClient} from '../prisma'


class UpdateUserService{
  async execute(id , name , email , password){
    const updateUser = await prismaClient.user.update({
     where:{
        id
     },
     data:{
      name,
      email,
      password
    }
    })


    return updateUser
  }
} 

export {UpdateUserService}