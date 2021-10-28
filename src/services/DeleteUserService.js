import {prismaClient} from '../prisma' 


class DeleteUserService{
  async execute(id , name ,email , password){
    const deleteUser  = await prismaClient.user.deleteMany({
      where:{
        id,
        name,
        email,
        password
      }
    })
    return deleteUser

  }
}

export {DeleteUserService}