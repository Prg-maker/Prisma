import { UpdateUserService } from "../services/UpdateUserService"



class UpdateUserController {
  async handle(request , response){
    const {id , name , email , password} = request.body


    const user = {
      id,
      name, 
      email,
      password
    }

    const service  = new UpdateUserService

    const result = service.execute(id , name , email, password)

    return response.json(user)

  }
}

export {UpdateUserController}