import RepositoryInterface from 'src/shared/repository/repository-interface'
import { UsersDTO } from './dto/users-dto'

export default interface UsersRepositoryInterface extends RepositoryInterface<UsersDTO>{
  findUserById(id: string): Promise<UsersDTO>
  findUsersByName(name: string): Promise<UsersDTO[]>
  findUsersByRole(role: string): Promise<UsersDTO[]>
}
