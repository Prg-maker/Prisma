import {DeleteUserService} from '../services/DeleteUserService'


class DeleteUserController {

  async handle(request , response){
    const {id , name , email , password} = request.body

    const service = new DeleteUserService

    const result = service.execute(id , name , email, password)

    return response.json(result)

  }

}

export {DeleteUserController}