import { ListUserService } from "../services/ListUserService"

class ListUserController{

  async handle(request , response){
    const service = new ListUserService()
    
    const result = await service.execute()

    return response.json(result)


  }
}

export {ListUserController}