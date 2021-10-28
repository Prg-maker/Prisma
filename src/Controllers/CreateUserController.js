import {CreateUserService} from '../services/CreateUserServices'


class CreateUserController{
  async handle(request , response){
    const {name , email , password} = request.body
    const user = {
      name,
      email,
      password
    }

    const service = new CreateUserService

    const result = service.execute(name , email , password)

    return response.json(user)
  }
}

export {CreateUserController}