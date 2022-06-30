import RepositoryInterface from 'src/shared/repository/repository-interface'
import { UsersBackendDTO } from './dto/users-backend-dto'

export default interface UsersRepositoryInterface extends RepositoryInterface<UsersBackendDTO>{
  findUserById(id: string): Promise<UsersBackendDTO | undefined>
  findUsersByName(name: string): Promise<UsersBackendDTO[] | undefined>
}
